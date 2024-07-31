"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ProductType } from "@/app/Types/types";
import { useCart } from "@/lib/CartProvider";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { cart, updateCart } = useCart();

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const products = await response.json();
    console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  mt-8 px-6 ">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-scroll flex flex-col  sm:flex-row items-start py-2 w-full"
          >
            <CardHeader className="sm:max-w-[260px] sm:min-w-[200px] max-h-[400px] min-h-[300px] w-full flex  justify-center ">
              <Image
                src={product.image}
                alt={`${product} images`}
                width={200}
                height={400}
                className="flex justify-center w-full h-[300px] md:h-auto"
              ></Image>
            </CardHeader>

            <CardContent className="flex flex-col py-3 gap-4">
              <CardTitle className="font-semibold leading-snug">
                {product.title}
              </CardTitle>
              <CardDescription className="flex overflow-scroll h-16 scroll-pt-1">
                {product.description}
              </CardDescription>
              <CardFooter className="p-0 font-semibold ">
                ${product.price}
              </CardFooter>

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
              >
                Add to Cart
              </Button>
              <Button onClick={() => {}}>Buy Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductsList;
