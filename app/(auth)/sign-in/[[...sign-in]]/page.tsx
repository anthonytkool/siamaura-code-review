import { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In',
};

const SignInPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const { userId } = await auth();

  if (userId) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className='w-full max-w-md mx-auto flex flex-col items-center gap-4'>
      <SignIn />
      <div className='text-center space-y-1 px-4 w-full max-w-sm'>
        <p className='text-base font-semibold text-red-500'>
          New here? Please{' '}
          <Link href='/sign-up' className='underline hover:opacity-50'>
            Sign up first
          </Link>
        </p>
        <p className='text-base font-semibold text-red-500'>
          ยังไม่มีบัญชี?{' '}
          <Link href='/sign-up' className='underline hover:opacity-50'>
            สมัครสมาชิกก่อนนะครับ
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
