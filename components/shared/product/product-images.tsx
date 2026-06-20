'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className='space-y-4'>
      <div className='rounded-lg border bg-white p-4'>
        <Image
          src={images[current]}
          alt='product image'
          width={1200}
          height={1200}
          className='w-full max-h-[700px] object-contain mx-auto'
          priority
        />
      </div>

      <div className='flex gap-2 flex-wrap'>
        {images.map((image, index) => (
          <button
            key={image}
            type='button'
            onClick={() => setCurrent(index)}
            className={cn(
              'border rounded-md overflow-hidden cursor-pointer hover:border-amber-600 transition',
              current === index
                ? 'border-amber-600 ring-2 ring-amber-200'
                : 'border-gray-200'
            )}
          >
            <Image
              src={image}
              alt='thumbnail'
              width={100}
              height={100}
              className='w-20 h-20 object-contain bg-gray-200'
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
