import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroImageCarousel from '@/components/home/hero-image-carousel';

const HeroSection = () => {
  return (
    <section className='relative mb-10 -mx-5 overflow-hidden rounded-xl border bg-[#f8f3ea]'>
      <div className='grid min-h-[420px] md:grid-cols-2'>
        {/* LEFT */}
        <div className='flex flex-col justify-center px-8 py-12 md:px-14'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8960C]'>
            Thai Sacred Arts • Heritage Stories • Concierge
          </p>
          <h1 className='mb-5 text-4xl font-bold tracking-wide md:text-6xl'>
            <span className='font-serif text-[#B8960C]'>S</span>iam{' '}
            <span className='font-serif text-[#B8960C]'>A</span>ura
          </h1>
          <p className='mb-6 max-w-md text-base leading-7 text-gray-600'>
            A curated gateway to Thai sacred arts, cultural stories, meaningful
            objects, and private concierge experiences — selected with care,
            transparency, and respect for Thai heritage.
          </p>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Button asChild className='bg-[#B8960C] hover:bg-[#9f8008]'>
              <Link href='/search'>Browse Collection</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href='/contact'>Contact Concierge</Link>
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className='flex items-center justify-center bg-gradient-to-br from-[#B8960C]/15 via-white to-[#2b2118]/10 p-3 md:p-4'>
          <HeroImageCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
