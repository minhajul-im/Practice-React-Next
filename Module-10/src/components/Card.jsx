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
          className="border border-gray-100 rounded-md p-2"
        >
          {/* image */}
          <Image
            className="mx-auto rounded-md pb-4"
            src={item?.img}
            alt="tamim"
            height={200}
            width={300}
          />

          {/* time  */}
          <code className="italic py-4 text-gray-600 text-xs">
            {`date:${item?.created_at.slice(0, 10)} | 
            time:${item?.created_at.slice(11, 19)}${
              item?.id.toString() % 2 === 1 ? "am" : "pm"
            }`}
          </code>

          {/* title  */}
          <h1 className="text-2xl my-2 whitespace-pre-line py-2">
            {item?.title}
          </h1>

          {/* description text  */}
          <p>{item?.short}</p>
        </Link>
      ))}
    </div>
  );
};

export default Card;
