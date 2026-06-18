import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/db/prisma';

export async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (user?.role !== 'admin') {
    redirect('/unauthorized');
  }

  return user;
}
