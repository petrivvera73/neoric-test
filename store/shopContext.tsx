import React, { Component, ReactNode } from 'react';
import { TProduct, TVariant } from '../utils/types';
import { client } from './shopifyStore';

interface IShopContext {
  products: TProduct[];
  product: TProduct | {};
  checkout: { id?: number; lineItems?: TProduct[]; variant?: TVariant };
  isCartOpen: boolean;
  closeCart?: () => void;
  openCart?: () => void;
  addItemTocheckout?: (variantId: number, quantity: string) => void;
}

type TProps = {
  children: ReactNode;
};

const ShopContext = React.createContext<IShopContext>({
  products: [],
  product: {},
  checkout: {},
  isCartOpen: false,
});

class ShopProvider extends Component<TProps> {
  state: IShopContext = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };
  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }
  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem('checkout_id', `${checkout.id}`);
    this.setState({ checkout: checkout });
  };
  fetchCheckout = async (checkoutId: string) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };
  addItemTocheckout = async (variantId: number, quantity: string) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id as number,
      lineItemToAdd
    );
    this.setState({ checkout: checkout });
    console.log('added', checkout);
  };
  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };
  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemTocheckout: this.addItemTocheckout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}
const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
