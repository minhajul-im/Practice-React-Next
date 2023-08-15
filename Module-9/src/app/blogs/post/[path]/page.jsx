import data from "@/app/db/blogData.json";
import Image from "next/image";
import Link from "next/link";

const Path = ({ params }) => {
  const getId = params.path;

  // covert array to object
  const obj = data.reduce((acc, cur) => {
    acc[cur.id] = {
      ...cur,
    };
    return acc;
  }, {});

  // check path id and object key
  const getPostId = Object.keys(obj).find((id) => id == getId);

  // get post
  const post = obj[getPostId];

  return (
    <div>
      <Image
        className="my-4 mx-auto"
        src={post?.img}
        alt="blog_img"
        height={130}
        width={390}
      />
      <h2 className="text-3xl capitalize space-y-6 my-5 py-4 text-center">
        {post?.title[post?.title.length - 1] === "."
          ? post?.title
          : post?.title + "."}
      </h2>

      <p className="my-4 text-xl space-x-2">
        {post?.body[post?.body.length - 1] === "."
          ? post?.body
          : post?.body + "."}
        <br />
        <br />
        <br />
        {post?.body[post?.body.length - 1] === "."
          ? post?.body
          : post?.body + "."}
        <br />
        <br />
        <br />
        {post?.body[post?.body.length - 1] === "."
          ? post?.body
          : post?.body + "."}
        <br />
        <br />
        <br />
        {post?.body[post?.body.length - 1] === "."
          ? post?.body
          : post?.body + "."}
        <br />
        <br />
        <br />
        {post?.body[post?.body.length - 1] === "."
          ? post?.body
          : post?.body + "."}
      </p>

      <div className=" flex justify-between items-baseline capitalize font-semibold text-xs my-5 text-blue-600">
        <Link className="" href="/blogs">
          back to blogs
        </Link>

        <div className="flex gap-x-4">
          <Link href={`/blogs/post/${parseInt(getId) - 1}`}>previous</Link>
          <Link href={`/blogs/post/${parseInt(getId) + 1}`}>next</Link>
        </div>
      </div>
    </div>
  );
};

export default Path;
