import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductPrice from './product-price';
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className='group w-full overflow-hidden rounded-2xl border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
      <CardHeader className='p-0'>
        <Link
          href={`/product/${product.slug}`}
          className='flex aspect-square items-center justify-center bg-[#faf8f3] p-6'
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            height={420}
            width={420}
            className='h-full w-full object-contain transition duration-300 group-hover:scale-105'
            priority={true}
          />
        </Link>
      </CardHeader>

      <CardContent className='grid gap-3 p-5'>
        <div className='font-serif text-xs uppercase tracking-[0.35em]'>
          <span className='text-[#b38b2d]'>S</span>
          <span className='text-black'>IAM</span>{' '}
          <span className='text-[#b38b2d]'>A</span>
          <span className='text-black'>URA</span>
        </div>

        <Link href={`/product/${product.slug}`}>
          <h2 className='line-clamp-2 min-h-[44px] text-base font-serif text-stone-950 transition group-hover:text-stone-900'>
            {product.name}
          </h2>
        </Link>

        <div className='border-t border-stone-100 pt-3'>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className='text-sm text-destructive'>Out Of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
