import ProductCard from './product-card';
import { Product } from '@/types';

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  const showNewestArrivalsSubtitle = title === 'Newest Arrivals';

  return (
    <div className='my-10'>
      {title && (
        <div className='mb-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-amber-700'>
            Siam Aura Collection
          </p>
          <h2 className='mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl'>
            {title}
          </h2>
          {showNewestArrivalsSubtitle && (
            <p className='mt-3 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base'>
              Freshly added selections, curated for cultural meaning,
              craftsmanship, and quiet luxury.
            </p>
          )}
        </div>
      )}

      {data.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {limitedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
