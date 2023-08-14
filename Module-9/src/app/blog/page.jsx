// "use client";
import data from "@/app/db/blogData.json";
import Link from "next/link";

const Blog = async () => {
  return (
    <div>
      <h1>Hello Blog</h1>
      {data.map((item) => (
        <Link key={item?.id} href={`/blog/post/${item.id}`}>
          <h2 className="text-3xl capitalize space-y-6">
            {item?.title[item?.title.length - 1] === "."
              ? item?.title
              : item?.title + "."}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
