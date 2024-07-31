"use client";
import { cartProducts } from "@/app/Types/types";
import { ReactNode, useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<cartProducts[]>([]);
  const [checkoutAmount, setCheckAmount] = useState<number>(0);

  const updateCart = (
    id: number,
    title: string,
    image: string,
    quantity: number,
    price: string
  ) => {
    const index = cart.findIndex((product: cartProducts) => product.id === id);

    if (index !== -1) {
      const newCart = cart.map((product, i) => {
        setCheckAmount((a) => a + parseFloat(product.price));
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
      setCheckAmount((a) => a + parseFloat(productToAdd.price));

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
    checkoutAmount,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
}
