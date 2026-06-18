import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/db/prisma';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: '4MB', maxFileCount: 6 },
  })
    .middleware(async () => {
      const { userId: clerkId } = await auth();
      if (!clerkId) throw new UploadThingError('Unauthorized');

      const dbUser = await prisma.user.findUnique({ where: { clerkId } });
      if (!dbUser) throw new UploadThingError('Unauthorized');

      return { userId: dbUser.id };
    })
    .onUploadComplete(async ({ metadata }) => {
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
