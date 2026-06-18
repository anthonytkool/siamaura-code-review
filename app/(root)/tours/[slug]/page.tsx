import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tours } from '@/lib/data/tours';
import BookingForm from '@/components/tours/booking-form';
import FAQAccordion from '@/components/tours/faq-accordion';

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) notFound();

  return (
    <div className='bg-[#f8f3ea]'>
      <section
        className='relative min-h-[85vh] bg-cover bg-center -mt-8'
        style={{
          backgroundImage: `url(${tour.pageHeroImage || tour.heroImage})`,
        }}
      >
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative max-w-5xl mx-auto px-4 py-20 text-white'>
          <Link href='/tours' className='text-sm text-white/80 mb-8 block'>
            ← All Tours
          </Link>

          <p className='uppercase tracking-[0.35em] text-[#e7c75f] text-xs mb-4'>
            {tour.durationType} · {tour.duration}
          </p>

          <h1 className='text-3xl md:text-5xl font-serif mb-6 max-w-4xl'>
            {tour.title}
          </h1>

          <p className='text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8'>
            {tour.tagline}
          </p>

          <a
            href='#booking'
            className='inline-block bg-[#B8960C] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition'
          >
            Request to Book
          </a>
        </div>
      </section>

      <main className='max-w-5xl mx-auto px-4 py-10'>
        <section className='mb-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div
            className='min-h-[460px] rounded-3xl bg-cover bg-center shadow-xl'
            style={{
              backgroundImage: `url(${tour.whyImage || tour.heroImage})`,
            }}
          />

          <div>
            <p className='text-[#B8960C] uppercase tracking-[0.3em] text-xs mb-4'>
              Why This Experience
            </p>

            <h2 className='text-3xl md:text-5xl font-serif mb-6'>
              {tour.whyTitle ||
                'A private cultural journey, explained with meaning.'}
            </h2>

            <div className='space-y-4'>
              {tour.whyThisExperience.map((item, i) => (
                <div
                  key={i}
                  className='flex gap-3 text-gray-700 leading-relaxed'
                >
                  <span className='text-[#B8960C]'>✦</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='mb-8 bg-white border border-amber-100 rounded-3xl p-8 md:p-10'>
          <p className='text-[#B8960C] uppercase tracking-[0.3em] text-xs mb-4'>
            Private Custom Cultural Experience
          </p>

          <h2 className='text-2xl md:text-5xl font-serif mb-6'>
            Your day, your pace.
          </h2>

          <p className='text-gray-700 leading-relaxed mb-6 max-w-3xl'>
            Every Siam Aura experience is private and flexible. Your route,
            transportation, pace, and stops can be adjusted around your
            interests, comfort, and available time.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              'Private Guide',
              'Flexible Route',
              'Flexible Transportation',
              'Customized Experience',
              'Not a Group Tour',
              'Direct Communication with Anthony',
            ].map((item) => (
              <div key={item} className='flex gap-3 text-gray-700'>
                <span className='text-green-600 font-bold'>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div
            className='min-h-[600px] rounded-3xl bg-cover bg-center shadow-xl'
            style={{
              backgroundImage: `url(${tour.guideImage})`,
            }}
          />

          <div>
            <p className='text-[#B8960C] uppercase tracking-[0.3em] text-xs mb-2'>
              Meet Anthony
            </p>

            <h2 className='text-3xl md:text-5xl font-serif mb-2'>
              Your private cultural guide in Thailand.
            </h2>

            <div className='space-y-4 text-gray-700 leading-relaxed'>
              <p>
                Anthony brings together international hospitality, concierge
                service, cruise line experience, and more than 8 years of
                guiding travelers across Thailand.
              </p>

              <p>
                As a former G Adventures Tour Leader, he led extended cultural
                journeys across Thailand, Vietnam, Laos, and Cambodia, often
                guiding travelers through multi-country itineraries lasting more
                than 30 days.
              </p>

              <p>
                Today, every Siam Aura experience is private, flexible, and
                personally guided with care.
              </p>
            </div>

            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
              {[
                'Licensed Thai Tour Guide',
                'Former G Adventures Tour Leader',
                'Hotel Concierge & Butler Background',
                'Former Carnival Cruise Line Purser',
                'Thailand, Vietnam, Laos & Cambodia',
                'Private Custom Cultural Experiences',
              ].map((item) => (
                <div key={item} className='flex gap-2 text-green-700'>
                  <span>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='mb-8'>
          <p className='text-[#B8960C] uppercase tracking-[0.3em] text-xs mb-2'>
            Sacred Landmarks
          </p>

          <h2 className='text-2xl md:text-5xl font-serif mb-6'>
            Three iconic places, one meaningful journey.
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {tour.highlights.map((item, i) => (
              <div
                key={i}
                className='group bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-sm'
              >
                <div
                  className='h-56 bg-cover bg-center group-hover:scale-105 transition duration-500'
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className='p-5'>
                  <h3 className='text-xl font-serif'>{item.title}</h3>

                  <p className='mt-2 text-sm text-gray-600 leading-relaxed'>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-8 bg-white border border-amber-100 rounded-3xl p-8 md:p-10'>
          <p className='text-[#B8960C] uppercase tracking-[0.3em] text-xs mb-4'>
            Tour Highlights
          </p>

          <h2 className='text-2xl md:text-5xl font-serif mb-6'>
            What you will experience.
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {(tour.tourHighlights || []).map((item) => (
              <div
                key={item}
                className='flex gap-3 text-gray-700 leading-relaxed'
              >
                <span className='text-[#B8960C]'>✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-8'>
          <p className='text-[#B8960C] uppercase tracking-[0.3em] text-xs mb-4'>
            Choose Your Experience
          </p>

          <h2 className='text-2xl md:text-5xl font-serif mb-6'>
            Available Sites & Experiences
          </h2>

          <div className='space-y-4'>
            {tour.itineraryRoutes.map((item) => (
              <div
                key={item.title}
                className='bg-white border border-amber-100 rounded-2xl p-6'
              >
                <h3 className='text-xl font-serif mb-2'>{item.title}</h3>

                <p className='text-gray-600 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white border border-amber-100 rounded-3xl p-8'>
            <h2 className='text-2xl font-serif mb-5'>What’s Included</h2>

            <div className='space-y-3'>
              {[
                'Private licensed Thai guide',
                'Personal cultural explanation throughout the tour',
                'Flexible route planning',
                'Water, coffee & tea',
                'Direct communication before the tour',
                'Help arranging transport if needed',
              ].map((item) => (
                <div key={item} className='flex gap-3 text-gray-700'>
                  <span className='text-green-600 font-bold'>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white border border-amber-100 rounded-3xl p-8'>
            <h2 className='text-2xl font-serif mb-5'>What’s Not Included</h2>

            <div className='space-y-3'>
              {[
                'Temple entrance tickets',
                'Meals',
                'Private van or taxi costs',
                'Boat tickets',
                'Tuk tuk rides',
                'Personal expenses',
              ].map((item) => (
                <div key={item} className='flex gap-3 text-gray-700'>
                  <span className='text-red-500 font-bold'>×</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='mb-8 bg-white border border-amber-100 rounded-2xl p-8'>
          <h2 className='text-2xl font-serif mb-6'>
            Private Cultural Experience
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-5'>
            {tour.pricing.map((p, i) => (
              <div
                key={i}
                className='border border-amber-100 rounded-xl p-5 text-center bg-amber-50'
              >
                <p className='text-gray-500 text-sm'>{p.size}</p>
                <p className='text-2xl font-bold text-[#B8960C]'>{p.price}</p>
                <p className='text-xs text-gray-400'>per group / day</p>
              </div>
            ))}
          </div>
          {/* เปลี่ยนจากข้อความเก่าที่ฮาร์ดโค้ด มาเป็นการดึง tour.pricingNote โดยตรง */}
          <p className='text-sm text-gray-600 whitespace-pre-line'>
            {tour.pricingNote}
          </p>

          <div className='mt-3 space-y-2'></div>

          <div className='mt-3 space-y-2'>
            <p className='text-sm text-gray-600 italic leading-relaxed'>
              To ensure complete flexibility and freedom of choice, logistics,
              admissions, and dining are curated and arranged separately,
              tailored entirely to your personal comfort and preferences.
            </p>

            <p className='text-sm text-green-600 font-medium'>
              ✓ No hidden fees.
            </p>

            <p className='text-sm text-green-600 font-medium'>
              ✓ You approve all costs before the tour.
            </p>
          </div>
        </section>

        <section className='mb-8 bg-white border border-amber-100 rounded-3xl p-8 md:p-10'>
          <p className='text-[#B8960C] uppercase tracking-[0.3em] text-xs mb-4'>
            Why Travelers Choose Siam Aura
          </p>

          <h2 className='text-2xl md:text-5xl font-serif mb-6'>
            Private, personal, and transparent.
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              'Licensed Thai Tour Guide',
              'Former G Adventures Tour Leader',
              'Former Carnival Cruise Line Purser',
              'Hotel Concierge & Butler Background',
              'Private Experience Only',
              'Direct Communication with Anthony',
              'No Hidden Costs',
              'Flexible Route & Pace',
            ].map((item) => (
              <div key={item} className='flex gap-3 text-gray-700'>
                <span className='text-green-600 font-bold'>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-8'>
          <FAQAccordion extraItems={tour.faq} />
        </section>

        <section id='booking' className='scroll-mt-24'>
          <BookingForm tourTitle={tour.title} tourSlug={tour.slug} />
        </section>
      </main>
    </div>
  );
}
