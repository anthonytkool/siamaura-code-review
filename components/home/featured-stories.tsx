'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const stories = [
  {
    title: 'Is Hiring a Private Guide in Bangkok Worth It?',
    label: 'Private Tour Insights',
    excerpt:
      'An honest answer from a former concierge, butler, tour leader, and private guide.',
    image: '/images/journal/is-private-guide-bangkok-worth-it.jpg',
    href: '/journal/is-private-guide-bangkok-worth-it',
  },
  {
    title: 'Private Tours vs Group Tours in Thailand',
    label: 'Private Tour Insights',
    excerpt:
      'Why private cultural tours create deeper, more meaningful travel experiences.',
    image: '/images/journal/private-vs-group-tours-thailand.jpg',
    href: '/journal/private-vs-group-tours-thailand',
  },
  {
    title: 'Wat Pho: Where Bangkok Slows Down',
    label: 'Wat Pho Series',
    excerpt: "A slow walk through one of Bangkok's most meaningful temples.",
    image: '/images/journal/wat-pho-cover.jpg',
    href: '/journal/wat-pho-where-bangkok-slows-down',
  },
  {
    title: 'The Meaning Behind the Name',
    label: 'Wat Pho Series',
    excerpt: "The hidden meaning behind one of Bangkok's most famous temples.",
    image: '/images/journal/wat-pho-ep2-cover.jpg',
    href: '/journal/wat-pho-the-meaning-behind-the-name',
  },
  {
    title: 'Where World Leaders Come to Pay Respect',
    label: 'Heritage',
    excerpt: 'Why powerful visitors still walk through this sacred place.',
    image: '/images/journal/wat-pho-ep3-cover.jpg',
    href: '/journal/wat-pho-world-leaders',
  },
  {
    title: 'Chinese Stones, Trading Ships & Thai Massage',
    label: 'Hidden Story',
    excerpt: 'The story most visitors walk past without noticing.',
    image: '/images/journal/chinese-statues-cover.jpg',
    href: '/journal/chinese-stones-trading-ships-and-thailands-first-massage-school',
  },
  {
    title: 'Grand Palace: The Heart of Old Siam',
    label: 'Grand Palace',
    excerpt: 'A royal landmark where history, artistry, and spirit meet.',
    image: '/images/journal/grand-palace-cover.jpg',
    href: '/journal/grand-palace-the-heart-of-old-siam',
  },
  {
    title: "The Emerald Buddha: Thailand's Most Sacred Image",
    label: 'Sacred Image',
    excerpt: 'Small in size yet immense in spiritual significance.',
    image: '/images/journal/emerald-buddha-cover.jpg',
    href: '/journal/emerald-buddha-thailands-most-sacred-image',
  },
  {
    title: 'Wat Arun: The Temple of Dawn',
    label: 'Temple of Dawn',
    excerpt: "One of Bangkok's most recognizable riverside landmarks.",
    image: '/images/journal/wat-arun-cover.jpg',
    href: '/journal/wat-arun-the-temple-of-dawn',
  },
  {
    title: 'Why Thai People Wear Amulets',
    label: 'Thai Amulets',
    excerpt:
      'Faith, tradition, protection, and stories carried close to the heart.',
    image: '/images/journal/thai-amulets-cover.jpg',
    href: '/journal/why-thai-people-wear-amulets',
  },
  {
    title: 'Flesh, Blood & Incantations',
    label: 'Ayutthaya Series',
    excerpt: 'The untouchable warriors of Siam and their invisible armor.',
    image: '/images/journal/ayutthaya-ep1-cover.jpg',
    href: '/journal/ayutthaya-flesh-blood-and-incantations',
  },
  {
    title: 'The Crypt of the Jaturak',
    label: 'Ayutthaya Series',
    excerpt: 'Secrets buried beneath the fallen kingdom of Ayutthaya.',
    image: '/images/journal/ayutthaya-ep2-cover.jpg',
    href: '/journal/ayutthaya-crypt-of-the-jaturak',
  },
  {
    title: 'Shadows in the Jungle: The Death Railway',
    label: 'Kanchanaburi Series',
    excerpt: 'The dark sorcery of the Death Railway and the men who built it.',
    image: '/images/journal/kanchanaburi-ep1-cover.jpg',
    href: '/journal/kanchanaburi-shadows-in-the-jungle',
  },
  {
    title: 'The River Kwai Today',
    label: 'Kanchanaburi Series',
    excerpt: 'Walking the ground where history still breathes.',
    image: '/images/journal/kanchanaburi-ep2-cover.jpg',
    href: '/journal/kanchanaburi-river-kwai-today',
  },
  {
    title: 'Chrono-Markets of Siam',
    label: 'Day Trips from Bangkok',
    excerpt:
      'Sugar farms, floating markets, and a train that drives through a busy marketplace.',
    image: '/images/journal/train-market-ep1-cover.jpg',
    href: '/journal/train-market-floating-market-coconut-sugar-farm',
  },
  {
    title: 'The Neon Chariot: Tuk-Tuks & Midnight Bangkok',
    label: 'Bangkok Night Series',
    excerpt: 'Giant Swing, Flower Market, and Chinatown after dark.',
    image: '/images/journal/tuktuk-ep1-cover.jpg',
    href: '/journal/tuktuk-neon-chariot-bangkok',
  },
];

const FeaturedStories = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % stories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleStories = [
    stories[startIndex],
    stories[(startIndex + 1) % stories.length],
    stories[(startIndex + 2) % stories.length],
  ];

  return (
    <section className='mt-12 px-4'>
      <div className='text-center mb-8'>
        <p className='text-xs tracking-[0.35em] uppercase text-[#B8960C]'>
          Siam Aura Journal
        </p>

        <h2 className='text-3xl font-bold mt-2'>
          Discover Thailand Beyond The Guidebooks
        </h2>

        <p className='text-muted-foreground mt-2 max-w-2xl mx-auto'>
          Stories from sacred places, old trade routes, temple courtyards, and
          Thai cultural memory.
        </p>
      </div>

      <div
        key={startIndex}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-right-4 duration-700'
      >
        {visibleStories.map((story) => (
          <Link
            key={story.href}
            href={story.href}
            className='border rounded-lg overflow-hidden bg-[#f8f1e6] hover:shadow-md transition'
          >
            <Image
              src={story.image}
              alt={story.title}
              width={600}
              height={400}
              className='w-full h-52 object-cover'
            />

            <div className='p-5'>
              <p className='text-xs tracking-[0.25em] uppercase text-[#B8960C] mb-2'>
                {story.label}
              </p>

              <h3 className='font-bold text-lg'>{story.title}</h3>

              <p className='text-sm text-muted-foreground mt-2'>
                {story.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className='mt-6 flex justify-center gap-2'>
        {stories.map((story, index) => (
          <button
            key={story.href}
            type='button'
            aria-label={`Go to story ${index + 1}`}
            onClick={() => setStartIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === startIndex ? 'w-6 bg-[#B8960C]' : 'w-2 bg-[#B8960C]/30'
            }`}
          />
        ))}
      </div>

      <div className='text-center mt-8'>
        <Link
          href='/journal'
          className='inline-block bg-[#B8960C] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#9f8008] transition'
        >
          View All Stories
        </Link>
      </div>
    </section>
  );
};

export default FeaturedStories;
