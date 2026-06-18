'use client';

import { useState } from 'react';

interface BookingFormProps {
  tourTitle: string;
  tourSlug: string;
}

export default function BookingForm({ tourTitle, tourSlug }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    country: '',
    preferredDate: '',
    guests: '',
    hotel: '',
    specialRequests: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.fullName,
          lastName: '',
          email: formData.email,
          phone: formData.whatsapp,
          subject: `Tour Inquiry - ${tourTitle}`,
          message: `
Tour: ${tourTitle}
Tour Slug: ${tourSlug}
Preferred Date: ${formData.preferredDate}
Guests: ${formData.guests}
Country: ${formData.country}
Hotel / Pickup Location: ${formData.hotel || 'N/A'}
Special Requests: ${formData.specialRequests || 'N/A'}
  `,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className='bg-[#f8f3ea] border border-green-200 rounded-xl p-8 text-center'>
        <h3 className='text-2xl font-bold text-green-800 mb-2'>
          Request Received!
        </h3>
        <p className='text-gray-700 mb-4'>
          Thank you for your interest in {tourTitle}. Anthony will personally
          review your request and contact you within 24 hours to confirm
          availability and arrange payment.
        </p>
        <p className='text-gray-600 text-sm'>
          In the meantime, feel free to reach out directly:
        </p>
        <div className='flex flex-col sm:flex-row gap-3 justify-center mt-4'>
          <a
            href='https://wa.me/66656346595'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-green-600 hover:bg-green-700 text-white text-center py-2 px-6 rounded-xl font-medium transition'
          >
            WhatsApp
          </a>

          <a
            href='https://line.me/ti/p/tcoolofficial'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-[#06C755] hover:opacity-90 text-white text-center py-2 px-6 rounded-xl font-medium transition'
          >
            LINE
          </a>
        </div>
      </div>
    );
  }

  const minDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white border border-amber-200 rounded-xl p-6 space-y-4'
    >
      <h3 className='text-xl font-bold mb-2'>Request to Book This Tour</h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Preferred Date *
          </label>
          <input
            type='date'
            name='preferredDate'
            min={minDate}
            required
            value={formData.preferredDate}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2'
          />
          <p className='text-xs text-gray-500 mt-1'>
            Tour request must be at least 3 days in advance.
          </p>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Number of Guests *
          </label>
          <input
            type='number'
            name='guests'
            required
            min='1'
            value={formData.guests}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Full Name *
          </label>
          <input
            type='text'
            name='fullName'
            required
            value={formData.fullName}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Email *
          </label>
          <input
            type='email'
            name='email'
            required
            value={formData.email}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            WhatsApp Number *
          </label>
          <input
            type='text'
            name='whatsapp'
            required
            value={formData.whatsapp}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Country *
          </label>
          <input
            type='text'
            name='country'
            required
            value={formData.country}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2'
          />
        </div>

        <div className='sm:col-span-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Hotel to Pickup Location (optional)
          </label>
          <input
            type='text'
            name='hotel'
            value={formData.hotel}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2'
          />
        </div>

        <div className='sm:col-span-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Special Requests
          </label>
          <textarea
            name='specialRequests'
            rows={3}
            value={formData.specialRequests}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2'
          />
        </div>
      </div>

      {error && (
        <p className='text-red-600 text-sm'>
          Something went wrong. Please contact Anthony directly via WhatsApp:
          +66 65 634 6595
        </p>
      )}

      <button
        type='submit'
        disabled={loading}
        className='w-full text-white text-center py-3 rounded-xl font-bold transition hover:opacity-90 disabled:opacity-50'
        style={{ backgroundColor: '#B8960C' }}
      >
        {loading ? 'Sending...' : 'Send Booking Request'}
      </button>

      <p className='text-xs text-center text-gray-500 mt-3'>
        <b>
          No payment required today. Anthony will personally confirm
          availability and answer any questions before any commitment is made.
        </b>
      </p>
    </form>
  );
}
