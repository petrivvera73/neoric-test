import axios from 'axios';
import { TProduct } from '../utils/types';

axios.defaults.headers.common['X-Shopify-Access-Token'] =
  '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';

export async function fetchProducts() {
  console.log('--fetching');
  try {
    const url =
      'https://neorictest.myshopify.com/admin/api/2022-10/products.json';
    const { data } = (await axios.get(url)) as {
      data: { products: TProduct[] };
    };
    const { products } = data;
    return products;
  } catch (err) {
    console.log('error');
  }
}
