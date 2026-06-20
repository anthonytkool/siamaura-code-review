import { Button } from './ui/button';
import Link from 'next/link';

const ViewAllProductsButton = () => {
  return (
    <div className='flex justify-center items-center my-8'>
      <Button
        asChild
        className='bg-[#b38b2d] px-8 py-4 text-lg font-semibold text-white hover:bg-[#9f7a24]'
      >
        <Link href='/search'>View All Products</Link>
      </Button>
    </div>
  );
};

export default ViewAllProductsButton;
