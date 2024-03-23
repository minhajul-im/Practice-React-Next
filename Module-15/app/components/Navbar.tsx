import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="font-semibold flex gap-4 p-4">
        <li>
          <CustomLink path="/">Home</CustomLink>{" "}
        </li>
        <li>
          <CustomLink path="/settings">Settings</CustomLink>
        </li>
        <li>
          <CustomLink path="/profile">Profile</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
