import { TProduct } from '../../utils/types';
import ProductGallery from '../ProductGallery/ProductGallery';
import ProductInfo from '../ProductInfo/ProductInfo';

export default function ProductCard({ product }: { product: TProduct }) {
  console.log(product);
  return (
    <div>
      {product && <ProductGallery images={product.images} />}
      {product && <ProductInfo {...product} />}
    </div>
  );
}
