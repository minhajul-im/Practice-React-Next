import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Bangladesh</h1>
      <div className=" flex gap-6 text-red-500 justify-center">
        <Link href={"/register"}>register</Link>
        <Link href={"/login"}>login</Link>
        <Link href={"/dashboard"}>dashboard</Link>
      </div>
    </div>
  );
}
