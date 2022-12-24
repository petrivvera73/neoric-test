import Link from 'next/link';
import { TProduct } from '../../utils/types';
import {
  Caption,
  Grid,
  GridItem,
  ItemCaption,
  ItemImage,
} from './ProductsGrid.styled';

export default function ProductGrid({ products }: { products: TProduct[] }) {
  return (
    <Grid>
      <GridItem>
        <Caption>Please, choose a product to view details</Caption>
      </GridItem>
      {products?.length > 0 &&
        products.map((p, index) => (
          <Link
            key={p.id}
            href={`/product/${p.id.toString().replace(/^\D+/g, '')}`}
          >
            <GridItem>
              <ItemImage
                src={p.images[0].src || '/images/fallback.jpg'}
                alt={p.title}
                width={250}
                height={250}
                priority={index < 10}
              />
              <ItemCaption>{p.title}</ItemCaption>
            </GridItem>
          </Link>
        ))}
    </Grid>
  );
}
