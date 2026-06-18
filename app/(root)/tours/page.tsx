import Link from 'next/link';
import { tours } from '@/lib/data/tours';

export default function ToursPage() {
  return (
    <div className='bg-[#f8f3ea]'>
      <section className='max-w-6xl mx-auto px-4 py-20 text-center'>
        <p className='text-[#B8960C] uppercase tracking-[0.35em] text-xs mb-4'>
          Private Cultural Journeys
        </p>
        <h1 className='text-4xl md:text-6xl font-serif mb-6'>
          Private Tours with Siam Aura
        </h1>
        <p className='max-w-2xl mx-auto text-gray-600 text-lg'>
          Thai sacred places, heritage stories, and private cultural experiences
          guided with care, honesty, and deep local knowledge.
        </p>
      </section>

      <section className='max-w-6xl mx-auto px-4 pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {tours.map((tour) => (
            <Link key={tour.slug} href={`/tours/${tour.slug}`}>
              <article className='group bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition'>
                <div
                  className='h-64 bg-gray-200 bg-cover bg-center'
                  style={{ backgroundImage: `url(${tour.heroImage})` }}
                />
                <div className='p-6'>
                  <p className='text-[#B8960C] uppercase tracking-[0.25em] text-xs mb-3'>
                    {tour.durationType} · {tour.duration}
                  </p>
                  <h2 className='text-2xl font-serif mb-3 group-hover:text-[#B8960C] transition'>
                    {tour.title}
                  </h2>
                  <p className='text-gray-600 text-sm leading-relaxed mb-5'>
                    {tour.tagline}
                  </p>
                  <span className='text-sm font-semibold text-[#B8960C]'>
                    View Experience →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
