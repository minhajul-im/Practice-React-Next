import { data } from "@/db/products";
import ProductModal from "@/components/ProductModal";

interface PropsParams {
  params: {
    product: string | number;
  };
}

const ProductOfModal = ({ params }: PropsParams) => {
  const product = data.products.find(
    (item) => item.id.toString() === params.product.toString()
  );

  return (
    <ProductModal>
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
    </ProductModal>
  );
};

export default ProductOfModal;
