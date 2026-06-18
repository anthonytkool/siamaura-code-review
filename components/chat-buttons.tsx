import Link from 'next/link';

export default function ChatButtons() {
  return (
    <div className='fixed bottom-6 right-6 flex flex-col gap-3 z-50'>
      <Link
        href='https://wa.me/66656346595'
        target='_blank'
        rel='noopener noreferrer'
        className='flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg'
      >
        W
      </Link>

      <Link
        href='https://line.me/ti/p/~tcoolofficial'
        target='_blank'
        rel='noopener noreferrer'
        className='flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg'
      >
        L
      </Link>
    </div>
  );
}
