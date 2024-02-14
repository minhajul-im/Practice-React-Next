import Date from "./Date";
import Logo from "./Logo";
import Search from "./Search";
import Categories from "./Categories";
import Dark from "./Dark";

export default function Header() {
  return (
    <nav className='border-b border-black py-6 md:py-8'>
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-6'>
        <div className='flex items-center gap-6'>
          <Date />
          <Logo />
        </div>

        <Dark />

        <Search />
      </div>

      <Categories />
    </nav>
  );
}
