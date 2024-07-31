"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../../../lib/CartProvider";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MinusIcon, PlusIcon, Trash } from "lucide-react";

const Cart = () => {
  const { cart, updateCart, deleteItem } = useCart();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((p) => {
      sum += parseInt(p.price) * p.quantity;
    });

    setTotal(sum);
  }, [cart]);

  return (
    <>
      <h1 className="  text-accent-foreground text-2xl font-normal my-2">
        Welcome to your cart:
      </h1>
      <section className="border-secondary-foreground border-t-2 border-b-2 min-h-[120px]  h-full w-full ">
        {cart.length == 0 && (
          <p className="text-center h-full min-h-full font"> </p>
        )}
        {cart.map((product) => (
          <Card
            key={product.id}
            className="overflow-scroll flex flex-row items-start py-2 w-full  border-none shadow-none mb-1 border border-b-2"
          >
            <CardHeader className="sm:max-w-[100px] md:max-w-[140px]  w-full flex  justify-center ">
              <Image
                src={product.image}
                alt={`${product} images`}
                width={100}
                height={150}
                className="flex justify-center w-full "
              />
            </CardHeader>

            <CardContent className="flex flex-col gap-6 py-4 w-full">
              <CardTitle className="font-semibold leading-snug flex justify-between gap-3 md:gap-8 w-full">
                <p className="">{product.title}</p>
                <span className="text-"> ${product.price}</span>
              </CardTitle>
              <CardFooter className="p-0 font-semibold flex gap-4">
                <Button
                  onClick={() => {
                    updateCart(
                      product.id,
                      product.title,
                      product.image,
                      -1,
                      product.price
                    );
                  }}
                  variant={"outline"}
                  className="p-1"
                >
                  <MinusIcon></MinusIcon>
                </Button>
                <p>{product.quantity}</p>
                <Button
                  onClick={() => {
                    updateCart(
                      product.id,
                      product.title,
                      product.image,
                      1,
                      product.price
                    );
                  }}
                  variant={"outline"}
                  className="p-1"
                >
                  <PlusIcon></PlusIcon>
                </Button>

                <Button
                  onClick={() => {
                    deleteItem(product.id);
                  }}
                  variant={"secondary"}
                >
                  <Trash></Trash>
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-right text-lg font-medium my-4">
        Total: <span className="ml-2">${total}</span>
      </section>
    </>
  );
};

export default Cart;
