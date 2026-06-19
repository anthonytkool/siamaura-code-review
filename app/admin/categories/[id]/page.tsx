import CategoryForm from '@/components/admin/category-form';
import { getCategoryById } from '@/lib/actions/category.actions';
import { requireAdmin } from '@/lib/auth-guard';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Update Category',
};

const AdminCategoryUpdatePage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  await requireAdmin();

  const { id } = await props.params;

  const category = await getCategoryById(id);

  if (!category) return notFound();

  return (
    <div className='space-y-8 max-w-5xl mx-auto'>
      <h1 className='h2-bold'>Update Category</h1>

      <CategoryForm
        type='Update'
        category={category}
        categoryId={category.id}
      />
    </div>
  );
};

export default AdminCategoryUpdatePage;
