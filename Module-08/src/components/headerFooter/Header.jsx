import Search from "./Search";
import lwsImg from "../../assets/lws.svg";

export default function Header() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/">
          <img className="h-10" src={lwsImg} alt="Learn with Sumit" />
        </a>
        <Search />
      </div>
    </nav>
  );
}
