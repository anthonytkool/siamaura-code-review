import Link from 'next/link';
import { Headset, ShoppingCart } from 'lucide-react';
import UserButton from './user-button';

const Menu = () => {
  return (
    <div className='flex justify-end items-center gap-4'>
      <Link href='/contact' title='Contact Us'>
        <Headset
          size={24}
          className='text-black hover:text-[#B8960C] transition-colors duration-300'
        />
      </Link>

      <div title='My Account'>
        <UserButton />
      </div>

      <Link href='/cart' title='Shopping Cart'>
        <ShoppingCart
          size={24}
          className='text-black hover:text-gray-400 transition-colors duration-300'
        />
      </Link>
    </div>
  );
};

export default Menu;
