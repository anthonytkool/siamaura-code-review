import Link from 'next/link';
import { auth, currentUser } from '@clerk/nextjs/server';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserIcon } from 'lucide-react';
import { SignOutButton } from '@clerk/nextjs';
import { prisma } from '@/db/prisma';

const UserButton = async () => {
  const { userId } = await auth();

  if (!userId) {
    return (
      <Link href='/sign-in'>
        <UserIcon
          size={24}
          className='text-black hover:opacity-50 transition-opacity duration-300 cursor-pointer'
        />
      </Link>
    );
  }

  const clerkUser = await currentUser();
  const dbUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  const name =
    clerkUser?.fullName ?? clerkUser?.emailAddresses[0]?.emailAddress ?? 'User';
  const email = clerkUser?.emailAddresses[0]?.emailAddress ?? '';
  const firstInitial = name.charAt(0).toUpperCase();
  const role = dbUser?.role ?? 'user';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className='w-7 h-7 rounded-full text-black flex items-center justify-center text-xs cursor-pointer hover:opacity-50 transition-opacity duration-300'
          style={{ backgroundColor: '#B8960C' }}
        >
          {firstInitial}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <div className='text-sm font-medium leading-none'>{name}</div>
            <div className='text-sm text-muted-foreground leading-none'>
              {email}
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href='/user/profile' className='w-full'>
            User Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/user/orders' className='w-full'>
            Order History
          </Link>
        </DropdownMenuItem>
        {role === 'admin' && (
          <DropdownMenuItem>
            <Link href='/admin/overview' className='w-full'>
              Admin
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className='p-0 mb-1'>
          <SignOutButton redirectUrl='/'>
            <button className='w-full py-2 px-2 text-left text-sm hover:opacity-50'>
              Sign Out
            </button>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
