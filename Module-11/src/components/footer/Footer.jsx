import Subscribe from "./Subscribe";
import TarmsCondition from "./TarmsCondition";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
      <div className="container mx-auto">
        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <TarmsCondition />

          <Subscribe />
        </div>
      </div>
      <div className="container mt-6 lg:mt-12">
        <p className="text-center">Copyright &copy;2023 | News Feed</p>
      </div>
    </footer>
  );
}
