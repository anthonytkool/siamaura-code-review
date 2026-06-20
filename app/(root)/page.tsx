import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/home/hero-section';
import FeaturedStories from '@/components/home/featured-stories';
import ProductList from '@/components/shared/product/product-list';
import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions';
import ProductCarousel from '@/components/shared/product/product-carousel';
import ViewAllProductsButton from '@/components/view-all-products-button';
import HomeSplitFeature from '@/components/home/home-split-feature';
import HomeTrustSplit from '@/components/home/home-trust-split';
import IconBoxes from '@/components/icon-boxes';

const collections = [
  {
    label: 'Sacred Arts & Cultural Treasures',
    title: 'Thai Amulets',
    description:
      'Carefully selected Thai amulets and sacred objects, presented with cultural meaning, craftsmanship, and respect.',
    cta: 'Explore the Collection',
    href: '/search?category=amulets',
    image: '/images/collections/amulets-collection.png',
  },
  {
    label: 'Thai Self-Care & Wellness Products',
    title: 'Spa & Wellness',
    description:
      'Premium Thai spa and wellness products selected for calm living, daily rituals, and meaningful gifts.',
    cta: 'Shop Wellness',
    href: '/search?category=spa-wellness-products',
    image: '/images/collections/spa-wellness-collection.png',
  },
  {
    label: 'Premium Thai Brews & Curated Selections',
    title: 'Coffee & Tea',
    description:
      'Thai coffees, teas, and specialty drinks chosen for quality, character, and the quiet culture behind every cup.',
    cta: 'Explore the Selection',
    href: '/search?category=coffee-tea',
    image: '/images/collections/coffee-tea-collection.png',
  },
  {
    label: 'Handcrafted Objects. Living Traditions.',
    title: 'Thai Crafts & Heritage',
    description:
      'Thai handcrafted objects selected for cultural value, artisan skill, and timeless heritage.',
    cta: 'Discover the Craft',
    href: '/search?category=thai-crafts-heritage',
    image: '/images/collections/thai-crafts-heritage-collection.png',
  },
];

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className='-mt-5'>
      <HeroSection />
      <FeaturedStories />
      <HomeSplitFeature />
      <HomeTrustSplit />

      <section className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
        <div className='mb-8 text-center'>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-amber-700'>
            Curated by Siam Aura
          </p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl'>
            Explore Siam Aura Collections
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base'>
            A calm selection of Thai sacred arts, wellness goods, premium brews,
            and handcrafted heritage pieces.
          </p>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className='group overflow-hidden rounded-3xl border border-amber-100 bg-[#f8f3ea] shadow-sm transition hover:-translate-y-1 hover:shadow-md'
            >
              <div className='relative aspect-[4/3] overflow-hidden bg-stone-100'>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                  className='object-cover transition duration-700 group-hover:scale-105'
                />
              </div>

              <div className='p-5'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-700'>
                  {collection.label}
                </p>
                <h3 className='mt-3 text-xl font-semibold text-stone-900'>
                  {collection.title}
                </h3>
                <p className='mt-3 min-h-[72px] text-sm leading-6 text-stone-600'>
                  {collection.description}
                </p>
                <span className='mt-5 inline-flex text-sm font-semibold text-stone-900 underline decoration-amber-600 underline-offset-4'>
                  {collection.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}

      {latestProducts.length > 0 && (
        <>
          <ProductList
            data={latestProducts}
            title='Newest Arrivals'
            limit={4}
          />
          <ViewAllProductsButton />
        </>
      )}

      <IconBoxes />
    </div>
  );
};

export default Homepage;
