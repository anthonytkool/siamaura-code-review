import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  openGraph: {
    title: 'About Anthony T. Cool | Siam Aura',
    description:
      'Licensed Tour Guide & Cultural Storyteller based in Bangkok, Thailand.',
    images: ['/images/siam-aura-og-banner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/siam-aura-og-banner.png'],
  },
};

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-4xl px-2 pt-0 pb-2'>
      {/* Header */}
      <div className='mb-2 text-center'>
        <p className='mb-2 text-md font-semibold uppercase tracking-[0.25em] text-[#B8960C]'>
          Meet Your Guide
        </p>
        <h1 className='text-2xl font-bold md:text-5xl'>Anthony T. Cool</h1>
        <p className='mt-3 text-lg text-muted-foreground'>
          Licensed Tour Guide & Cultural Storyteller
        </p>
      </div>

      {/* Profile + Bio */}
      <div className='mb-8 grid gap-8 md:grid-cols-2'>
        {/* Profile Image */}
        <div className='relative h-[700px] overflow-hidden rounded-2xl'>
          <Image
            src='/images/about/profile.jpg'
            alt='Anthony T. Cool'
            fill
            className='object-cover object-center'
          />
        </div>

        {/* Bio */}
        <div className='flex flex-col justify-center gap-5'>
          <p className='text-base leading-7 text-muted-foreground'>
            I have spent over 8 years guiding travelers across Thailand,
            Vietnam, Laos, and Cambodia — walking through ancient temples,
            explaining sacred traditions, and sharing the stories that most
            guidebooks never tell.
          </p>
          <p className='text-base leading-7 text-muted-foreground'>
            Before becoming an independent guide, I led tours for G Adventures
            and served as a Purser aboard Carnival Cruise Line Carnival Liberty
            and Carnival Freedom — working with guests from every corner of the
            world.
          </p>
          <p className='text-base leading-7 text-muted-foreground'>
            Siam Aura is my way of bringing those stories, that trust, and that
            knowledge into one place — for travelers who want more than just a
            tour.
          </p>

          {/* Credentials */}
          <div className='grid grid-cols-2 gap-3'>
            {[
              { label: '8+ Years', sub: 'Guiding Experience' },
              { label: '1,000+', sub: 'Happy Guests' },
              {
                label: '4 Countries',
                sub: 'Thailand · Vietnam · Laos · Cambodia',
              },
              { label: 'Trilingual', sub: 'English · Chinese · Thai' },
            ].map((item) => (
              <div key={item.label} className='rounded-xl bg-[#f8f3ea] p-4'>
                <p className='text-lg font-bold text-[#B8960C]'>{item.label}</p>
                <p className='text-xs text-muted-foreground'>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className='mb-12'>
        <p className='mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8960C]'>
          In The Field
        </p>
        <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
          {[
            {
              src: '/images/about/tour-1.jpg',
              alt: 'Group tour at Suvarnabhumi Airport',
            },
            { src: '/images/about/tour-2.jpg', alt: 'Laos Group Tour' },
            {
              src: '/images/about/tour-3.jpg',
              alt: 'Royal Barge Museum Bangkok',
            },
            { src: '/images/about/tour-4.jpg', alt: 'Angkor Wat Cambodia' },
          ].map((photo) => (
            <div
              key={photo.src}
              className='relative h-40 overflow-hidden rounded-xl'
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className='object-cover transition duration-500 hover:scale-105'
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className='rounded-xl bg-[#f8f3ea] p-8 text-center'>
        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8960C]'>
          Explore Siam Aura
        </p>
        <h2 className='mb-6 text-2xl font-bold'>Where would you like to go?</h2>
        <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center'>
          <Link
            href='/journal'
            className='rounded-lg border border-[#B8960C] px-6 py-3 text-sm font-medium text-[#B8960C] hover:bg-[#B8960C] hover:text-white transition-all'
          >
            Read the Journal →
          </Link>
          <Link
            href='/contact'
            className='rounded-lg bg-[#B8960C] px-6 py-3 text-sm font-medium text-white hover:bg-[#9f8008]'
          >
            Book a Private Tour →
          </Link>
          <Link
            href='/search'
            className='rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 hover:border-[#B8960C] hover:text-[#B8960C] transition-all'
          >
            Browse Collection →
          </Link>
        </div>
      </div>
    </div>
  );
}
