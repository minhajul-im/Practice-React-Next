import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Product, { ProductType } from "./Product";

type QueryKey = string[];

const fetchData = async ({ queryKey }: { queryKey: QueryKey }) => {
  const response = await axios.get(`http://localhost:8000/${queryKey}`);
  return response.data;
};

export default function Products() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  if (isLoading) return <h1>FETCHING DATA...</h1>;
  if (isError) return <h1>ERROR!{error.message}</h1>;

  return (
    <div className="flex flex-col items-center w-6/12 mx-auto bg-cyan-100/45">
      <h1 className="text-3xl font-bold text-center font-mono py-4 text-gray-600 underline">
        All Products
      </h1>

      {products.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
