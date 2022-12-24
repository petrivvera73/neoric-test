import BenefitsList from '../../components/BenefitsList/BenefitsList';
import { TProduct } from '../../utils/types';
import ProductCard from '../../components/ProductCard/ProductCard';
import { client } from '../../store/shopifyStore';
import Loader from '../../components/Loader/Loader';
import Cart from '../../components/Cart/Cart';

export async function getServerSideProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const product = await client.product.fetch(`gid://shopify/Product/${id}`);
  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}

export default function Product({ product }: { product: TProduct }) {
  return (
    <main>
      {product ? (
        <>
          <ProductCard product={product} />
          <BenefitsList />
          <Cart />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}
