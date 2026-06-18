const HomeTrustSplit = () => {
  return (
    <section className='mt-8 mb-8 px-4'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='rounded-xl border bg-[#f8f1e6] p-8'>
          <p className='text-xs tracking-[0.35em] uppercase text-[#B8960C]'>
            Private Cultural Tours
          </p>
          <h2 className='text-2xl font-bold mt-3'>
            Guided with real hospitality experience
          </h2>
          <ul className='mt-5 space-y-3 text-sm text-muted-foreground'>
            <li>
              <span className='font-bold text-[#B8960C]'>✓</span> 7 years in
              luxury hospitality, concierge, & hotel front office Manager
            </li>
            <li>
              <span className='font-bold text-[#B8960C]'>✓</span> 8+ years of
              guiding & leading expertise across Thailand, Vietnam, Laos, and
              Cambodia
            </li>
            <li>
              {' '}
              <span className='font-bold text-[#B8960C]'>✓</span> 2 cruise ship
              Purser contracts with Carnival Cruise Ship
            </li>
            <li>
              {' '}
              <span className='font-bold text-[#B8960C]'>✓</span> Private pace,
              flexible planning, and cultural context
            </li>
          </ul>
        </div>

        <div className='rounded-xl border bg-[#f8f1e6] p-8'>
          <p className='text-xs tracking-[0.35em] uppercase text-[#B8960C]'>
            Sacred Arts Collection
          </p>
          <h2 className='text-2xl font-bold mt-3'>
            Selected with care, meaning, and respect
          </h2>
          <ul className='mt-5 space-y-3 text-sm text-muted-foreground'>
            <li>
              {' '}
              <span className='font-bold text-[#B8960C]'>✓</span> Thai amulets
              and sacred objects with cultural context
            </li>
            <li>
              {' '}
              <span className='font-bold text-[#B8960C]'>✓</span> Clear
              descriptions and transparent presentation
            </li>
            <li>
              {' '}
              <span className='font-bold text-[#B8960C]'>✓</span> Carefully
              inspected before shipment
            </li>
            <li>
              {' '}
              <span className='font-bold text-[#B8960C]'>✓</span> Built around
              trust, not mass-market selling
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeTrustSplit;
