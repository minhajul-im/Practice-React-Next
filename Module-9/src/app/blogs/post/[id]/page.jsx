import data from "@/app/db/blogData.json";
import Image from "next/image";

const Id = ({ params }) => {
  const getId = params.id;

  const obj = data.reduce((acc, cur) => {
    acc[cur.id] = {
      ...cur,
    };
    return acc;
  }, {});

  const arr = Object.keys(obj);

  const find = (id) => arr.find((num) => num == id);

  const num = find(getId);

  const post = obj[num];

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
    </div>
  );
};

export default Id;
