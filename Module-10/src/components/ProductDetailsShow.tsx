import DetailsOfProduct from "./DetailsOfProduct";
import { useProductContext } from "../hooks/useProductContext";
import { TypeOfContext } from "../context/ProductContext";

export default function ProductDetailsShow() {
  const { id } = useProductContext() as TypeOfContext;

  return (
    <div className="bg-slate-300 w-3/12 flex flex-col items-center">
      <h1 className="text-3xl font-bold font-mono py-4 text-teal-400 underline">
        Product Details
      </h1>
      {id && <DetailsOfProduct id={id} />}
    </div>
  );
}
