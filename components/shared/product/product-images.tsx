'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className='rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5'>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='order-2 flex gap-2 overflow-x-auto md:order-1 md:w-20 md:flex-col md:overflow-visible'>
          {images.map((image, index) => (
            <button
              key={image}
              type='button'
              onClick={() => setCurrent(index)}
              className={cn(
                'shrink-0 overflow-hidden rounded-lg border bg-white p-1 transition hover:border-amber-600',
                current === index
                  ? 'border-amber-600 ring-2 ring-amber-200'
                  : 'border-stone-200'
              )}
            >
              <Image
                src={image}
                alt='product thumbnail'
                width={96}
                height={96}
                className='h-16 w-16 object-contain md:h-20 md:w-20'
              />
            </button>
          ))}
        </div>

        <div className='order-1 flex-1 md:order-2'>
          <div className='flex min-h-[420px] items-center justify-center rounded-xl border border-stone-100 bg-stone-50 p-4 md:min-h-[640px] md:p-8'>
            <Image
              src={images[current]}
              alt='product image'
              width={1200}
              height={1200}
              className='max-h-[700px] w-full object-contain'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
