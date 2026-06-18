import Link from 'next/link';
import { requireAdmin } from '@/lib/auth-guard';
import { getAllCategoriesForAdmin } from '@/lib/actions/category.actions';
import { formatId } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AdminCategoriesPage = async () => {
  await requireAdmin();

  const categories = await getAllCategoriesForAdmin();

  return (
    <div className='space-y-2'>
      <div className='flex-between'>
        <h1 className='h2-bold'>Categories</h1>
        <Button asChild variant='default'>
          <Link href='/admin/categories/create'>Create Category</Link>
        </Button>
      </div>

      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>SLUG</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead className='w-[100px]'>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.data.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{formatId(category.id)}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.slug}</TableCell>
                <TableCell>
                  {category.isActive ? 'Active' : 'Inactive'}
                </TableCell>
                <TableCell>
                  <Button asChild variant='outline' size='sm'>
                    <Link href={`/admin/categories/${category.id}`}>Edit</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminCategoriesPage;
