"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/CartContext";
import Link from "next/link";
import React from "react";

const Checkout = () => {
  const { cart, checkoutAmount } = useCart();

  return (
    <div className="flex flex-col items-center justify-center w-full mt-4 sm:mt-12 gap-4">
      <h1 className="font-bold text-2xl  text-primary mb-4 uppercase">
        Order summary
      </h1>
      {cart.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center w-full max-w-[560px] min-w-[320px] gap-6  border-b-2 pb-2"
        >
          <h1 className="font-semibold text-accent-foreground">{p.title}</h1>
          <h1 className=" font-semibold w-10 text-center">
            {"X "}
            <span className="text-primary font-bold">{p.quantity}</span>
          </h1>
        </div>
      ))}
      <h1 className="font-semibold text-xl">
        Checkout amount :{" "}
        <span className="font-bold">${checkoutAmount.toFixed(2)}</span>
      </h1>
      <Button>
        {" "}
        <Link href="/" className="text-lg">
          Pay{" "}
        </Link>
      </Button>
    </div>
  );
};

export default Checkout;
