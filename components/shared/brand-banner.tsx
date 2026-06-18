import Image from 'next/image';
import Link from 'next/link';

const BrandBanner = () => {
  return (
    <section className='my-0 mx-auto max-w-5xl overflow-hidden rounded-2xl'>
      <div className='relative h-[520px] w-full'>
        <Image
          src='/images/banner.png'
          alt='Siam Aura'
          fill
          className='object-cover object-center'
        />
      </div>
      <div className='flex justify-center py-2 bg-[#0a0a0a]'>
        <Link
          href='/contact'
          className='border border-[#E6C35C] text-[#E6C35C] px-8 py-2 text-xs uppercase tracking-[0.3em] hover:bg-[#E6C35C] hover:text-black transition-all duration-300'
        >
          Book a Private Tour
        </Link>
      </div>
    </section>
  );
};

export default BrandBanner;
