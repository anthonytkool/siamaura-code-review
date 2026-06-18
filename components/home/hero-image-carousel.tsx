'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const images = [
  {
    src: '/images/gian-cover.jpg',
    location: 'Bangkok, Thailand',
    title: 'Yaksha Guardian Giant',
    subtitle: 'Protector of Sacred Places',
  },
  {
    src: '/images/grand-palace-cover.jpg',
    location: 'Bangkok, Thailand',
    title: 'Grand Palace',
    subtitle: 'The Heart of Old Siam',
  },
  {
    src: '/images/hero-amulet.jpg',
    location: 'Bangkok, Thailand',
    title: 'The Golden Mount',
    subtitle: 'Wat Saket',
  },
  {
    src: '/images/wat-arun-cover.jpg',
    location: 'Bangkok, Thailand',
    title: 'Wat Arun',
    subtitle: 'The Temple of Dawn',
  },
  {
    src: '/images/naga-buddha-cover.jpg',
    location: 'Bangkok, Thailand',
    title: 'Buddha with Naga Form',
    subtitle: 'Faith & Devotion',
  },
  {
    src: '/images/journal/ayutthaya-ep1-cover.jpg',
    location: 'Ayutthaya, Thailand',
    title: 'Flesh, Blood & Incantations',
    subtitle: 'The Living Phantoms of Ayutthaya',
  },
  {
    src: '/images/journal/ayutthaya-ep2-cover.jpg',
    location: 'Ayutthaya, Thailand',
    title: 'The Crypt of the Jaturak',
    subtitle: 'Secrets Beneath the Fallen Kingdom',
  },
  {
    src: '/images/journal/kanchanaburi-ep1-cover.jpg',
    location: 'Kanchanaburi, Thailand',
    title: 'Shadows in the Jungle',
    subtitle: 'The Dark Sorcery of the Death Railway',
  },
  {
    src: '/images/journal/kanchanaburi-ep2-cover.jpg',
    location: 'Kanchanaburi, Thailand',
    title: 'The River Kwai Today',
    subtitle: 'Walking the Ground Where History Breathes',
  },
  {
    src: '/images/journal/train-market-ep1-cover.jpg',
    location: 'Samut Songkhram, Thailand',
    title: 'Chrono-Markets of Siam',
    subtitle: 'Sugar Farms, Floating Markets & Iron Dragon',
  },
  {
    src: '/images/journal/tuktuk-ep1-cover.jpg',
    location: 'Bangkok, Thailand',
    title: 'The Neon Chariot',
    subtitle: 'Tuk-Tuks, Ancient Giants & Midnight Siam',
  },
];

const HeroImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setNext((current + 1) % images.length);
      setTransitioning(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setTransitioning(false);
      }, 700);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className='w-full max-w-full rounded-2xl border border-[#B8960C]/30 bg-white/60 p-2 shadow-sm'>
      <div className='relative h-[320px] overflow-hidden rounded-xl shadow-lg md:h-[380px]'>
        {/* Current image — fades out */}
        <Image
          src={images[current].src}
          alt={images[current].title}
          fill
          priority
          className={`object-cover object-center transition-opacity duration-700 ${
            transitioning ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Next image — always preloaded underneath */}
        <Image
          src={images[next].src}
          alt={images[next].title}
          fill
          priority
          className='object-cover object-center'
          style={{ zIndex: -1 }}
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent' />

        <div className='absolute bottom-0 left-0 p-4 text-white md:p-6'>
          <p className='text-xs uppercase tracking-[0.25em] text-[#E6C35C]'>
            {images[current].location}
          </p>
          <h3 className='mt-2 text-2xl font-semibold leading-tight md:text-3xl'>
            {images[current].title}
          </h3>
          <p className='mt-1 text-sm text-gray-200'>
            {images[current].subtitle}
          </p>
        </div>
      </div>

      <Button asChild className='mt-4 w-full bg-[#B8960C] hover:bg-[#9f8008]'>
        <Link href='/journal'>Journal & Stories</Link>
      </Button>
    </div>
  );
};

export default HeroImageCarousel;
