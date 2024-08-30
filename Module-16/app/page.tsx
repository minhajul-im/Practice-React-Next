import Link from "next/link";
import Particles from "@/components/particles";

const navigation = [
  { name: "Posts", href: "/posts" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />

      <div className="w-screen h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1 className="text-edge-outline animate-title py-3.5 px-0.5 z-10  text-transparent duration-1000 bg-white cursor-default text-5xl sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text font-extrabold">
        Minhajul Islam
      </h1>

      <div className="w-screen h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 flex items-center">
          ©2024 <span className="italic">minhaj</span>
        </h2>
      </div>
    </main>
  );
}
