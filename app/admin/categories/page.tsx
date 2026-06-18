import { requireAdmin } from '@/lib/auth-guard';

const AdminCategoriesPage = async () => {
  await requireAdmin();

  return (
    <div className='space-y-4'>
      <h1 className='h2-bold'>Categories</h1>
      <p>Category management coming soon.</p>
    </div>
  );
};

export default AdminCategoriesPage;
