import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const formatted = value.toLocaleString('th-TH');

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-xs align-super'>฿</span>
      {formatted}
    </p>
  );
};

export default ProductPrice;
