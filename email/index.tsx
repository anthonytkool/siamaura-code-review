import { Resend } from 'resend';
import { SENDER_EMAIL, APP_NAME } from '@/lib/constants';
import { Order } from '@/types';
import PurchaseReceiptEmail from './purchase-receipt';

export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Order Confirmation ${order.id}`,
    react: <PurchaseReceiptEmail order={order} />,
  });
};
