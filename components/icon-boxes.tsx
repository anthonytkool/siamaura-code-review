import { ShoppingBag, Headset, WalletCards, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className='grid md:grid-cols-4 gap-4 p-4'>
          <div className='space-y-2'>
            <ShoppingBag />
            <div className='text-sm font-bold'>Free Shipping in Thailand</div>
            <div className='text-sm text-muted-foreground'>
              Free shipping for all orders within Thailand. International
              shipping rates apply for overseas orders.
            </div>
          </div>
          <div className='space-y-2'>
            <BadgeCheck />
            <div className='text-sm font-bold'>Authenticity Guarantee</div>
            <div className='text-sm text-muted-foreground'>
              Every item is carefully inspected before shipment
            </div>
          </div>
          <div className='space-y-2'>
            <WalletCards />
            <div className='text-sm font-bold'>Flexible Payment</div>
            <div className='text-sm text-muted-foreground'>
              Pay with credit card or Cash on Delivery
            </div>
          </div>
          <div className='space-y-2'>
            <Headset />
            <div className='text-sm font-bold'>Customer Support</div>
            <div className='text-sm text-muted-foreground'>
              Available Monday to Saturday
              <br />
              9:30 am - 5:00 pm
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
