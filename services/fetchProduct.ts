import axios from 'axios';
import { TProduct } from '../utils/types';

axios.defaults.headers.common['X-Shopify-Access-Token'] =
  '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';

export async function fetchProduct(id: number) {
  try {
    const url = `https://neorictest.myshopify.com/admin/api/2022-10/products/${id}.json`;
    const { data } = (await axios.get(url)) as { data: { product: TProduct } };
    console.log('id ', id, 'data ', data);
    const { product } = data;
    return product;
  } catch (err) {
    console.log(err);
  }
}
