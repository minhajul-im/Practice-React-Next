import Image from "next/image";
import { getApiCalledFunc } from "@/utilities/getApiCalledFunc";

const BrandsLogo = async () => {
  const brands = await getApiCalledFunc("BrandList");
  return (
    <section>
      <div className="bg-white">
        <div className="w-5/6 mx-auto flex items-center justify-evenly my-10">
          {brands.map((brand) => (
            <Image
              className="py-6"
              key={brand.id}
              src={brand.image}
              alt={brand.name}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
      <div className="h-10 bg-green-100"></div>
    </section>
  );
};

export default BrandsLogo;
