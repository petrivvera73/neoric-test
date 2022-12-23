import { formatPrice } from '../utils/formatPrice';
import { TProduct } from '../utils/types';

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
    <div>
      <h2>{title}</h2>
      <p>{bodyHtml}</p>
      <h5>
        <span>{formatPrice({ price: oldPrice })}</span>
        {formatPrice({ price })}
        <span>inkl. MwSt.</span>
      </h5>
      <p>● Auf Lager, in 2-3 Tagen bei dir</p>
      <button type="button">In den Einkaufswagen</button>
    </div>
  );
}
