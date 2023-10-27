import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const router = useRouteError();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-red-800 text-4xl font-mono font-bold py-3">
        {router?.status} !!!!! {router.statusText}
      </h1>

      <h1 className="text-red-600 text-2xl font-mono font-bold">Ooppsssss</h1>
      <h1 className="text-red-600 text-xl font-mono font-bold">
        Something is wrong!
      </h1>
      <Link className="text-blue-600 underline" to={"/"}>
        back to home
      </Link>
    </div>
  );
};

export default Error;
