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
import parse from 'html-react-parser';

export default function ProductInfo({
  title,
  description,
  variants,
}: TProduct) {
  const { compareAtPrice, price } = variants
    ? variants[0]
    : {
        compareAtPrice: { amount: 0, currencyCode: 'EUR' },
        price: { amount: 0, currencyCode: 'EUR' },
      };

  return (
    <ProductInfoWrapper>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>

      {compareAtPrice.amount ?? compareAtPrice.amount !== price.amount ? (
        <Price>
          <OldPrice>
            {formatPrice({
              amount: compareAtPrice.amount,
              currencyCode: compareAtPrice.currencyCode,
            })}
          </OldPrice>
          <ActualPrice>
            {formatPrice({
              amount: price.amount,
              currencyCode: price.currencyCode,
            })}
          </ActualPrice>
          <SmallText>inkl. MwSt.</SmallText>
        </Price>
      ) : (
        <Price>
          {price.amount}
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
