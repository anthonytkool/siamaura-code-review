import HeroSection from '@/components/home/hero-section';
import FeaturedStories from '@/components/home/featured-stories';
import ProductList from '@/components/shared/product/product-list';
import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions';
import ProductCarousel from '@/components/shared/product/product-carousel';
import ViewAllProductsButton from '@/components/view-all-products-button';
import HomeSplitFeature from '@/components/home/home-split-feature';
import HomeTrustSplit from '@/components/home/home-trust-split';
import IconBoxes from '@/components/icon-boxes';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className='-mt-5'>
      <HeroSection />
      <FeaturedStories />
      <HomeSplitFeature />
      <HomeTrustSplit />

      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}

      {latestProducts.length > 0 && (
        <>
          <ProductList
            data={latestProducts}
            title='Newest Arrivals'
            limit={4}
          />
          <ViewAllProductsButton />
        </>
      )}

      <IconBoxes />
    </div>
  );
};

export default Homepage;
