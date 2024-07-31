"use client";
import { ProductType } from "@/app/Types/types";
import { ReactNode, useState } from "react";
import { createContext, useContext } from "react";

// CONTEXT
type cartProducts = {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: string;
};

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
};

const cartContextDefaultValues: cartContextType = {
  cart: [],
  updateCart: () => {},
  deleteItem: (id: number) => {},
};

const CartContext = createContext<cartContextType>(cartContextDefaultValues);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<cartProducts[]>([]);

  const updateCart = (
    id: number,
    title: string,
    image: string,
    quantity: number,
    price: string
  ) => {
    // console.log(id, title, quantity, price);
    const index = cart.findIndex((product: cartProducts) => product.id === id);

    if (index !== -1) {
      const newCart = cart.map((product, i) => {
        return i === index
          ? { ...product, quantity: product.quantity + quantity }
          : product;
      });

      const filteredCart = newCart.filter((p) => p.quantity !== 0);

      setCart(filteredCart);
    } else {
      const productToAdd: cartProducts = {
        id: id,
        title: title,
        image: image,
        quantity: 1,
        price: price,
      };

      setCart((cart) => [...cart, productToAdd]);
    }
  };

  const deleteItem = (id: number) => {
    const newCart = cart.filter((p) => p.id !== id);
    setCart(newCart);
  };

  const value = {
    cart,
    updateCart,
    deleteItem,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
}
