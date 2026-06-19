'use server';

import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';

export async function getAllCategoriesForAdmin() {
  const data = await prisma.category.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return {
    data,
    totalPages: 1,
  };
}

export async function createCategory(data: {
  name: string;
  slug: string;
  image?: string;
  description?: string;
  isActive: boolean;
}) {
  try {
    await prisma.category.create({
      data: {
        name: data.name,
        slug: data.slug,
        image: data.image || null,
        description: data.description || null,
        isActive: data.isActive,
      },
    });

    revalidatePath('/admin/categories');

    return {
      success: true,
      message: 'Category created successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
export async function getCategoryById(categoryId: string) {
  const data = await prisma.category.findFirst({
    where: {
      id: categoryId,
    },
  });

  return data;
}

export async function updateCategory(data: {
  id: string;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  isActive: boolean;
}) {
  try {
    await prisma.category.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        slug: data.slug,
        image: data.image || null,
        description: data.description || null,
        isActive: data.isActive,
      },
    });

    revalidatePath('/admin/categories');

    return {
      success: true,
      message: 'Category updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
