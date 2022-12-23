import { formatPrice } from '../../utils/formatPrice';
import { TProduct } from '../../utils/types';
import {
  ActualPrice,
  Button,
  Circle,
  GreenOption,
  OldPrice,
  Price,
  ProductInfoWrapper,
  SmallText,
  Subtitle,
  Title,
} from './ProductInfo.styled';

export default function ProductInfo({
  title,
  body_html: bodyHtml,
  variants,
}: TProduct) {
  const {
    compare_at_price: oldPrice,
    price,
    inventory_quantity: quantity,
  } = variants
    ? variants[0]
    : { compare_at_price: 0, price: 0, inventory_quantity: 0 };
  return (
    <ProductInfoWrapper>
      <Title>{title}</Title>
      <Subtitle>{bodyHtml}</Subtitle>

      {oldPrice && oldPrice !== price ? (
        <Price>
          <OldPrice>{formatPrice({ price: oldPrice })}</OldPrice>
          <ActualPrice> {formatPrice({ price })}</ActualPrice>
          <SmallText>inkl. MwSt.</SmallText>
        </Price>
      ) : (
        <Price>
          {price}
          <SmallText>inkl. MwSt.</SmallText>
        </Price>
      )}

      <GreenOption>
        <Circle /> Auf Lager, in 2-3 Tagen bei dir
      </GreenOption>
      <Button type="button">In den Einkaufswagen</Button>
    </ProductInfoWrapper>
  );
}
