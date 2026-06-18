import Image from 'next/image';
import loader from '@/assets/loader.gif';

const LoadingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'white',
      }}
    >
      <div className='font-serif text-2xl tracking-[0.4em] uppercase animate-pulse'>
        <span
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            color: '#B8960C',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: '120%',
          }}
        >
          S
        </span>
        IAM{' '}
        <span
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            color: '#B8960C',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: '120%',
          }}
        >
          A
        </span>
        URA
      </div>
      <div className='mt-4 text-xs tracking-widest uppercase text-gray-400 animate-pulse'>
        Loading...
      </div>
    </div>
  );
};

export default LoadingPage;
