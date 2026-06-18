'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { formatCurrency, formatDateTime, formatId } from '@/lib/utils';
import { Order } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { useTransition } from 'react';
import {
  updateOrderToPaidCOD,
  deliverOrder,
} from '@/lib/actions/order.actions';
import StripePayment from './stripe-payment';

const OrderDetailsTable = ({
  order,
  isAdmin,
  stripeClientSecret,
}: {
  order: Omit<Order, 'paymentResult'>;
  isAdmin: boolean;
  stripeClientSecret: string | null;
}) => {
  const {
    id,
    shippingAddress,
    orderitems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    paymentMethod,
    isDelivered,
    isPaid,
    paidAt,
    deliveredAt,
  } = order;

  const MarkAsPaidButton = () => {
    const [isPending, startTransition] = useTransition();
    return (
      <Button
        type='button'
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            const res = await updateOrderToPaidCOD(order.id);
            alert(res.message);
          })
        }
      >
        {isPending ? 'processing...' : 'Mark As Paid'}
      </Button>
    );
  };

  const MarkAsDeliveredButton = () => {
    const [isPending, startTransition] = useTransition();
    return (
      <Button
        type='button'
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            const res = await deliverOrder(order.id);
            alert(res.message);
          })
        }
      >
        {isPending ? 'processing...' : 'Mark As Delivered'}
      </Button>
    );
  };

  return (
    <>
      <h1 className='py-4 text-2xl'>Order {formatId(id)}</h1>
      <div className='grid md:grid-cols-3 md:gap-5'>
        <div className='col-span-2 space-4-y overlow-x-auto'>
          <Card>
            <CardContent className='p-4 gap-4'>
              <h2 className='text-xl pb-4'>Payment Method</h2>
              <p className='mb-2'>
                {paymentMethod === 'Stripe'
                  ? 'Credit / Debit Card'
                  : paymentMethod === 'CashOnDelivery'
                    ? 'Cash on Delivery (Bangkok Only)'
                    : paymentMethod === 'BankTransfer'
                      ? 'Bank Transfer / PromptPay'
                      : paymentMethod}
              </p>
              {isPaid ? (
                <Badge variant='secondary'>
                  Paid at {formatDateTime(paidAt!).dateTime}
                </Badge>
              ) : (
                <Badge variant='destructive'>Not paid</Badge>
              )}
            </CardContent>
          </Card>
          <Card className='my-2'>
            <CardContent className='p-4 gap-4'>
              <h2 className='text-xl pb-4'>Shipping Address</h2>
              <p>{shippingAddress.fullName}</p>
              <p className='mb-2'>
                {shippingAddress.streetAddress}, {shippingAddress.city}{' '}
                {shippingAddress.postalCode}, {shippingAddress.country}
              </p>
              {isDelivered ? (
                <Badge variant='secondary'>
                  Delivered at {formatDateTime(deliveredAt!).dateTime}
                </Badge>
              ) : (
                <Badge variant='destructive'>Not Delivered</Badge>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className='p-4 gap-4'>
              <h2 className='text-xl pb-4'>Order Items</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderitems.map((item) => (
                    <TableRow key={item.slug}>
                      <TableCell>
                        <Link
                          href={`/product/${item.slug}`}
                          className='flex items-center'
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          />
                          <span className='px-2'>{item.name}</span>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <span className='px-2'>{item.qty}</span>
                      </TableCell>

                      <TableCell className='text-right'>
                        {formatCurrency(Number(item.price))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent className='p-4 gap-4 space-y-4'>
              <div className='flex justify-between'>
                <div>Items</div>
                <div>{formatCurrency(itemsPrice)}</div>
              </div>
              <div className='flex justify-between'>
                <div>VAT (7%)</div>
                <div>{formatCurrency(taxPrice)}</div>
              </div>
              <div className='flex justify-between'>
                <div>Shipping</div>
                <div>{formatCurrency(shippingPrice)}</div>
              </div>
              <div className='flex justify-between'>
                <div>Total</div>
                <div>{formatCurrency(totalPrice)}</div>
              </div>
              {!isPaid && paymentMethod === 'Stripe' && stripeClientSecret && (
                <StripePayment
                  priceInCents={Number(order.totalPrice) * 100}
                  orderId={order.id}
                  clientSecret={stripeClientSecret}
                />
              )}
              {!isPaid && paymentMethod === 'CashOnDelivery' && !isAdmin && (
                <div className='text-sm border border-amber-200 bg-amber-50 p-4 rounded space-y-2'>
                  <p className='font-semibold text-amber-800'>
                    Personal Concierge Service
                  </p>
                  <p className='text-amber-700'>
                    Our team will contact you within 24 hours via LINE, WhatsApp
                    or Email to arrange delivery and payment.
                  </p>
                  <p className='text-amber-700'>
                    📍 Available for Bangkok area only.
                  </p>
                  <p className='text-amber-700'>
                    Outside Bangkok? Please use <strong>Bank Transfer</strong>{' '}
                    or <strong>Credit Card</strong> instead.
                  </p>
                </div>
              )}
              {!isPaid && paymentMethod === 'BankTransfer' && !isAdmin && (
                <div className='text-sm border border-blue-200 bg-blue-50 p-4 rounded space-y-2'>
                  <p className='font-semibold text-blue-800'>
                    🏦 Bank Transfer / PromptPay
                  </p>
                  <p className='text-blue-700'>Scan QR Code to pay:</p>

                  <div className='flex justify-center'>
                    <Image
                      src='https://promptpay.io/0656346595.png'
                      alt='PromptPay QR Code'
                      width={180}
                      height={180}
                      unoptimized
                    />
                  </div>

                  <p className='text-blue-700 font-semibold text-center'>
                    PromptPay: 065-634-6595
                  </p>
                  <p className='text-blue-700'>
                    After transfer, please send slip via LINE or WhatsApp to
                    confirm your order.
                  </p>
                  <p className='text-blue-700'>
                    LINE: @tcoolofficial | WhatsApp: +66 65 634 6595
                  </p>
                </div>
              )}
              {isAdmin && !isPaid && paymentMethod === 'CashOnDelivery' && (
                <MarkAsPaidButton />
              )}
              {isAdmin && !isPaid && paymentMethod === 'BankTransfer' && (
                <MarkAsPaidButton />
              )}
              {isAdmin && isPaid && !isDelivered && <MarkAsDeliveredButton />}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='mt-6 text-center'>
        <Link
          href='/'
          className='text-sm tracking-widest uppercase border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300'
        >
          Continue Shopping
        </Link>
      </div>
    </>
  );
};

export default OrderDetailsTable;
