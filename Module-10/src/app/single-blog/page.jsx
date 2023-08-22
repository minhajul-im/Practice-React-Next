import fetchData from "@/utils/fetchData";
import Image from "next/image";

const Page = async () => {
  const data = await fetchData("post-details/53");
  console.log(data);
  return (
    <div>
      <div>
        <Image
          alt="image"
          src={data?.postDetails?.img}
          height={400}
          width={1100}
        />
        <h1 className="text-6xl py-6">{data?.postDetails?.title}</h1>
        <p className="text-xl py-4">{data?.postDetails?.content}</p>
      </div>
    </div>
  );
};

export default Page;
