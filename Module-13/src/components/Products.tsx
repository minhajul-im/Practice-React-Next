import Product, { ProductType } from "./Product";
import { useEffect, useRef, useState } from "react";
type SingleProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
const productsPerPage = 12;
const Products = () => {
  const [products, setProducts] = useState<SingleProduct[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          page * productsPerPage
        }`
      );
      const data = await response.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onIntersection = (items: IntersectionObserverEntry[]) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div className="w-8/12 mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-600 py-4">
        Hello Here is all products
      </h1>
      <div className="flex gap-4 flex-wrap mx-auto w-full mt-5">
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {hasMore && <div ref={loaderRef}>Loading more products...</div>}
    </div>
  );
};

export default Products;
