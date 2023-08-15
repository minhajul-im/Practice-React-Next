import Link from "next/link";

const Page = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-5">WelCome</h1>
      <h2 className="text-4xl capitalize">Simple blog project</h2>
      <p className="my-4">
        I'm comfortable with CSS but I'm not comfortable with tailwindcss that's
        why I try to everyday use tailwindcss.
      </p>
      <Link
        className="my-5 text-blue-700 uppercase text-xl font-medium underline"
        href="/blogs"
      >
        go to blog
      </Link>
    </div>
  );
};

export default Page;
