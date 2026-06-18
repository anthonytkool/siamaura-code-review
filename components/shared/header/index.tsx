import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';
import CategoryDrawer from './category-drawer';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className='w-full border-b border-gray-200 bg-white sticky top-0 z-50 hover:bg-amber-50 transition-colors duration-300'>
      <div className='w-full px-8 py-5'>
        <div className='flex items-center justify-between'>
          {/* Left - Menu & Search */}
          <div className='flex items-center gap-6 w-1/3'>
            <CategoryDrawer />
            <Link href='/search'>
              <Search
                size={20}
                className='text-black hover:opacity-50 transition-opacity duration-300 cursor-pointer'
              />
            </Link>
          </div>

          {/* Center - Brand + Sub Nav */}
          <div className='flex flex-col items-center w-1/3'>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt='Siam Aura'
                width={40}
                height={40}
                className='block md:hidden'
              />
              <span
                className='hidden md:block font-serif text-2xl md:text-3xl text-black hover:opacity-50 transition-opacity duration-300 whitespace-nowrap'
                style={{ letterSpacing: '0.25em' }}
              >
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
              </span>
            </Link>

            {/* Sub Nav — hidden on mobile */}
            <nav className='hidden md:flex items-center gap-6 mt-2'>
              <Link
                href='/journal'
                className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 hover:text-[#B8960C] transition-colors duration-300'
              >
                Journal
              </Link>
              <span className='text-gray-300 text-xs'>|</span>
              <Link
                href='/about'
                className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 hover:text-[#B8960C] transition-colors duration-300'
              >
                About
              </Link>
              <span className='text-gray-300 text-xs'>|</span>
              <Link
                href='/tours'
                className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 hover:text-[#B8960C] transition-colors duration-300'
              >
                Tours
              </Link>
              <span className='text-gray-300 text-xs'>|</span>
              <Link
                href='/search'
                className='text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 hover:text-[#B8960C] transition-colors duration-300'
              >
                Collection
              </Link>
            </nav>
          </div>

          {/* Right - Cart & User */}
          <div className='flex justify-end w-1/3'>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
