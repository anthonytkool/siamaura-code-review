import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import ProductList from '@/components/shared/product/product-list';
import {
  getAllCategories,
  getAllProducts,
} from '@/lib/actions/product.actions';

export const metadata: Metadata = {
  title: 'Collection | Siam Aura',
  description:
    'Explore Siam Aura curated Thai sacred arts, authentic amulets, wellness products, and meaningful objects from Thailand.',
};

const SearchPage = async (props: {
  searchParams?: Promise<{
    category?: string;
    q?: string;
    sort?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;

  const category = searchParams?.category || 'all';
  const query = searchParams?.q || 'all';
  const sort = searchParams?.sort || 'newest';
  const page = Number(searchParams?.page) || 1;

  const categories = await getAllCategories();

  const products = await getAllProducts({
    query,
    category,
    sort,
    page,
  });

  const activeCategory = categories.find((x) => x.slug === category);

  return (
    <section className='mx-auto max-w-7xl pt-2 pb-10'>
      <div className='mb-8 rounded-2xl border border-stone-200 bg-[#f8f3ea] p-6 md:p-8'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8960C]'>
          Siam Aura Collection
        </p>

        <h1 className='mb-4 font-serif text-3xl text-stone-950 md:text-5xl'>
          {activeCategory ? activeCategory.name : 'Browse Our Collection'}
        </h1>

        <p className='max-w-3xl text-base leading-7 text-stone-600 md:text-lg'>
          Curated Thai sacred arts, meaningful objects, wellness products, and
          cultural pieces selected with care by Siam Aura.
        </p>
      </div>

      <div className='mb-8 rounded-2xl border border-[#d6b25e]/40 bg-[#faf8f3] p-5'>
        <p className='mb-3 font-serif text-lg text-stone-950'>
          Collection Notice
        </p>

        <div className='space-y-2 text-sm leading-6 text-stone-700'>
          <p>
            <b>EN:</b> Curated Thai sacred objects with cultural context, clear
            presentation, and respectful sourcing.
          </p>

          <p>
            <b>中文:</b> 精选泰国圣物，附文化背景、清晰说明与尊重来源。
          </p>

          <p>
            <b>TH:</b> ของสะสมสายศรัทธา คัดโดย Siam Aura พร้อมที่มา
            บริบททางวัฒนธรรม และการนำเสนออย่างเหมาะสม
          </p>

          <Link
            href='/collection-policy'
            className='inline-block text-sm font-medium text-[#9a7a10] underline underline-offset-4 hover:text-[#6f5508]'
          >
            Read Full Collection Policy
          </Link>
        </div>
      </div>

      <div className='mb-8 flex flex-wrap gap-3'>
        <Button
          asChild
          variant={category === 'all' ? 'default' : 'outline'}
          className={
            category === 'all'
              ? 'bg-[#b38b2d] text-white hover:bg-[#9f7a24]'
              : ''
          }
        >
          <Link href='/search'>All Products</Link>
        </Button>

        {categories.map((x) => (
          <Button
            key={x.slug}
            asChild
            variant={category === x.slug ? 'default' : 'outline'}
            className={
              category === x.slug
                ? 'bg-[#b38b2d] text-white hover:bg-[#9f7a24]'
                : ''
            }
          >
            <Link href={`/search?category=${x.slug}`}>{x.name}</Link>
          </Button>
        ))}
      </div>

      <ProductList
        data={products.data}
        title={activeCategory ? activeCategory.name : 'All Products'}
      />
    </section>
  );
};

export default SearchPage;
