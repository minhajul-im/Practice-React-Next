import { data } from "@/db/products";
import Image from "next/image";
import Link from "next/link";

interface PropsParams {
  params: {
    product: string | number;
  };
}

const ProductPage = ({ params }: PropsParams) => {
  const product = data.products.find(
    (item) => item.id.toString() === params.product.toString()
  );

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">
            {product?.title}
          </h1>
        </div>
        <img
          alt={product?.title}
          src={product?.thumbnail}
          className="w-full object-cover aspect-square "
        />
      </div>

      <Link
        className="text-center block underline text-blue-700 font-semibold mt-8"
        href={"/products"}
      >
        back to products
      </Link>
    </div>
  );
};

export default ProductPage;
