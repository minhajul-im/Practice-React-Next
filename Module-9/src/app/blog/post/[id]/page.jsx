import data from "@/app/db/blogData.json";

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
      <h1>Single post </h1>
      <h1>
        {post?.body[post?.body.length - 1] === "."
          ? post?.body
          : post?.body + "."}
      </h1>
    </div>
  );
};

export default Id;
