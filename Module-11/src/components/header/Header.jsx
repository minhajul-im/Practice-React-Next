import Date from "./Date";
import Logo from "./Logo";
import Dark from "./Dark";
import Search from "./Search";
import Categories from "./Categories";

export default function Header() {
  return (
    <nav className='border-b border-black py-2'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center gap-6'>
          <Date />
          <Logo />
        </div>
        <div className='flex items-center gap-4'>
          <Search />
          <Dark />
        </div>
      </div>

      <Categories />
    </nav>
  );
}
