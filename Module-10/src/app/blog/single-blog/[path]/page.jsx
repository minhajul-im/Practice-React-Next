import Image from "next/image";
import fetchData from "@/utils/fetchData";
import Link from "next/link";

const Page = async ({ params }) => {
  const data = await fetchData(`post-details/${params.path}`);

  return (
    <div>
      <Image
        alt="image"
        src={data?.postDetails?.img}
        height={400}
        width={1100}
      />
      <h1 className="text-6xl py-6">{data?.postDetails?.title}</h1>

      <p className="text-xl py-4">{data?.postDetails?.content}</p>

      <div className="text-xs font-semibold py-5 text-blue-700 underline flex gap-8 items-center">
        <Link href="/blog">back to blog</Link>
        <Link href="/">back to home</Link>
      </div>
    </div>
  );
};

export default Page;
