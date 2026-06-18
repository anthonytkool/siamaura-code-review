'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const tourSlides = [
  {
    title: 'Bangkok City & Temples Tour',
    label: 'Private Cultural Tours',
    image: '/images/tours/bangkok-grand-palace-wide.jpg',
    href: '/tours/bangkok-temples',
  },
  {
    title: 'Canal Tour & Royal Barge Museum',
    label: 'Bangkok From The Water',
    image: '/images/tours/anthony/anthony-canal-guide.jpg',
    href: '/tours/canal-royal-barge',
  },
  {
    title: 'Ayutthaya Full Day Tour',
    label: 'Ancient Capital of Siam',
    image: '/images/tours/10t.jpg',
    href: '/tours/ayutthaya-full-day',
  },
  {
    title: 'River Kwai Ultimate Journey',
    label: 'Multi-Day River Kwai',
    image: '/images/tours/bkK.jpg',
    href: '/tours/river-kwai-complete-experience-3d2n',
  },
  {
    title: 'Train Market, Coconut Farm & Floating Market',
    label: 'Classic Day Trip From Bangkok',
    image: '/images/tours/6f.jpg',
    href: '/tours/train-market-floating-market',
  },
  {
    title: 'Bangkok Night Tuk Tuk Food & Hidden Bars',
    label: 'Classic night Trip From Bangkok',
    image: '/images/tours/anthony/tuktuk.jpg',
    href: '/tours/tuktuk-food-tour',
  },

  {
    title: 'River Kwai & Death Railway Experience',
    label: 'Multi-Day River Kwai',
    image: '/images/tours/k2.jpg',
    href: '/tours/river-kwai-death-railway-2d1n',
  },
];

const collectionSlides = [
  {
    title: 'Thai Sacred Arts Collection',
    label: 'Sacred Arts Collection',
    image: '/images/amulets/101.jpg',
    href: '/search',
  },
  {
    title: 'Thai Amulets With Meaning',
    label: 'Thai Amulets',
    image: '/images/amulets/102.jpg',
    href: '/journal/why-thai-people-wear-amulets',
  },
  {
    title: 'Curated Objects With Meaning',
    label: 'Heritage Collection',
    image: '/images/amulets/101.jpg',
    href: '/search',
  },
];

const HomeSplitFeature = () => {
  const [tourIndex, setTourIndex] = useState(0);
  const [collectionIndex, setCollectionIndex] = useState(0);

  const currentTour = tourSlides[tourIndex];
  const currentCollection = collectionSlides[collectionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTourIndex((prev) => (prev + 1) % tourSlides.length);
      setCollectionIndex((prev) => (prev + 1) % collectionSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='mt-16 px-4'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Link
          key={currentTour.href}
          href={currentTour.href}
          className='group relative overflow-hidden rounded-xl min-h-[420px] bg-black animate-in fade-in duration-700'
        >
          <Image
            src={currentTour.image}
            alt={currentTour.title}
            fill
            className='object-cover opacity-90 group-hover:scale-105 transition duration-700'
          />
          <div className='absolute inset-0 bg-black/30' />

          <div className='absolute inset-0 flex flex-col justify-end p-8 text-white'>
            <p className='text-xs tracking-[0.35em] uppercase text-[#D6B24A]'>
              {currentTour.label}
            </p>

            <h2 className='text-3xl font-bold mt-3'>{currentTour.title}</h2>

            <p className='mt-3 max-w-md text-sm text-white/85'>
              Temples, rivers, markets, history, food, and hidden places —
              designed personally around your interests.
            </p>

            <span className='mt-6 inline-block text-sm font-semibold underline underline-offset-4'>
              View Experience
            </span>
          </div>
        </Link>

        <Link
          key={currentCollection.href}
          href={currentCollection.href}
          className='group relative overflow-hidden rounded-xl min-h-[420px] bg-black animate-in fade-in duration-700'
        >
          <Image
            src={currentCollection.image}
            alt={currentCollection.title}
            fill
            className='object-cover opacity-90 group-hover:scale-105 transition duration-700'
          />
          <div className='absolute inset-0 bg-black/30' />

          <div className='absolute inset-0 flex flex-col justify-end p-8 text-white'>
            <p className='text-xs tracking-[0.35em] uppercase text-[#D6B24A]'>
              {currentCollection.label}
            </p>

            <h2 className='text-3xl font-bold mt-3'>
              {currentCollection.title}
            </h2>

            <p className='mt-3 max-w-md text-sm text-white/85'>
              Thai amulets, sacred objects, and meaningful pieces selected with
              care, respect, and cultural context.
            </p>

            <span className='mt-6 inline-block text-sm font-semibold underline underline-offset-4'>
              Browse Collection
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeSplitFeature;
