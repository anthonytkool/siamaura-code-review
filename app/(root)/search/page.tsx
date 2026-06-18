import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Collection | Siam Aura',
  description:
    'Siam Aura is preparing its first curated collection of Thai sacred arts, authentic amulets, and meaningful objects.',
};

const SearchPage = async () => {
  return (
    <section className='mx-auto max-w-3xl py-12'>
      <div className='rounded-xl border bg-[#f8f3ea] p-8 md:p-12'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8960C]'>
          Siam Aura Collection
        </p>

        <h1 className='mb-4 text-3xl font-bold md:text-5xl'>
          The Collection is Being Curated
        </h1>

        <p className='mb-6 text-base leading-7 text-muted-foreground md:text-lg'>
          We are currently preparing our first selection of authentic Thai
          amulets, sacred arts, and meaningful objects.
        </p>

        <p className='mb-8 text-base leading-7 text-muted-foreground'>
          Please check back soon, or contact our concierge if you are looking
          for something special.
        </p>

        <div className='flex flex-col gap-3 sm:flex-row'>
          <Button asChild className='bg-[#B8960C] hover:bg-[#9f8008]'>
            <Link href='/contact'>Contact Concierge</Link>
          </Button>

          <Button asChild variant='outline'>
            <Link href='/'>Return Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
