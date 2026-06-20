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
import Image from 'next/image';
import Link from 'next/link';

const categoryVisuals: Record<
  string,
  {
    image: string;
    subtitle: string;
  }
> = {
  amulets: {
    image: '/images/collections/amulets-collection.png',
    subtitle: 'Sacred arts and cultural treasures',
  },
  'spa-wellness-products': {
    image: '/images/collections/spa-wellness-collection.png',
    subtitle: 'Thai self-care and wellness goods',
  },
  'coffee-tea': {
    image: '/images/collections/coffee-tea-collection.png',
    subtitle: 'Premium Thai brews and selections',
  },
  'thai-crafts-heritage': {
    image: '/images/collections/thai-crafts-heritage-collection.png',
    subtitle: 'Handcrafted objects and living traditions',
  },
};

const CategoryDrawer = async () => {
  const categories = await getAllCategories();

  return (
    <Drawer direction='left'>
      <DrawerTrigger asChild>
        <Button variant='outline'>
          <MenuIcon />
        </Button>
      </DrawerTrigger>

      <DrawerContent className='h-svh max-h-svh max-w-sm overflow-hidden'>
        <DrawerHeader className='flex h-full min-h-0 flex-col overflow-hidden p-6'>
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

          <div className='mt-4 min-h-0 flex-1 space-y-1 overflow-y-scroll overscroll-contain pr-1 pb-20'>
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

            {categories.map((x) => {
              const name = x.name;
              const slug = x.slug;

              if (!name || !slug) return null;

              const visual = categoryVisuals[slug];

              if (!visual) {
                return (
                  <Button
                    variant='ghost'
                    className='w-full justify-start'
                    key={slug}
                    asChild
                  >
                    <DrawerClose asChild>
                      <Link href={`/search?category=${slug}`}>{name}</Link>
                    </DrawerClose>
                  </Button>
                );
              }

              return (
                <DrawerClose key={slug} asChild>
                  <Link
                    href={`/search?category=${slug}`}
                    className='flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left transition hover:bg-[#f8f3ea]'
                  >
                    <div className='relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-stone-100'>
                      <Image
                        src={visual.image}
                        alt={name}
                        fill
                        sizes='40px'
                        className='object-cover'
                      />
                    </div>

                    <div className='min-w-0'>
                      <div className='truncate text-sm font-semibold text-stone-900'>
                        {name}
                      </div>
                      <div className='mt-0.5 line-clamp-1 text-xs leading-4 text-stone-500'>
                        {visual.subtitle}
                      </div>
                    </div>
                  </Link>
                </DrawerClose>
              );
            })}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
