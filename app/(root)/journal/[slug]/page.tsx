import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

const JournalArticlePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/journal', `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  // Get related articles
  const journalDir = path.join(process.cwd(), 'content/journal');
  const allFiles = fs.readdirSync(journalDir).filter((f) => f.endsWith('.mdx'));

  const relatedArticles = allFiles
    .filter((f) => f.replace('.mdx', '') !== slug)
    .map((f) => {
      const fileRaw = fs.readFileSync(path.join(journalDir, f), 'utf-8');
      const { data: fileData } = matter(fileRaw);
      return {
        slug: f.replace('.mdx', ''),
        title: fileData.title,
        excerpt: fileData.excerpt,
        coverImage: fileData.coverImage,
        series: fileData.series,
      };
    })
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <article className='mx-auto max-w-3xl px-4 py-4'>
      {/* Series & Episode */}
      <p className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8960C]'>
        {data.series} · Episode {data.episode}
      </p>

      {/* Title */}
      <h1 className='mb-4 text-3xl font-bold md:text-4xl leading-tight'>
        {data.title}
      </h1>

      {/* Excerpt */}
      <p className='mb-6 text-base text-muted-foreground border-l-2 border-[#B8960C] pl-4 italic'>
        {data.excerpt}
      </p>

      {/* Hero Image */}
      <div className='relative mb-10 h-[380px] w-full overflow-hidden rounded-xl md:h-[480px]'>
        <Image
          src={data.coverImage}
          alt={data.title}
          fill
          priority
          className='object-cover object-center'
        />
      </div>

      {/* Content */}
      <div className='prose prose-lg max-w-none'>
        <MDXRemote source={content} />
      </div>

      {/* Author Box */}
      <div className='mt-12 flex items-start gap-4 rounded-xl border border-[#B8960C]/30 bg-[#f8f3ea] p-6'>
        <div>
          <p className='text-xs uppercase tracking-[0.2em] text-[#B8960C]'>
            Written & Photographed by
          </p>
          <p className='mt-1 text-lg font-bold'>{data.author}</p>
          <p className='text-sm text-muted-foreground'>{data.authorTitle}</p>
          <p className='mt-2 text-sm text-muted-foreground'>
            8+ years guiding across Thailand, Vietnam, Laos & Cambodia · Ex-G
            Adventures Lead Guide · 1,000+ guests from 40+ countries
          </p>
        </div>
      </div>

      {/* Soft CTA */}
      <div className='mt-6 rounded-xl bg-[#f8f3ea] p-6'>
        <p className='mb-1 text-xs uppercase tracking-[0.2em] text-[#B8960C]'>
          Explore Siam Aura
        </p>
        <p className='mb-4 font-semibold'>Sacred arts, curated with care.</p>
        <div className='flex flex-col gap-3 sm:flex-row'>
          <Link
            href='/search'
            className='rounded-lg bg-[#B8960C] px-5 py-2 text-center text-sm font-medium text-white hover:bg-[#9f8008]'
          >
            Browse Collection →
          </Link>

          <Link
            href='/contact'
            className='rounded-lg border border-[#B8960C] px-5 py-2 text-center text-sm font-medium text-[#B8960C] hover:bg-[#B8960C] hover:text-white transition-all'
          >
            Contact Concierge →
          </Link>

          <Link
            href='/tours'
            className='rounded-lg border border-[#B8960C] px-5 py-2 text-center text-sm font-medium text-[#B8960C] hover:bg-[#B8960C] hover:text-white transition-all'
          >
            Private Tours →
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className='mt-12'>
          <p className='mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#B8960C]'>
            Continue Reading
          </p>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
            {relatedArticles.map((article) => (
              <Link key={article.slug} href={`/journal/${article.slug}`}>
                <div className='group cursor-pointer'>
                  <div className='relative mb-3 h-40 w-full overflow-hidden rounded-lg'>
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8960C]'>
                    {article.series}
                  </p>
                  <p className='mt-1 text-sm font-bold leading-snug group-hover:text-[#B8960C]'>
                    {article.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default JournalArticlePage;
