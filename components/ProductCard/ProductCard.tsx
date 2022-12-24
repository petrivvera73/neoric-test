import { TProduct } from '../../utils/types';
import Loader from '../Loader/Loader';
import ProductGallery from '../ProductGallery/ProductGallery';
import ProductInfo from '../ProductInfo/ProductInfo';
import { CardWrapper } from './ProductCard.styled';

export default function ProductCard({ product }: { product: TProduct }) {
  return (
    <CardWrapper>
      {product && <ProductGallery images={product.images} />}
      {product && <ProductInfo {...product} />}
      {!product && <Loader />}
    </CardWrapper>
  );
}
