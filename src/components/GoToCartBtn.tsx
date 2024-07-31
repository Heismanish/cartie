"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const GoToCartBtn = () => {
  const router = usePathname();

  if (router === "/cart") {
    return null;
  }

  return (
    <Link href={"/cart"}>
      <Button>
        <ShoppingCart></ShoppingCart>
        <span className="ml-3"> Go to cart </span>
      </Button>
    </Link>
  );
};

export default GoToCartBtn;
