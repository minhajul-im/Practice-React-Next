import classes from "./Header.module.css";

const Header = (data) => {
  const { title } = data;

  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.title}>{title}</h1>
      </header>
    </div>
  );
};

export default Header;
