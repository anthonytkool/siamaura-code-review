import { APP_NAME } from '@/lib/constants';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t mt-16'>
      <div className='max-w-5xl mx-auto px-6 py-4 text-center'>
        {/* Logo */}
        <h2 className='font-serif text-2xl tracking-[0.25em] mb-2'>
          <span
            style={{
              fontSize: '118%',
              fontFamily: '"Times New Roman", Times, serif',
              color: '#B8960C',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            S
          </span>
          IAM{' '}
          <span
            style={{
              fontSize: '118%',
              fontFamily: '"Times New Roman", Times, serif',
              color: '#B8960C',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            A
          </span>
          URA
        </h2>

        {/* Tagline */}
        <p className='text-sm text-gray-500 mb-4'>
          Thai Sacred Arts, Heritage Stories & Private Cultural Tours
        </p>

        {/* Nav Links */}
        <div className='flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4 text-sm text-gray-500 px-4'>
          <Link
            href='/journal'
            className='hover:text-[#B8960C] transition-colors'
          >
            Journal
          </Link>

          <Link
            href='/about'
            className='hover:text-[#B8960C] transition-colors'
          >
            About
          </Link>

          <Link
            href='/tours'
            className='hover:text-[#B8960C] transition-colors'
          >
            Tours
          </Link>

          <Link
            href='/search'
            className='hover:text-[#B8960C] transition-colors'
          >
            Collection
          </Link>

          <Link
            href='/collection-policy'
            className='hover:text-[#B8960C] transition-colors'
          >
            Collection Policy
          </Link>

          <Link
            href='/contact'
            className='hover:text-[#B8960C] transition-colors'
          >
            Contact
          </Link>
        </div>

        {/* Contact */}
        <div className='space-y-1 text-sm text-gray-500 mb-4'>
          <p>contact@siamaura.org</p>
          <p>LINE: @tcoolofficial</p>
          <p>WhatsApp: +66 65 634 6595</p>
        </div>

        {/* Copyright */}
        <div className='text-xs text-gray-400'>
          © {currentYear} {APP_NAME}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
