export function formatPrice({
  amount,
  currencyCode = 'USD',
}: {
  amount: number;
  currencyCode: string;
}) {
  let prefix = '',
    postfix = '';
  switch (currencyCode) {
    case 'UAH':
      postfix = 'грн';
      break;
    case 'USD':
      prefix = '$';
      break;
    case 'EUR':
      prefix = '€';
      break;
    default:
      break;
  }

  const value = typeof amount === 'string' ? Number.parseFloat(amount) : amount;
  const formattedString = `${prefix}${Math.round(value * 100) / 100}${postfix}`;
  return formattedString;
}
