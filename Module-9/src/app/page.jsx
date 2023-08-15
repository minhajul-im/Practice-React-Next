import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-5">WelCome</h1>
      <h2 className="text-4xl capitalize pb-8 text-blue-200">
        Simple blog project
      </h2>

      <Link
        className="py-10 text-blue-700 uppercase
        text-xl font-medium underline"
        href="/blogs"
      >
        go to blogs
      </Link>
      <Image
        className="mt-10 mx-auto py-10"
        src="/undraw_around_the_world_re_rb1p.svg"
        alt="world"
        height={180}
        width={300}
      />
      <p className="my-4 py-8">
        I&apos;m comfortable with CSS but I&apos;m not comfortable with
        tailwindcss <br />
        that&apos;s why I try to everyday use tailwindcss.
      </p>

      <i className="pt-20 text-blue-300">&nbsp;copyright by minhaj</i>
    </div>
  );
};

export default Page;
