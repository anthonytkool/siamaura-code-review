'use client';
import Image from 'next/image';
import { useState } from 'react';
import BrandBanner from '@/components/shared/brand-banner';

const ContactPage = () => {
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement)
        .value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <div className='max-w-2xl mx-auto py-10 px-6'>
        <h1 className='font-serif text-3xl tracking-widest uppercase text-center mb-12'>
          Contact Us
        </h1>

        <div className='mb-8 space-y-2 text-center'>
          <h2 className='text-sm tracking-widest uppercase font-semibold mb-4'>
            Customer Service
          </h2>
          <p className='text-sm text-gray-600'>
            Email:{' '}
            <a
              href='mailto:contact@siamaura.org'
              className='hover:opacity-50 transition-opacity'
            >
              contact@siamaura.org
            </a>
          </p>
          <p className='text-sm text-gray-600'>
            LINE / WhatsApp: Available Monday to Saturday 9:30 am - 17:00 pm
          </p>
        </div>

        {status === 'success' && (
          <div className='text-center p-4 mb-6 border border-green-300 bg-green-50 text-green-700 text-sm'>
            ✅ Your message has been sent! We will reply within 24 hours.
          </div>
        )}

        {status === 'error' && (
          <div className='text-center p-4 mb-6 border border-red-300 bg-red-50 text-red-700 text-sm'>
            ❌ Something went wrong. Please try again or contact us directly.
          </div>
        )}

        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='text-xs tracking-widest uppercase block mb-2'>
                First Name *
              </label>
              <input
                name='firstName'
                type='text'
                required
                className='w-full border-b border-black py-2 text-sm focus:outline-none focus:border-gray-400 bg-transparent'
              />
            </div>
            <div>
              <label className='text-xs tracking-widest uppercase block mb-2'>
                Last Name *
              </label>
              <input
                name='lastName'
                type='text'
                required
                className='w-full border-b border-black py-2 text-sm focus:outline-none focus:border-gray-400 bg-transparent'
              />
            </div>
          </div>

          <div>
            <label className='text-xs tracking-widest uppercase block mb-2'>
              Email *
            </label>
            <input
              name='email'
              type='email'
              required
              className='w-full border-b border-black py-2 text-sm focus:outline-none focus:border-gray-400 bg-transparent'
            />
          </div>

          <div>
            <label className='text-xs tracking-widest uppercase block mb-2'>
              Telephone Number
            </label>
            <input
              name='phone'
              type='tel'
              className='w-full border-b border-black py-2 text-sm focus:outline-none focus:border-gray-400 bg-transparent'
            />
          </div>

          <div>
            <label className='text-xs tracking-widest uppercase block mb-2'>
              Subject *
            </label>
            <select
              name='subject'
              required
              className='w-full border-b border-black py-2 text-sm focus:outline-none focus:border-gray-400 bg-transparent'
            >
              <option value=''>Please select a subject</option>
              <option value='Order Inquiry'>Order Inquiry</option>
              <option value='Shipping'>Shipping</option>
              <option value='Product Information'>Product Information</option>
              <option value='Payment'>Payment</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div>
            <label className='text-xs tracking-widest uppercase block mb-2'>
              Your Message *
            </label>
            <textarea
              name='message'
              required
              rows={5}
              className='w-full border-b border-black py-2 text-sm focus:outline-none focus:border-gray-400 bg-transparent resize-none'
            />
          </div>

          <div className='text-center pt-4'>
            <button
              type='submit'
              disabled={status === 'sending'}
              className='text-xs tracking-widest uppercase border border-black px-12 py-3 hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50'
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>

        <div className='mt-10 border-t border-gray-200 pt-8 text-center'>
          <h2 className='text-sm tracking-widest uppercase font-semibold mb-8'>
            Connect With Siam Aura
          </h2>
          <div className='grid grid-cols-2 gap-10'>
            <div className='flex flex-col items-center'>
              <p className='text-xs tracking-widest uppercase mb-4'>
                LINE Official
              </p>
              <Image
                src='/images/contact/line-qr.png'
                alt='LINE QR'
                width={160}
                height={160}
                className='object-contain'
              />
              <p className='text-sm mt-4 text-gray-600'>@tcoolofficial</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-xs tracking-widest uppercase mb-4'>WhatsApp</p>
              <Image
                src='/images/contact/whatsapp-qr.png'
                alt='WhatsApp QR'
                width={160}
                height={160}
                className='object-contain'
              />
              <p className='text-sm mt-4 text-gray-600'>+66 65 634 6595</p>
            </div>
          </div>
        </div>
      </div>
      <BrandBanner />
    </>
  );
};

export default ContactPage;
