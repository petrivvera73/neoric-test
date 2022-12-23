export function formatPrice({
  price,
  prefix = '',
  postfix = '€',
}: {
  price: string | number;
  prefix?: string;
  postfix?: string;
}) {
  const value = typeof price === 'string' ? Number.parseFloat(price) : price;
  const formattedString = `${prefix}${Math.round(value * 100) / 100}${postfix}`;
  return formattedString;
}
