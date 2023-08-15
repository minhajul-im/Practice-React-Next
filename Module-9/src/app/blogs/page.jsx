import data from "@/app/db/blogData.json";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  return (
    <div>
      <h1 className="text-center my-4 py-3 font-bold text-4xl">All Blogs</h1>
      {data.map((item) => (
        <Link
          className="flex my-4 p-4 rounded border border-gray-200 gap-x-4"
          key={item?.id}
          href={`/blogs/post/${item.id}`}
        >
          <Image src={item?.img} alt="blog_img" height={150} width={150} />
          <div>
            <h2 className="text-3xl capitalize space-y-6">
              {item?.title[item?.title.length - 1] === "."
                ? item?.title
                : item?.title + "."}
            </h2>
            <p className="mt-2">{item?.des}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
