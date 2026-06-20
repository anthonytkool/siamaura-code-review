'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Plus, Minus, Loader } from 'lucide-react';
import { Cart, CartItem } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.actions';
import { useTransition } from 'react';

const AddToCart = ({
  cart,
  item,
  stock,
}: {
  cart?: Cart;
  item: CartItem;
  stock: number;
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  const remainingStock = existItem ? stock - existItem.qty : stock;
  const isOutOfStock = stock <= 0;
  const hasReachedStockLimit = existItem ? existItem.qty >= stock : false;

  const handleAddToCart = async () => {
    if (isOutOfStock || hasReachedStockLimit) {
      toast({
        variant: 'destructive',
        description: 'Cannot add more than available stock',
      });
      return;
    }

    startTransition(async () => {
      const res = await addItemToCart(item);
      if (!res.success) {
        toast({ variant: 'destructive', description: res.message });
        return;
      }
      toast({ description: res.message });
    });
  };

  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);
      toast({
        variant: res.success ? 'default' : 'destructive',
        description: res.message,
      });
    });
  };

  return existItem ? (
    <div className='flex flex-col gap-2 w-full'>
      <div className='flex items-center justify-center'>
        <Button type='button' variant='outline' onClick={handleRemoveFromCart}>
          {isPending ? (
            <Loader className='w-4 h-4 animate-spin' />
          ) : (
            <Minus className='w-4 h-4' />
          )}
        </Button>

        <span className='px-2'>{existItem.qty}</span>

        <Button
          type='button'
          variant='outline'
          onClick={handleAddToCart}
          disabled={isPending || hasReachedStockLimit}
        >
          {isPending ? (
            <Loader className='w-4 h-4 animate-spin' />
          ) : (
            <Plus className='w-4 h-4' />
          )}
        </Button>
      </div>

      {hasReachedStockLimit && (
        <p className='text-xs text-red-500 text-center'>
          All available pieces have been selected
        </p>
      )}

      {!hasReachedStockLimit && remainingStock <= 3 && (
        <p className='text-xs text-red-500 text-center'>
          Only {remainingStock} left in stock!
        </p>
      )}

      <Button
        className='w-full'
        type='button'
        variant='outline'
        onClick={() => router.push('/cart')}
      >
        View Cart
      </Button>
    </div>
  ) : isOutOfStock ? (
    <Button className='w-full' type='button' disabled>
      Out Of Stock
    </Button>
  ) : (
    <Button
      className='w-full bg-[#b38b2d] text-white hover:bg-[#9f7a24]'
      type='button'
      onClick={handleAddToCart}
    >
      {isPending ? (
        <Loader className='w-4 h-4 animate-spin' />
      ) : (
        <Plus className='w-4 h-4' />
      )}{' '}
      Add To Cart
    </Button>
  );
};

export default AddToCart;
