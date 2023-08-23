import fetchData from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";

const Card = async () => {
  const data = await fetchData("post-newest");

  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      {data.map((item, key) => (
        <Link
          href={`/blog/single-blog/${item?.id}`}
          key={key}
          className="border border-gray-100 
        rounded-md p-2"
        >
          <Image
            className="mx-auto rounded-md pb-4"
            src={item?.img}
            alt="tamim"
            height={200}
            width={300}
          />

          <h1 className="text-2xl my-2 whitespace-pre-line py-2">
            {item?.title}
          </h1>
          <p>{item?.short}</p>
        </Link>
      ))}
    </div>
  );
};

export default Card;
