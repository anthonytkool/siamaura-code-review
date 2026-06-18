'use client';

import { useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

// 1. คลังคำถามส่วนกลาง (Global FAQs) ที่จะแสดงในทัวร์ทุกหน้าโดยอัตโนมัติ
const GLOBAL_FAQS: FAQItem[] = [
  {
    question:
      'What type of vehicle will we travel in, and is it air-conditioned?',
    answer:
      "All private tours operate in a dedicated, modern air-conditioned vehicle — never a shared minivan or public transport. For most day tours, this means a comfortable private car or SUV with ample space for your group and luggage. For larger groups or multi-day programmes such as River Kwai, a private air-conditioned minivan is arranged. Thailand's heat and humidity are real — we take your comfort in transit seriously. The vehicle is yours for the day, which means stops are made on your timeline, not a fixed schedule.",
  },
  {
    question:
      'Do you offer hotel pickup and drop-off, and does it cover all Bangkok areas?',
    answer:
      'Yes, complimentary door-to-door pickup and drop-off are included for all centrally located hotels in Bangkok. Whether you are staying along the Chao Phraya River, in Sukhumvit, Silom, or Siam, your private guide and driver will meet you directly in your hotel lobby at the scheduled time. If your accommodation is outside the primary city limits, please let us know in advance so we can arrange seamless logistics.',
  },
  {
    question:
      'What happens if it rains heavily — particularly during monsoon season?',
    answer:
      "Tropical showers are a natural part of Thailand's climate, but they rarely disrupt a well-planned itinerary. Our private tours operate rain or shine. In luxury travel, flexibility is key: if a sudden heavy downpour occurs during an outdoor temple visit, Anthony will smoothly adjust the pacing on the fly — moving to a covered pavillion, exploring an exquisite interior mural, or pausing for a refreshing break until the rain eases. We also provide high-quality umbrellas in our private vehicles for your convenience.",
  },
  {
    question:
      'We are travelling with older guests or someone with limited mobility. Can the pace be adjusted?',
    answer:
      'Absolutely. This is the primary luxury of choosing a private experience. Standard group tours operate on rigid, fast-paced timelines. With Siam Aura, the day unfolds entirely at your pace. If grandparents or members with limited mobility need to walk slowly, take frequent rests in the shade, or bypass specific staircases, the itinerary is adjusted instantly. Anthony tailors the historical storytelling to fit your comfort, ensuring an enriching experience without physical strain.',
  },
  {
    question:
      'How does the dress code work for temples, and what if we forget to bring the right clothing?',
    answer:
      'Thai sacred places enforce a strict dress code out of respect for active places of worship. Both men and women must cover shoulders and knees (no sleeveless shirts, short shorts, or ripped trousers). For the Grand Palace, guidelines are absolute. To maintain your absolute comfort, we always recommend wearing light, breathable linen trousers. However, should you forget or need an adjustment, Anthony carries spare high-quality cultural wraps or will assist you in acquiring appropriate attire before entering the gates seamlessly.',
  },
  {
    question:
      "What makes Anthony's guiding style different from a standard tour guide?",
    answer:
      "A standard guide often recites a memorized script of dates and numbers, rushing from one photo spot to another. Drawing from professional luxury hotel butler and concierge experience, Anthony approaches guiding as a high-touch cultural partnership. It is about deep historical context, hidden layers, and emotional storytelling. You won't just see ruins; you will understand the spiritual warfare, the royal rivalries, and the living beliefs behind them — delivered with the seamless hospitality of a dedicated personal concierge.",
  },
  {
    question:
      'What is strictly included in the tour price, and what should we budget for additionally?',
    answer:
      'Our pricing adheres to total transparency. Included in your experience are: your private dedicated vehicle, premium fuel, highway tolls, all temple/site admission tickets, and Anthony’s full-day expert guiding services. Excluded are your personal meals, drinks, and personal shopping. There are no hidden fees, surprise stops at commercial souvenir shops, or unexpected commissions — a practice unfortunately common in standard tourism.',
  },
  {
    question:
      'What is the etiquette around tipping for the guide and driver, and is it expected?',
    answer:
      'In Thailand, tipping is a deeply appreciated gesture that reflects the quality of service rather than a mandatory requirement. For private luxury tours, if your guide and driver have delivered an exceptional, stress-free day, a gratuity is standard practice. While entirely at your discretion, a customary benchmark for an outstanding private day tour is 1,000–1,500 THB for the guide and 500–800 THB for the dedicated driver from the group.',
  },
  {
    question:
      'How flexible is the itinerary on the actual day — can we change plans on the fly?',
    answer:
      'Your journey is uniquely yours. The structure we agree upon is a canvas, not a cage. If you arrive at a specific temple and find yourself completely captivated by the architecture, we can stay longer. If you wish to skip a site to enjoy a prolonged riverside lunch, we adapt immediately. Anthony balances the daylight and logistics behind the scenes, allowing you to follow your curiosity without worrying about the clock.',
  },
];

interface FAQAccordionProps {
  // รับคำถามพิเศษเฉพาะหน้านั้นๆ เพิ่มเข้ามาได้ (Optional)
  extraItems?: FAQItem[];
}

export default function FAQAccordion({ extraItems = [] }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  // รวมคำถามเฉพาะหน้า (เอาขึ้นก่อน) ตามด้วยคำถาม Global ส่วนกลาง
  const allItems = [...extraItems, ...GLOBAL_FAQS];

  return (
    <div className='max-w-5xl mx-auto px-6 mb-16'>
      <div className='text-center mb-8'>
        <h2 className='font-serif text-3xl tracking-wide text-gray-900 mb-2'>
          Frequently Asked Questions
        </h2>
        <p className='text-sm text-gray-500 max-w-xl mx-auto'>
          Everything you need to know about comfort, logistics, and the cultural
          philosophy behind our journeys.
        </p>
      </div>

      <div className='space-y-4'>
        {allItems.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              key={index}
              className='bg-white border border-amber-100/70 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              <button
                className='w-full flex justify-between items-center p-5 text-left transition-colors duration-200 hover:bg-amber-50/20'
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className='font-serif text-base text-gray-800 font-medium pr-4'>
                  {item.question}
                </span>

                <span
                  className={`text-xl font-light text-[#B8960C] transform transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  ＋
                </span>
              </button>

              {/* Smooth expand area */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[500px] border-t border-amber-50' : 'max-h-0'
                }`}
              >
                <div className='p-5 text-sm text-gray-600 leading-relaxed font-sans bg-stone-50/30 whitespace-pre-line'>
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
