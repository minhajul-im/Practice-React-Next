import Image from "next/image";
import { starList } from "@/db/starsData";

const StarListSection = async () => {
  const stars = await starList();

  return (
    <section className="w-5/6 mx-auto flex justify-evenly py-10">
      {stars.map((star) => (
        <div
          key={star?.id}
          className="w-72 h-64 shadow-2xl flex flex-col items-center justify-center"
        >
          <Image
            className="m-4 p-6 rounded bg-green-100 shadow-md"
            src={star?.img}
            alt={star?.name}
            height={90}
            width={90}
          />

          <h3 className="text-2xl font-bold">{star?.count}</h3>
          <p className="text-sm pt-2 font-semibold">{star?.name}</p>
        </div>
      ))}
    </section>
  );
};

export default StarListSection;
