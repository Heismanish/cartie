import { cartProducts } from "@/app/Types/types";
import { createContext, useContext } from "react";

// CONTEXT
type cartContextType = {
  cart: cartProducts[];
  updateCart: (
    id: number,
    title: string,
    image: string,
    quantity: number,
    price: string
  ) => void;
  deleteItem: (id: number) => void;
  checkoutAmount: number;
  // updateCheckout: (amount: number) => void;
};

const cartContextDefaultValues: cartContextType = {
  cart: [],
  updateCart: () => {},
  deleteItem: (id: number) => {},
  checkoutAmount: 0,
  // updateCheckout: () => {},
};

export const CartContext = createContext<cartContextType>(
  cartContextDefaultValues
);

export function useCart() {
  return useContext(CartContext);
}
