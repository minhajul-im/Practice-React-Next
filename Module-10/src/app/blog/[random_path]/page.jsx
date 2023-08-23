import Link from "next/link";

const RandomPath = () => {
  return (
    <div className="py-6 text-center">
      <p
        className="text-red-600 text-4xl
          uppercase bg-purple-200 px-4 my-8
         py-2 font-mono font-bold rounded-sm"
      >
        Data is not found 😢
      </p>

      <Link
        className="text-blue-700 py-4 underline text-xl font-bold"
        href="/blog"
      >
        back to blog
      </Link>
    </div>
  );
};

export default RandomPath;
