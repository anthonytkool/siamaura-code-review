export interface TourFAQ {
  question: string;
  answer: string;
}

export interface TourItineraryItem {
  title: string;
  description: string;
}

export interface TourHighlight {
  title: string;
  subtitle: string;
  image: string;
}

export interface Tour {
  slug: string;
  title: string;
  whyTitle?: string;
  whyImage?: string;
  tagline: string;
  duration: string;
  durationType: 'Half Day' | 'Full Day' | 'Evening' | 'Multi-Day';
  heroImage: string;
  pageHeroImage?: string;
  guideImage: string;
  gallery: string[];
  whyThisExperience: string[];
  highlights: TourHighlight[];
  itineraryNote?: string;
  itineraryRoutes: TourItineraryItem[];
  pricing: {
    size: string;
    price: string;
  }[];
  pricingNote: string;
  tourHighlights?: string[];
  faq: TourFAQ[];
}

const defaultPricing = [
  {
    size: '1-2 Guests',
    price: '3,500 THB',
  },
  {
    size: '3-4 Guests',
    price: '4,500 THB',
  },
];

const defaultPricingNote =
  'Bespoke Private Guide Fee per group, per day. Complimentary bottled water, coffee, and local tea are elegantly included. To maintain absolute freedom of choice, personal logistics, entrance admissions, and dining are curated and arranged separately based on your dynamic preferences.';

const defaultFaq: TourFAQ[] = [
  {
    question: 'Is this an entirely private journey?',
    answer:
      'Absolutely. This is an exclusive, private experience dedicated solely to your group. Every itinerary is hosted personally by Anthony, curated to match your preferred pace, comfort, and unique interests.',
  },
  {
    question: 'Are entrance admissions and transport included?',
    answer:
      'To provide you with maximum flexibility and the freedom to choose your preferred level of transport or luxury dining on the go, admissions and logistics are arranged separately with transparent pricing.',
  },
  {
    question: 'How do I secure my reservation?',
    answer:
      'Kindly submit a booking request. Anthony will personally review your preferred dates, confirm private availability, and guide you through our direct payment arrangements.',
  },
  {
    question: 'What is your policy on gratuities?',
    answer:
      'Tipping is entirely at your personal discretion and is never expected. If you feel your private guiding experience was exceptional and exceeded your expectations, any gratuity is warmly appreciated as a gesture of appreciation.',
  },
];

export const tours: Tour[] = [
  {
    slug: 'bangkok-temples',
    title: 'Bangkok City & Temples Tour',
    tagline:
      'Immerse yourself in Bangkok’s most sacred landmarks with an elite private guide who unveils the profound history, artistry, and hidden royal stories behind the Grand Palace, Wat Pho, and Wat Arun.',
    duration: '6-7 hrs',
    durationType: 'Full Day',
    heroImage: '/images/tours/bangkok-temples.jpg',
    pageHeroImage: '/images/tours/wat-pho-cover.jpg',
    guideImage: '/images/tours/anthony/anthony-bangkok-guide.jpg',
    gallery: [
      '/images/tours/bangkok-temples.jpg',
      '/images/tours/bangkok-grand-palace.jpg',
      '/images/tours/bangkok-wat-arun.jpg',
      '/images/tours/bangkok-wat-pho-naga-buddha.jpg',
      '/images/tours/bangkok-wat-pho-reclining.jpg',
    ],
    whyThisExperience: [
      'Discover Bangkok’s iconic cultural treasures with deep intellectual context and historical narrative.',
      'Uncover the secret royal stories and spiritual symbols behind the Grand Palace, Wat Pho, and Wat Arun.',
      'An exclusively paced journey meticulously tailored for your party, completely detached from mass-market crowds.',
    ],
    highlights: [
      {
        title: 'Grand Palace & The Emerald Buddha',
        subtitle:
          'The majestic spiritual and royal epicenter of the Kingdom of Siam.',
        image: '/images/tours/bangkok-grand-palace.jpg',
      },
      {
        title: 'Wat Pho',
        subtitle:
          'Home of the Reclining Buddha and the sacred birthplace of traditional Thai medical wisdom.',
        image: '/images/tours/bangkok-wat-pho-reclining.jpg',
      },
      {
        title: 'Wat Arun',
        subtitle:
          'The iconic Temple of Dawn, standing as a masterwork of classic Rattanakosin architectural heritage.',
        image: '/images/tours/bangkok-wat-arun.jpg',
      },
    ],
    tourHighlights: [
      'Private exploration of Bangkok’s three pinnacle sacred landmarks',
      'In-depth immersion into Buddhist symbolism, royal heritage, and Thai cultural ethos',
      'Mastery of sacred temple etiquette and refined local traditions',
      'Fluid, private itinerary structured around your personal comfort',
      'Exquisite, curated riverside photography opportunities',
      'Guided exclusively and personally by Anthony',
    ],
    itineraryNote:
      'Your detailed itinerary will be masterfully customized following your initial request.',
    itineraryRoutes: [
      {
        title: 'Grand Palace & Emerald Buddha',
        description:
          'Delve into Thailand’s most significant monument of royal heritage and sacred artistry.',
      },
      {
        title: 'Wat Pho – The Reclining Buddha',
        description:
          'Encounter the awe-inspiring Reclining Buddha and uncover the ancient roots of traditional Thai wisdom.',
      },
      {
        title: 'Wat Arun – The Temple of Dawn',
        description:
          'Admire the breathtaking porcelain-encrusted spires of Bangkok’s most iconic riverside landmark.',
      },
      {
        title: 'The Golden Mount (Wat Saket)',
        description:
          'An optional, serene ascent offering panoramic sunset views over historic Bangkok. Transfers and admissions are effortlessly tailored on-site.',
      },
    ],
    pricing: defaultPricing,
    pricingNote: defaultPricingNote,
    faq: defaultFaq,
  },
  {
    slug: 'canal-royal-barge',
    title: 'Canal Tour & Royal Barge Museum',
    tagline:
      'Unveil the "Venice of the East" through its most historic, private waterways. Traverse hidden canals, encounter authentic stilt-house communities, and admire the majestic Royal Barges.',
    duration: '5-6 hrs',
    durationType: 'Half Day',
    heroImage: '/images/tours/anthony/anthony-canal-guide.jpg',
    pageHeroImage: '/images/tours/canal.jpg',
    guideImage: '/images/tours/tour-3.jpg',
    whyImage: '/images/tours/anthony/WatArunTemple.jpg',
    gallery: [
      '/images/tours/9k.jpg',
      '/images/tours/anthony/WatArunTemple.jpg',
      '/images/tours/bangkok-wat-arun.jpg',
      '/images/tours/bangkok-temples.jpg',
    ],
    whyThisExperience: [
      'Gain exclusive access to a serene, timeless Bangkok hidden entirely away from mainstream tourism routes.',
      'Understand how the historic waterways and the Chao Phraya river shaped royal heritage and local communities.',
      'An elegantly paced waterfront journey seamlessly blending authentic local culture with regal history.',
    ],
    highlights: [
      {
        title: 'Thonburi Private Canal Life',
        subtitle:
          'Navigate Bangkok’s historic labyrinth of quiet waterways and traditional riverside living.',
        image: '/images/tours/9k.jpg',
      },
      {
        title: 'The Royal Barges National Museum',
        subtitle:
          'Marvel at the intricately carved, ceremonial vessels used exclusively for grand royal processions.',
        image: '/images/tours/royalBargeNaga.jpg',
      },
      {
        title: 'Wat Pho – Sacred Perspectives',
        subtitle:
          'Explore Bangkok’s oldest temple complex to view the legendary Reclining Buddha with expert storytelling.',
        image: '/images/tours/wp.jpg',
      },
    ],
    tourHighlights: [
      'Elite, private canal and waterfront cultural experience',
      'Private long-tail boat journey through historic Thonburi waterways',
      'Curated private visit to the Royal Barges National Museum',
      'Optional tailored extensions to Wat Arun or Wat Pho',
      'Relaxed, fluid pace completely free from third-party pressure',
      'Hosted and guided personally by Anthony',
    ],
    itineraryNote:
      'Feel completely free to select the landmarks and cultural experiences that captivate you most.',
    itineraryRoutes: [
      {
        title: 'Private Long-tail Boat Journey',
        description:
          'Glide through historic waterways to capture a glimpse of Bangkok’s traditional and peaceful riverside soul.',
      },
      {
        title: 'Royal Barges National Museum',
        description:
          'Admire the spectacular royal vessels utilized in rare, historic waterborne processions.',
      },
      {
        title: 'Wat Arun – Riverside Splendor',
        description:
          'An optional close-up exploration of the stunning architecture facing the Chao Phraya River.',
      },
      {
        title: 'Wat Pho – Cultural Add-on',
        description:
          'An optional extension to effortlessly blend your waterborne journey with core Bangkok temple heritage.',
      },
    ],
    pricing: defaultPricing,
    pricingNote: defaultPricingNote,
    faq: defaultFaq,
  },
  {
    slug: 'ayutthaya-full-day',
    title: 'Ayutthaya Full Day Tour',
    tagline:
      'Journey to the ancient heart of Siam — explore UNESCO World Heritage ruins, grand royal temples, and the captivating historical narratives that forged the Thai kingdom.',
    duration: '10 hrs',
    durationType: 'Full Day',
    heroImage: '/images/tours/10t.jpg',
    pageHeroImage: '/images/tours/aya1.jpg',
    guideImage: '/images/tours/anthony/anthony-ayutthaya-guide.jpg',
    gallery: ['/images/tours/10t.jpg'],
    whyTitle: 'Thailand’s former capital, explained with meaning.',
    whyImage: '/images/tours/acy11.jpg',
    whyThisExperience: [
      'Unravel the dramatic rise, golden age, and profound legacy of Thailand’s former royal capital.',
      'Walk through breathtaking UNESCO World Heritage temples with a dedicated architectural and historical lens.',
      'Enjoy an exclusively curated day trip featuring tailored stops for premium refreshments and legendary local dining.',
    ],
    highlights: [
      {
        title: 'Wat Mahathat',
        subtitle:
          'The world-famous, evocative sandstone Buddha head beautifully entwined within sacred tree roots.',
        image: '/images/tours/buddhahead.jpg',
      },
      {
        title: 'Wat Phra Si Sanphet',
        subtitle:
          'The supreme royal temple sanctuary and spiritual blueprint of the Ayutthaya Kingdom.',
        image: '/images/tours/wsp.jpg',
      },
      {
        title: 'The Lost Empire of Siam',
        subtitle:
          'Immerse yourself in the history of what was once one of Asia’s most opulent global trading empires.',
        image: '/images/tours/aya2.jpg',
      },
    ],
    tourHighlights: [
      'Comprehensive immersion into UNESCO World Heritage archaeological sites',
      'Vivid, engaging historical storytelling regarding the Ayutthaya royal dynasty',
      'Private, unhurried exploration of sacred ruins and active temples',
      'Flexible, tailored pauses for boutique coffee, artisanal snacks, and local culture',
      'Exclusive private pace designed entirely around your party’s comfort',
      'Hosted and guided personally by Anthony',
    ],
    itineraryNote:
      'This expansive day itinerary will be elegantly tailored around your specific historical interests.',
    itineraryRoutes: [
      {
        title: 'Wat Phra Si Sanphet',
        description:
          'Stand amidst the iconic triple chedis of the grandest royal palace temple of ancient Siam.',
      },
      {
        title: 'Wat Mahathat',
        description:
          'View the sacred Buddha head embraced by nature and explore the sprawling monastery grounds.',
      },
      {
        title: 'Wat Ratchaburana',
        description:
          'Examine the impressive Khmer-style prang and learn about the hidden royal treasures discovered within.',
      },
      {
        title: 'Wat Yai Chai Mongkhon',
        description:
          'Marvel at the monumental bell-shaped chedi and the serene rows of cloth-draped Buddha statues.',
      },
      {
        title: 'Wat Phanan Choeng',
        description:
          'Step inside an active riverside temple housing a colossal, historic 19-meter seated Buddha.',
      },
      {
        title: 'Wat Chaiwatthanaram',
        description:
          'Appreciate the stunning Khmer architectural symmetry of this breathtaking riverside monument.',
      },
      {
        title: 'Chao Sam Phraya National Museum',
        description:
          'Discover the exquisite solid gold artifacts and royal treasures salvaged from Ayutthaya’s crypts.',
      },
      {
        title: 'Bang Pa-In Summer Palace',
        description:
          'Stroll through the lush, manicured royal gardens showcasing an elegant blend of European and Thai architecture.',
      },
      {
        title: 'Private Island Boat Cruise',
        description:
          'Circumnavigate the historic island city by boat to witness the ancient ruins from a captivating waterfront perspective.',
      },
      {
        title: 'Curated Culinary Experience',
        description:
          'Indulge in a relaxed lunch featuring local delicacies and Michelin-recommended Ayutthaya specialties.',
      },
      {
        title: 'Iconic Ayutthaya Chauffeur Ride',
        description:
          'An optional, open-air local ride through the temple parkways, perfect for capturing evocative, cinematic photographs.',
      },
    ],
    pricing: [
      {
        size: '1-2 Guests',
        price: '4,500 THB',
      },
      {
        size: '3-4 Guests',
        price: '5,500 THB',
      },
    ],
    pricingNote: defaultPricingNote,
    faq: defaultFaq,
  },
  {
    slug: 'river-kwai-death-railway-2d1n',
    title: 'River Kwai & Death Railway Experience',
    tagline:
      'A deeply moving 2-day historical journey spanning the iconic Bridge over the River Kwai, Hellfire Pass, evocative wartime heritage, and boutique riverside tranquility.',
    duration: '2 Days 1 Night',
    durationType: 'Multi-Day',
    heroImage: '/images/tours/kcbu.png',
    pageHeroImage: '/images/tours/k2.jpg',
    guideImage: '/images/tours/anthony/hellfirepass.jpg',
    gallery: ['/images/tours/2d1n-hero.jpg'],
    whyTitle:
      'History, remembrance, and River Kwai scenery over two meaningful days.',
    whyImage: '/images/tours/1a.jpg',
    whyThisExperience: [
      'Gain a profound understanding of the human stories surrounding the Thailand–Burma Death Railway and Hellfire Pass.',
      'Travel in the absolute comfort of a private vehicle with flexible timing for museums, local life, and scenery.',
      'Enjoy complete freedom to select your preferred luxury accommodation, from premium floating villas to boutique resorts.',
    ],
    highlights: [
      {
        title: 'Kanchanaburi War Cemetery',
        subtitle:
          'A beautifully manicured, deeply moving place of remembrance honoring thousands of Allied Commonwealth soldiers.',
        image: '/images/tours/kan.jpg',
      },
      {
        title: 'Wampo Viaduct Viewpoint',
        subtitle:
          'Witness the historic wooden trestle bridge hugging the sheer cliffside above the winding Kwai Noi River.',
        image: '/images/tours/vp.jpg',
      },
      {
        title: 'Hellfire Pass Memorial',
        subtitle:
          'Walk through the powerful, solemn rock cutting carved by hand by Allied prisoners and Asian laborers.',
        image: '/images/tours/hellfire.jpg',
      },
    ],
    tourHighlights: [
      'The iconic Bridge Over The River Kwai',
      'Private scenic exploration of the Wampo Viaduct railway route',
      'Deeply informative audio-guided walk at Hellfire Pass Memorial',
      'Respectful visit to the Kanchanaburi Allied War Cemetery',
      'Curated historical insights at the JEATH War Museum',
      'Immersive walks through vibrant local community markets',
      'Complete flexibility in handpicking your boutique resort or floating oasis',
      'Uncompromised private pace completely tailored to your personal comfort',
      'Guided personally and exclusively by Anthony',
    ],
    itineraryNote:
      'This private multi-day journey is fluidly adjusted based on your selected resort location, traffic patterns, museum hours, and personal interests.',
    itineraryRoutes: [
      {
        title: 'Bridge Over The River Kwai',
        description:
          'Stand atop the world-famous steel bridge and absorb the dramatic history connected to the WWII railway.',
      },
      {
        title: 'Wampo Viaduct & Scenic Railway',
        description:
          'Examine the incredible wartime engineering of the wooden tracks built along the edge of the river cliffs.',
      },
      {
        title: 'Hellfire Pass Interpretation Centre',
        description:
          'Trace the historic walking trail cut through solid rock and honor the profound sacrifices made during its construction.',
      },
      {
        title: 'Kanchanaburi Allied War Cemetery',
        description:
          'Pay your respects at the peaceful, immaculate final resting place of the Commonwealth prisoners of war.',
      },
      {
        title: 'JEATH War Museum',
        description:
          'Examine authentic wartime artifacts, rare photographs, and reconstructed bamboo huts to understand daily POW life.',
      },
      {
        title: 'Local Heritage Markets',
        description:
          'Sample fresh seasonal fruits, traditional regional delicacies, and interact with the warm local community.',
      },
      {
        title: 'Luxury Floating Resort or Boutique Hotel Stay',
        description:
          'Retire to your handpicked accommodation—whether a luxury floating villa on the river or a premium wellness resort.',
      },
    ],
    pricing: [
      {
        size: 'Private Multi-Day Tour',
        price: 'Guide Fee Only\n4,000 THB',
      },
    ],
    pricingNote:
      'Bespoke Planning & Private Guide Fee Only.\n\n✓ 2D1N Professional Guide Fee: 8,000 THB\n✓ 3D2N Professional Guide Fee: 12,000 THB\n\nTo ensure complete freedom of preference, guests arrange and settle their preferred accommodations, private vehicle transport, entrance admissions, train tickets, and dining directly.\n\nAnthony will gladly provide elite trip-planning assistance, helping you curate a seamless quote tailored to your party’s size, travel dates, and luxury style.',
    faq: defaultFaq,
  },
  {
    slug: 'river-kwai-complete-experience-3d2n',
    title: 'River Kwai Ultimate Journey',
    tagline:
      'The definitive 3-day Kanchanaburi expedition — an elegant blend of WWII history, a real Death Railway train ride, emerald forest waterfalls, and elite ethical nature experiences.',
    duration: '3 Days 2 Nights',
    durationType: 'Multi-Day',
    heroImage: '/images/tours/k4.jpg',
    pageHeroImage: '/images/tours/ka.jpg',
    guideImage: '/images/tours/lunchK.jpg',
    gallery: ['/images/tours/k5.jpg'],
    whyTitle:
      'The River Kwai, history, nature, and local experiences at a relaxed pace.',
    whyImage: '/images/tours/kan2.jpg',
    whyThisExperience: [
      'Immerse deeper into Kanchanaburi’s pristine wilderness with ample time for relaxation, photography, and meaningful heritage.',
      'Embark on a historic rail journey along the actual Death Railway route over the spectacular wooden viaducts.',
      'Seamlessly integrate premium nature experiences like the tiers of Erawan Waterfall or a private ethical elephant sanctuary.',
    ],
    highlights: [
      {
        title: 'Historic Death Railway Train Ride',
        subtitle:
          'Journey by rail across the jaw-dropping wooden trestles overlooking the river valley.',
        image: '/images/tours/k5.jpg',
      },
      {
        title: 'Erawan National Park Waterfalls',
        subtitle:
          'Hike through lush jungle pathways to discover crystalline, tiered emerald swimming pools.',
        image: '/images/tours/erawtf.jpg',
      },
      {
        title: 'Elite Ethical Elephant Encounter',
        subtitle:
          'Spend a mindful afternoon observing and supporting rescued elephants in a highly ethical, private setting.',
        image: '/images/tours/elep.jpg',
      },
    ],
    tourHighlights: [
      'Includes the complete historical itinerary of the 2D1N River Kwai experience',
      'Authentic local train ride along the cliff-hugging historic railway track',
      'Private excursion to the stunning multi-tiered Erawan Waterfall',
      'Curated options for premium, ethical elephant encounters',
      'Exploration of the ancient 13th-century Khmer ruins at Prasat Muang Singh',
      'Optional private long-tail boat cruise deep into the scenic river canyons',
      'Absolute control over your luxury accommodation selection',
      'An extraordinarily relaxed, private pace tailored for discerning travelers',
      'Guided personally and exclusively by Anthony',
    ],
    itineraryNote:
      'This ultimate 3-day route is completely bespoke, dynamically shaped around train schedules, your choice of boutique resort, and desired activities.',
    itineraryRoutes: [
      {
        title: 'Bridge Over The River Kwai',
        description:
          'Explore the iconic landmark and delve into the deep geopolitical history of WWII in Southeast Asia.',
      },
      {
        title: 'Historic Death Railway Rail Journey',
        description:
          'Board the local train to personally experience the thrilling ride across the historic cliffside viaducts.',
      },
      {
        title: 'Hellfire Pass Memorial & Rock Cutting',
        description:
          'A contemplative walk through the historical pass, complemented by a world-class audio guide narrative.',
      },
      {
        title: 'Wartime Remembrance & JEATH Museum',
        description:
          'Absorb the human stories behind the construction of the railway at Kanchanaburi’s principal memorial venues.',
      },
      {
        title: 'Erawan Emerald Waterfalls',
        description:
          'Hike, swim, or simply relax amidst the breathtaking limestone tiers of Thailand’s most beautiful aquatic park.',
      },
      {
        title: 'Ethical Elephant Sanctuary Sanctuary',
        description:
          'An optional, premium interaction focusing on the welfare, feeding, and natural lifestyle of gentle giants.',
      },
      {
        title: 'Prasat Muang Singh Historical Park',
        description:
          'An optional journey back in time to explore the westernmost outpost of the ancient Khmer Empire.',
      },
      {
        title: 'Private River Kwai Boat Cruise',
        description:
          'An optional, scenic long-tail boat cruise beneath the towering jungle canopies of the Kwai Noi river.',
      },
      {
        title: 'Boutique Riverside Accommodations',
        description:
          'Unwind each evening at your selected premium floating villa or luxury eco-resort.',
      },
    ],
    pricing: [
      {
        size: 'Private Multi-Day Tour',
        price: 'Guide Fee Only\n4,000 THB',
      },
    ],
    pricingNote:
      'Bespoke Planning & Private Guide Fee Only.\n\n✓ 2D1N Professional Guide Fee: 8,000 THB\n✓ 3D2N Professional Guide Fee: 12,000 THB\n\nTo ensure complete freedom of preference, guests arrange and settle their preferred accommodations, private vehicle transport, entrance admissions, train tickets, and dining directly.\n\nAnthony will gladly provide elite trip-planning assistance, helping you curate a seamless quote tailored to your party’s size, travel dates, and luxury style.',
    faq: defaultFaq,
  },
  {
    slug: 'train-market-floating-market',
    title: 'Train Market, Coconut Sugar Farm & Floating Market',
    tagline:
      'An elegant immersion into Thailand’s vibrant rural traditions — witness the iconic folding railway market, explore an artisanal coconut farm, and cruise the historic floating markets.',
    duration: '6-7 hrs',
    durationType: 'Full Day',
    heroImage: '/images/tours/6f.jpg',
    pageHeroImage: '/images/tours/3.jpg',
    guideImage: '/images/tours/anthony/anthony-train-market-guide.jpg',
    gallery: ['/images/tours/'],
    whyTitle: 'Local markets, rural life, and Thai traditions in one day.',
    whyImage: '/images/tours/train.jpg',
    whyThisExperience: [
      'Watch a bustling marketplace astonishingly retract and unfold seconds before a train passes directly through it.',
      'Discover the delicate, heritage craftsmanship behind organic coconut palm sugar sugar-making from a local farming family.',
      'Navigate the winding canals of the floating market on a private boat, enjoying authentic context free from tourist traps.',
    ],
    highlights: [
      {
        title: 'Maeklong Railway Market',
        subtitle:
          'Witness the captivating spectacle of vendors folding back their awnings as the train inches through the stalls.',
        image: '/images/tours/station.jpg',
      },
      {
        title: 'Artisanal Coconut Sugar Farm',
        subtitle:
          'Learn the traditional methods used to harvest and boil organic nectar from coconut palm blossoms.',
        image: '/images/tours/coconut.jpg',
      },
      {
        title: 'Damnoen Saduak Floating Market',
        subtitle:
          'Explore the storied canals and vibrant floating commerce on an exclusive, private long-tail boat.',
        image: '/images/tours/6.jpg',
      },
    ],
    tourHighlights: [
      'Front-row positioning for the Maeklong Railway Market train passage',
      'Exclusive visit to an authentic, traditional coconut sugar estate',
      'Private long-tail boat exploration of historic canal networks',
      'Curated tastings of tropical seasonal fruits, rare snacks, and local dishes',
      'Flexible, private pacing entirely unhurried by group tour schedules',
      'Hosted and guided personally by Anthony',
    ],
    itineraryNote:
      'This vibrant cultural day trip can be seamlessly adjusted according to train timetables and your personal preferences.',
    itineraryRoutes: [
      {
        title: 'Maeklong Railway Market (Talad Rom Hup)',
        description:
          'Stand safely at the heart of the market to watch the dramatic transformation as the train rolls through.',
      },
      {
        title: 'Artisanal Sugar Farmstead',
        description:
          'Visit a rustic local plantation to see how traditional Thai coconut palm sugar is slowly crystallized.',
      },
      {
        title: 'Damnoen Saduak Private Boat Cruise',
        description:
          'Board a private long-tail boat to glide past floating vendors selling fresh fruits, noodles, and handmade crafts.',
      },
      {
        title: 'Curated Rural Gastronomy',
        description:
          'Sample an array of authentic local dishes, freshly made coconut ice cream, and rare market delicacies.',
      },
      {
        title: 'Optional Cultural Extension',
        description:
          'If timing permits, an additional hidden local temple or community stop can be curated along the countryside route.',
      },
    ],
    pricing: defaultPricing,
    pricingNote:
      'Private Guide Fee Only. Transport logistics, private boat charters, entrance fees, and culinary dining are settled separately. Absolutely zero hidden fees—all operational options are transparently coordinated beforehand according to your style.',
    faq: defaultFaq,
  },
  {
    slug: 'tuktuk-food-tour',
    title: 'Bangkok Night Tuk Tuk Food & Hidden Bars',
    tagline:
      'Old Bangkok after dark — traverse the illuminated capital by private tuk tuk to experience majestic floodlit temples, legendary Michelin gastronomy, and secret rooftop mixology.',
    duration: '4-5 hrs',
    durationType: 'Evening',
    heroImage: '/images/tours/anthony/tuktuk.jpg',
    pageHeroImage: '/images/tours/7g.jpg',
    guideImage: '/images/tours/anthony/anthony.jpg',
    gallery: ['/images/tours/tuktuk-food.jpg'],
    whyTitle: 'Bangkok after dark, explained with local stories.',
    whyImage: '/images/tours/tt2.jpg',
    whyThisExperience: [
      'Experience the electric energy of historic Bangkok at night, long after the heavy tour buses have departed.',
      'Effortlessly fuse timeless royal architecture, Michelin-recognized culinary icons, and hidden nocturnal culture in one evening.',
      'Whiz through the brightly lit streets in an exclusive private tuk tuk, hosted personally by Anthony.',
    ],
    highlights: [
      {
        title: 'Wat Suthat & The Giant Swing',
        subtitle:
          'Appreciate the sublime, peaceful architecture of a premier royal temple beautifully illuminated under the stars.',
        image: '/images/tours/ttv2.jpg',
      },
      {
        title: 'Yaowarat Chinatown Night Walk',
        subtitle:
          'Plunge into the neon-drenched corridors of Bangkok’s legendary street food capital with an expert food curator.',
        image: '/images/tours/cnt1.jpg',
      },
      {
        title: 'Pak Khlong Talat Flower Market',
        subtitle:
          'Stroll through Bangkok’s premier 24-hour floral market, bustling with fragrant exotic blooms and vibrant midnight life.',
        image: '/images/tours/flm.jpg',
      },
    ],
    tourHighlights: [
      'Exclusive, private tuk tuk transportation throughout the evening',
      'Nighttime architectural exploration of Wat Suthat and the Giant Swing',
      'Illuminated drive past the historic Rattanakosin grand avenues',
      'Curated dining stops at two acclaimed Michelin-recognized local venues',
      'Expertly guided culinary walk through vibrant Yaowarat Chinatown',
      'Midnight sensory immersion at the famous Pak Khlong Talat flower market',
      'Curated stops at iconic old-town watering holes and hidden bars',
      'Discreet riverside lounge stop featuring a spectacular night view of Wat Arun',
      'Guided personally and exclusively by Anthony',
    ],
    itineraryNote:
      'This is an exceptionally flexible private evening route. Tuk tuk rentals, temple admissions, culinary dishes, and custom mixology drinks are arranged and settled directly on-site.',
    itineraryRoutes: [
      {
        title: 'Historic Rattanakosin Evening Route',
        description:
          'Admire the architectural majesty of the Giant Swing and the grand avenues of old Bangkok under evening illumination.',
      },
      {
        title: 'Private Tuk Tuk Chauffeur',
        description:
          'Zip through old-city alleys via private tuk tuk. Typically arranged at 2 guests per vehicle; larger groups enjoy multiple synchronized vehicles.',
      },
      {
        title: 'Michelin-Selected Culinary Stops',
        description:
          'Savor legendary nighttime flavors at two handpicked Michelin-recognized venues, ordered live to your personal taste.',
      },
      {
        title: 'Yaowarat Chinatown & Floral Heritage',
        description:
          'Navigate the legendary street food neon signs of Chinatown and stroll the sensory avenues of the continuous flower market.',
      },
      {
        title: 'Secret Riverside Mixology & Night Views',
        description:
          'Conclude your evening at a discreet riverside establishment, featuring a breathtaking illuminated view of Wat Arun over curated drinks.',
      },
    ],
    pricing: defaultPricing,
    pricingNote:
      'Private Guide Fee Only. Tuk tuk transport hire, temple admissions, specialized street food, and premium bar drinks are settled directly by guests. Absolute transparency assured — all estimated evening costs are mapped out before you depart.',
    faq: defaultFaq,
  },
];
