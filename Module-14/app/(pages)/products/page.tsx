import Link from "next/link";
import React from "react";
import { data } from "@/db/products";

const ProductsPage = () => {
  console.log(data.products[0].thumbnail);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold my-4">
        Photos of a lost guy
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.products.map(({ id, title, thumbnail }) => (
          <Link key={id} href={`/products/${id}`}>
            <img
              alt={title}
              src={thumbnail}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
