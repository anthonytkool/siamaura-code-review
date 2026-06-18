import Image from 'next/image';
import Link from 'next/link';
import { getAllJournalPosts } from '@/lib/journal';

export const metadata = {
  openGraph: {
    title: 'Journal | Siam Aura',
    description: 'Stories, Heritage & Sacred Arts from Thailand.',
    images: ['/images/siam-aura-og-banner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/siam-aura-og-banner.png'],
  },
};

export default function JournalPage() {
  const posts = getAllJournalPosts();

  return (
    <div className='mx-auto max-w-5xl pt-2 pb-6'>
      {/* Header */}
      <div className='mb-8 text-center'>
        <p className='mb-2 text-lg font-semibold uppercase tracking-[0.35em] text-[#B8960C]'>
          Siam Aura Journal
        </p>
        <h1 className='text-4xl font-bold md:text-5xl'>
          Stories, Heritage & Sacred Arts
        </h1>
        <p className='mt-4 text-lg text-muted-foreground'>
          Personal stories from Thailand's sacred places, cultural landmarks,
          and meaningful traditions.
        </p>
        <p className='mt-2 text-sm text-muted-foreground italic'>
          Written & photographed by Anthony T. Cool — Licensed Tour Guide &
          Cultural Storyteller
        </p>
      </div>

      {/* Grid */}
      <div className='grid gap-6 sm:grid-cols-2'>
        {posts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className='group overflow-hidden rounded-xl border bg-[#f8f3ea] transition hover:shadow-lg'
          >
            {/* Image */}
            <div className='relative h-52 w-full overflow-hidden'>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className='object-cover transition duration-500 group-hover:scale-105'
              />
            </div>

            {/* Text */}
            <div className='p-5'>
              <p className='mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#B8960C]'>
                {post.series} · Episode {post.episode}
              </p>
              <h2 className='mb-2 text-xl font-bold leading-snug'>
                {post.title}
              </h2>
              <p className='mb-4 text-sm text-muted-foreground line-clamp-2'>
                {post.excerpt}
              </p>
              <span className='text-sm font-medium text-[#B8960C]'>
                Read Story →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
