import Link from "next/link";

const Random = ({ params }) => {
  return (
    <div className="my-10 text-center">
      <h1 className="text-4xl uppercase py-16">
        wrong path
        <span className="text-red-800 bg-green-600 px-4 py-2 bold rounded-sm">
          {params.random}
        </span>
      </h1>
      <Link className="text-blue-700 text-2xl underline " href="/">
        go to home
      </Link>
    </div>
  );
};

export default Random;
