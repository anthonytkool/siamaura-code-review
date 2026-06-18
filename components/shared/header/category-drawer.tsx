import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { getAllCategories } from '@/lib/actions/product.actions';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

const CategoryDrawer = async () => {
  const categories = await getAllCategories();

  return (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <Button variant='outline'>
          <MenuIcon />
        </Button>
      </DrawerTrigger>

      <DrawerContent className='h-full max-w-sm'>
        <DrawerHeader>
          <div className='flex justify-between items-start'>
            <div className='space-y-1'>
              <DrawerTitle className='font-semibold tracking-[0.15em] text-[#B8960C] uppercase'>
                Browse Collection
              </DrawerTitle>

              <p className='text-xs text-gray-500'>เลือกชมคอลเลกชันสินค้า</p>
            </div>

            <DrawerClose asChild>
              <Button
                variant='ghost'
                size='sm'
                className='text-[#B8960C] font-bold text-lg hover:text-yellow-600'
              >
                ✕
              </Button>
            </DrawerClose>
          </div>

          <div className='space-y-1 mt-4'>
            <Button variant='ghost' className='w-full justify-start' asChild>
              <DrawerClose asChild>
                <Link href='/search'>Browse Collection</Link>
              </DrawerClose>
            </Button>

            <Button variant='ghost' className='w-full justify-start' asChild>
              <DrawerClose asChild>
                <Link href='/journal'>Siam Aura Journal</Link>
              </DrawerClose>
            </Button>

            <Button variant='ghost' className='w-full justify-start' asChild>
              <DrawerClose asChild>
                <Link href='/about'>Meet Your Guide</Link>
              </DrawerClose>
            </Button>

            <Button variant='ghost' className='w-full justify-start' asChild>
              <DrawerClose asChild>
                <Link href='/tours'>Private Tours</Link>
              </DrawerClose>
            </Button>

            <Button variant='ghost' className='w-full justify-start' asChild>
              <DrawerClose asChild>
                <Link href='/contact'>Contact Concierge</Link>
              </DrawerClose>
            </Button>

            <div className='my-3 border-t' />

            {categories.map((x) => (
              <Button
                variant='ghost'
                className='w-full justify-start'
                key={x.category}
                asChild
              >
                <DrawerClose asChild>
                  <Link href={`/search?category=${x.category}`}>
                    {x.category} ({x._count})
                  </Link>
                </DrawerClose>
              </Button>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
