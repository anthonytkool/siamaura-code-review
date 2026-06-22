import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  if (process.env.ALLOW_SEED_RESET !== 'true') {
    throw new Error(
      'Seed blocked. Set ALLOW_SEED_RESET=true only when you intentionally want to reset product seed data.'
    );
  }

  const prisma = new PrismaClient();

  await prisma.product.deleteMany();

  if (sampleData.products.length > 0) {
    await prisma.product.createMany({ data: sampleData.products });
  }

  console.log('Database seeded successfully!');
}

main();
