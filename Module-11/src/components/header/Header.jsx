import Nav from "./Nav";
import Search from "./Search";
import Categories from "./Categories";

export default function Header() {
  return (
    <nav className='border-b border-black py-6 md:py-8'>
      <Nav>
        <Search></Search>
      </Nav>

      <Categories></Categories>
    </nav>
  );
}
