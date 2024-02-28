import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import Product, { ProductType } from "./Product";

type QueryKey = [string, number | string, number | string];

const fetchData = async ({ queryKey }: { queryKey: QueryKey }) => {
  const response = await axios.get(
    `http://localhost:8000/${queryKey[0]}?_page=${queryKey[1]}&_per_page=${queryKey[2]}`
  );
  return response.data;
};

export default function Products() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", page, 6],
    queryFn: fetchData,
  });

  if (isLoading) return <h1>FETCHING DATA...</h1>;
  if (isError) return <h1>ERROR!{error.message}</h1>;

  return (
    <div className="w-6/12 mx-auto bg-cyan-100">
      <h1 className="text-3xl font-bold text-center font-mono py-4 text-gray-600 underline">
        All Products
      </h1>

      <div className="grid grid-cols-3 mx-auto">
        {data.data.map((product: ProductType) => (
          <div key={product.id} className="col-span-1 mx-auto">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
