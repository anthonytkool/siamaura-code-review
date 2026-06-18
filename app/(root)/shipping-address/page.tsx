import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/db/prisma';
import { getMyCart } from '@/lib/actions/cart.actions';
import { getUserById } from '@/lib/actions/user.actions';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ShippingAddress } from '@/types';
import ShippingAddressForm from './shipping-address-form';
import CheckoutSteps from '@/components/shared/checkout-steps';
import { currentUser } from '@clerk/nextjs/server';

export const metadata: Metadata = {
  title: 'Shipping Address',
};

const ShippingAddressPage = async () => {
  const cart = await getMyCart();
  if (!cart || cart.items.length === 0) redirect('/cart');

  const { userId: clerkId } = await auth();
  if (!clerkId) return redirect('/sign-in');
  let dbUser = await prisma.user.findUnique({ where: { clerkId } });

  if (!dbUser) {
    const clerkUser = await currentUser();
    dbUser = await prisma.user.create({
      data: {
        clerkId,
        name:
          clerkUser?.fullName ??
          clerkUser?.emailAddresses[0]?.emailAddress ??
          'User',
        email: clerkUser?.emailAddresses[0]?.emailAddress ?? '',
        updatedAt: new Date(),
      },
    });
  }

  const user = await getUserById(dbUser.id);
  return (
    <>
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
};

export default ShippingAddressPage;
