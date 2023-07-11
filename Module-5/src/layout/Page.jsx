import classes from "./Page.module.css";

const Page = ({ data }) => {
  const { title, clock, mainTitle, button, text } = data;
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.title}>{title}</h1>
      </header>
      <main className={classes.main}>
        <h3 className={classes.clock}>{clock}</h3>
        <h1>{mainTitle}</h1>
        <section className={classes.section}>
          <button className={classes.button}>{button}</button>
          <p>{text}</p>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Page;
