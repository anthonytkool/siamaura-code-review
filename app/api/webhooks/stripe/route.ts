import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { updateOrderToPaid } from '@/lib/actions/order.actions';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { message: 'STRIPE_WEBHOOK_SECRET is not configured' },
      { status: 500 }
    );
  }

  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { message: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    const event = stripe.webhooks.constructSync(body, signature, webhookSecret);

    if (event.type === 'charge.succeeded') {
      const { object } = event.data;

      await updateOrderToPaid({
        orderId: object.metadata.orderId,
        paymentResult: {
          id: object.id,
          status: 'COMPLETED',
          email_address: object.billing_details.email!,
          pricePaid: (object.amount / 100).toFixed(2),
        },
      });

      return NextResponse.json({
        message: 'updateOrderToPaid was successful',
      });
    }

    return NextResponse.json({
      message: 'event is not charge.succeeded',
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Webhook error', error: String(error) },
      { status: 400 }
    );
  }
}
