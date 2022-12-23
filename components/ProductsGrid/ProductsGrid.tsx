import Link from 'next/link';
import { TProduct } from '../../utils/types';
import { Grid, GridItem, ItemCaption, ItemImage } from './ProductsGrid.styled';

export default function ProductGrid({ products }: { products: TProduct[] }) {
  return (
    <Grid>
      {products?.length > 0 &&
        products.map((p, index) => (
          <Link key={p.id} href={`/product/${p.id}`}>
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
