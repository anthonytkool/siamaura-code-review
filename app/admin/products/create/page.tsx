import { Metadata } from 'next';
import ProductForm from '@/components/admin/product-form';
import { requireAdmin } from '@/lib/auth-guard';
import { getAllCategories } from '@/lib/actions/product.actions';

export const metadata: Metadata = {
  title: 'Create Product',
};

const CreateProductPage = async () => {
  await requireAdmin();
  const categories = await getAllCategories();
  return (
    <>
      <h2 className='h2-bold'>Create Product</h2>
      <div className='my-8'>
        <ProductForm type='Create' categories={categories} />
      </div>
    </>
  );
};

export default CreateProductPage;
