import Link from "next/link";

const Path = ({ params }) => {
  return (
    <div className="py-6 text-center">
      <h1 className="text-4xl uppercase py-16">
        wrong path
        <span
          className="text-red-600 bg-slate-50 px-4
         py-2 font-mono font-bold rounded-sm"
        >
          {params.path}
        </span>
      </h1>
      <Link
        className="text-blue-700 
      text-2xl py-4 underline"
        href="/blog"
      >
        back to blog
      </Link>
    </div>
  );
};

export default Path;
