import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductPrice from '@/components/shared/product/product-price';
import ProductImages from '@/components/shared/product/product-images';
import AddToCart from '@/components/shared/product/add-to-cart';
import { getMyCart } from '@/lib/actions/cart.actions';

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const cart = await getMyCart();

  return (
    <section className='py-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
        <div className='col-span-2'>
          <ProductImages images={product.images} />
        </div>

        <div className='col-span-2 px-1 md:px-5'>
          <div className='flex flex-col gap-6'>
            <div>
              <h1 className='font-serif text-3xl leading-tight text-stone-950 md:text-4xl'>
                {product.name}
              </h1>

              <p className='mt-3 text-xs uppercase tracking-[0.25em] text-stone-500'>
                {product.brand} · {product.category}
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <ProductPrice
                value={Number(product.price)}
                className='w-fit rounded-full border border-[#d6b25e]/40 bg-[#faf8f3] px-5 py-2 text-stone-950'
              />
              <p className='text-xs text-stone-500'>
                ≈ ${(Number(product.price) / 33).toFixed(0)} USD · Rate: 1 USD ≈
                ฿33
              </p>
            </div>

            <div className='rounded-2xl border border-stone-200 bg-[#faf8f3] p-5'>
              <p className='mb-2 font-serif text-lg text-stone-950'>
                About This Piece
              </p>
              <p className='whitespace-pre-line leading-7 text-stone-700'>
                {product.description}
              </p>
            </div>

            <div className='rounded-2xl border border-stone-200 bg-white p-5'>
              <p className='mb-2 font-serif text-lg text-stone-950'>
                <b>Purchase with Trust</b>
              </p>
              <p className='leading-7 text-stone-700'>
                Each piece is presented with care for collectors who value Thai
                sacred arts, cultural meaning, and clear information before
                purchase.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Card className='rounded-2xl border-stone-200 shadow-sm md:sticky md:top-28'>
            <CardContent className='p-5'>
              <p className='mb-4 font-serif text-lg text-stone-950'>
                Purchase & Trust
              </p>

              <div className='mb-4 flex justify-between gap-4'>
                <div className='text-stone-600'>Price</div>
                <div>
                  <ProductPrice value={Number(product.price)} />
                </div>
              </div>

              <div className='mb-5 flex justify-between gap-4'>
                <div className='text-stone-600'>Status</div>
                {product.stock > 0 ? (
                  <Badge
                    variant='outline'
                    className='border-[#d6b25e]/50 bg-[#faf8f3] text-stone-800'
                  >
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant='destructive'>Out Of Stock</Badge>
                )}
              </div>

              <div className='mb-5 border-t border-stone-100 pt-5'>
                <p className='mb-2 font-serif text-base text-stone-950'>
                  Before Purchase
                </p>
                <div className='space-y-2 text-sm leading-6 text-stone-600'>
                  <p>Carefully listed by Siam Aura.</p>
                  <p>Questions are welcome before checkout.</p>
                  <p>
                    Condition and details should be reviewed before purchase.
                  </p>
                </div>
              </div>

              <div className='mb-5 border-t border-stone-100 pt-5'>
                <p className='mb-2 font-serif text-base text-stone-950'>
                  Need More Details?
                </p>
                <p className='text-sm leading-6 text-stone-600'>
                  Contact Siam Aura if you would like more photos or
                  clarification before ordering.
                </p>
              </div>

              {product.stock > 0 && (
                <div className='flex-center'>
                  <AddToCart
                    cart={cart}
                    stock={product.stock}
                    item={{
                      productId: product.id,
                      name: product.name,
                      slug: product.slug,
                      price: product.price,
                      qty: 1,
                      image: product.images![0],
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className='mt-10 rounded-2xl border border-stone-200 bg-white p-6 md:p-8'>
        <p className='mb-3 font-serif text-2xl text-stone-950'>
          Story, Condition & Notes
        </p>
        <p className='whitespace-pre-line leading-7 text-stone-700'>
          {product.description}
        </p>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
