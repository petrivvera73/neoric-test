import BenefitsList from '../../components/BenefitsList/BenefitsList';
import { fetchProduct } from '../../services/fetchProduct';
import { TProduct } from '../../utils/types';
import ProductCard from '../../components/ProductCard/ProductCard';

export async function getServerSideProps(context: { params: { id: number } }) {
  const id = context.params.id;
  const product = await fetchProduct(id);
  return { props: { product: product || {} } };
}

export default function Product({ product }: { product: TProduct }) {
  return (
    <main>
      <ProductCard product={product} />
      <BenefitsList />
    </main>
  );
}
