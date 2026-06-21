import { ShoppingBag, Headset, WalletCards, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className='grid md:grid-cols-4 gap-4 p-4'>
          <div className='space-y-2'>
            <ShoppingBag />
            <div className='text-sm font-bold'>Thailand-Based Shipping</div>
            <div className='text-sm text-muted-foreground'>
              Carefully packed and shipped within Thailand. International
              shipping can be discussed before purchase.
            </div>
          </div>
          <div className='space-y-2'>
            <BadgeCheck />
            <div className='text-sm font-bold'>Carefully Selected</div>
            <div className='text-sm text-muted-foreground'>
              Each piece is reviewed with care before being listed or shipped.
            </div>
          </div>
          <div className='space-y-2'>
            <WalletCards />
            <div className='text-sm font-bold'>Secure Checkout</div>
            <div className='text-sm text-muted-foreground'>
              Pay securely online. For special requests, contact Siam Aura
              before ordering.
            </div>
          </div>
          <div className='space-y-2'>
            <Headset />
            <div className='text-sm font-bold'>Questions Welcome</div>
            <div className='text-sm text-muted-foreground'>
              Need more details, photos, or clarification? Contact Siam Aura
              before purchase.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
