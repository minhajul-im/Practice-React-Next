import Link from "next/link";

const RandomPath = ({ params }) => {
  return (
    <div className="login_register_style">
      <h1 className="text-4xl uppercase py-16">
        wrong path
        <span
          className="text-red-600 bg-slate-50 px-4
         py-2 font-mono font-bold rounded-sm"
        >
          {params.random_path}
        </span>
      </h1>
      <Link className="text-blue-700 text-2xl py-4 underline " href="/">
        back to home
      </Link>
    </div>
  );
};

export default RandomPath;
