'use server';

import { cookies } from 'next/headers';
import { CartItem } from '@/types';
import { convertToPlainObject, formatError, round2 } from '../utils';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/db/prisma';
import { cartItemSchema, insertCartSchema } from '../validators';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@prisma/client';

// Calculate cart prices
const calcPrice = (items: CartItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + Number(item.price) * item.qty, 0)
    ),
    shippingPrice = round2(0),
    taxPrice = round2(0.07 * itemsPrice),
    totalPrice = round2(itemsPrice + taxPrice + shippingPrice);

  return {
    itemsPrice: itemsPrice.toFixed(2),
    shippingPrice: shippingPrice.toFixed(2),
    taxPrice: taxPrice.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  };
};

export async function addItemToCart(data: CartItem) {
  try {
    const sessionCartId = (await cookies()).get('sessionCartId')?.value;
    if (!sessionCartId) throw new Error('Cart session not found');

    const { userId: clerkId } = await auth();
    const dbUser = clerkId
      ? await prisma.user.findUnique({ where: { clerkId } })
      : null;
    const userId = dbUser?.id ?? undefined;

    const cart = await getMyCart();
    const item = cartItemSchema.parse(data);

    const product = await prisma.product.findFirst({
      where: { id: item.productId },
    });

    if (!product) throw new Error('Product not found');

    if (product.stock < 1) {
      throw new Error('Out of stock');
    }

    if (!cart) {
      const newCart = insertCartSchema.parse({
        userId,
        items: [item],
        sessionCartId,
        ...calcPrice([item]),
      });

      await prisma.cart.create({ data: newCart });
      revalidatePath(`/product/${product.slug}`);

      return { success: true, message: `${product.name} added to cart` };
    }

    const cartItems = cart.items as CartItem[];
    const existItem = cartItems.find((x) => x.productId === item.productId);

    if (existItem) {
      const nextQty = existItem.qty + 1;

      if (nextQty > product.stock) {
        throw new Error(`Only ${product.stock} item(s) available in stock`);
      }

      existItem.qty = nextQty;
    } else {
      cartItems.push(item);
    }

    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: cartItems as Prisma.CartUpdateitemsInput[],
        ...calcPrice(cartItems),
      },
    });

    revalidatePath(`/product/${product.slug}`);

    return {
      success: true,
      message: `${product.name} ${existItem ? 'updated in' : 'added to'} cart`,
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function getMyCart() {
  const sessionCartId = (await cookies()).get('sessionCartId')?.value;
  if (!sessionCartId) throw new Error('Cart session not found');

  const { userId: clerkId } = await auth();
  const dbUser = clerkId
    ? await prisma.user.findUnique({ where: { clerkId } })
    : null;
  const userId = dbUser?.id ?? undefined;

  const cart = await prisma.cart.findFirst({
    where: userId
      ? {
          OR: [{ userId }, { sessionCartId }],
        }
      : { sessionCartId },
  });

  if (!cart) return undefined;

  if (userId && !cart.userId) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: { userId },
    });
  }

  return convertToPlainObject({
    ...cart,
    userId: cart.userId ?? userId,
    items: cart.items as CartItem[],
    itemsPrice: cart.itemsPrice.toString(),
    totalPrice: cart.totalPrice.toString(),
    shippingPrice: cart.shippingPrice.toString(),
    taxPrice: cart.taxPrice.toString(),
  });
}

export async function removeItemFromCart(productId: string) {
  try {
    const sessionCartId = (await cookies()).get('sessionCartId')?.value;
    if (!sessionCartId) throw new Error('Cart session not found');

    const product = await prisma.product.findFirst({
      where: { id: productId },
    });

    if (!product) throw new Error('Product not found');

    const cart = await getMyCart();
    if (!cart) throw new Error('Cart not found');

    const cartItems = cart.items as CartItem[];
    const exist = cartItems.find((x) => x.productId === productId);

    if (!exist) throw new Error('Item not found');

    if (exist.qty === 1) {
      cart.items = cartItems.filter((x) => x.productId !== exist.productId);
    } else {
      exist.qty = exist.qty - 1;
      cart.items = cartItems;
    }

    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: cart.items as Prisma.CartUpdateitemsInput[],
        ...calcPrice(cart.items as CartItem[]),
      },
    });

    revalidatePath(`/product/${product.slug}`);

    return { success: true, message: `${product.name} was removed from cart` };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
