import { Link } from "react-router-dom";
import classes from "./Layout.module.css";

// generate random id
function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const getId = generateId();
// list item data
const lists = [
  {
    id: getId.next().value,
    name: "home",
    path: "/",
  },
  {
    id: getId.next().value,
    name: "income",
    path: "/income",
  },
  {
    id: getId.next().value,
    name: "expense",
    path: "/expense",
  },
  {
    id: getId.next().value,
    name: "login",
    path: "/login",
  },
];

const Layout = (props) => {
  const location = window.location.pathname;
  console.log(location);

  return (
    <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <h3 className={classes.title}>Wallet Assignment</h3>

          <ul className={classes.ul}>
            {lists.map((list) => (
              <li key={list?.id}>
                <Link
                  className={
                    location === list.path ? classes.active : classes.link
                  }
                  to={list?.path}
                >
                  {list?.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={classes.main}>{props.children}</main>

      <footer className={classes.footer}>
        <p>&copy;copyright by minhaj</p>
      </footer>
    </div>
  );
};

export default Layout;
