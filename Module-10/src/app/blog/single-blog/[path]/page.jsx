import Image from "next/image";
import fetchData from "@/utils/fetchData";
import Link from "next/link";

const Page = async ({ params }) => {
  const data = await fetchData(`post-details/${params.path}`);
  const details = data.postDetails;

  return (
    <div>
      <Image alt="image" src={details.img} height={400} width={1100} />

      {/* time */}
      <p className="italic py-4 text-gray-600 text-right">
        {`date:${details?.created_at?.slice(0, 10)} | 
            time:${details?.created_at?.slice(11, 19)}${
          details?.id.toString() % 2 === 1 ? "am" : "pm"
        }`}
      </p>

      {/* title  */}
      <h1 className="text-6xl py-6">{details.title}</h1>

      {/* content  */}
      <p className="text-xl py-4">{details.content}</p>

      <br />

      {/* content  */}
      <p className="text-xl py-4">{details.content}</p>

      {/* back button  */}
      <div
        className="text-xs font-semibold py-5
       text-blue-700 underline flex gap-8 items-center"
      >
        <Link href="/blog">back to blog</Link>
        <Link href="/">back to home</Link>
      </div>
    </div>
  );
};

export default Page;
