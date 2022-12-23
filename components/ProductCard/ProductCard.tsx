import { TProduct } from '../../utils/types';
import ProductGallery from '../ProductGallery/ProductGallery';
import ProductInfo from '../ProductInfo/ProductInfo';
import { CardWrapper } from './ProductCard.styled';

export default function ProductCard({ product }: { product: TProduct }) {
  console.log(product);
  return (
    <CardWrapper>
      {product && <ProductGallery images={product.images} />}
      {product && <ProductInfo {...product} />}
    </CardWrapper>
  );
}
