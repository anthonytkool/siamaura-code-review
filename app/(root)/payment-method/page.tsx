import { Metadata } from 'next';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/db/prisma';
import { getUserById } from '@/lib/actions/user.actions';
import PaymentMethodForm from './payment-method-form';
import CheckoutSteps from '@/components/shared/checkout-steps';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Select Payment Method',
};

const PaymentMethodPage = async () => {
  const { userId: clerkId } = await auth();
  if (!clerkId) return redirect('/sign-in');

  const dbUser = await prisma.user.findUnique({ where: { clerkId } });
  if (!dbUser) return redirect('/sign-in');

  const user = await getUserById(dbUser.id);

  return (
    <>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </>
  );
};

export default PaymentMethodPage;
