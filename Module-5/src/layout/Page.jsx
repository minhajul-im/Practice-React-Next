import classes from "./Page.module.css";
import { useState, useEffect } from "react";

const Page = ({ data }) => {
  const { title, mainTitle, button } = data;

  // time function
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // input value
  const [text, setText] = useState("");
  const handelTextarea = (e) => {
    setText(e.target.value);
  };

  // button function
  const handelButton = () => {
    setText("");
  };

  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.title}>{title}</h1>
      </header>

      <main className={classes.main}>
        <h3 className={classes.clock}>{clock.toLocaleTimeString()}</h3>

        <h1 className={classes.mainHeader}>{mainTitle}</h1>

        <section className={classes.section}>
          <textarea
            className={classes.textarea}
            onChange={handelTextarea}
            value={text}
            cols="30"
            rows="5"
          ></textarea>

          <button onClick={handelButton} className={classes.button}>
            {button}
          </button>

          <p className={classes.text}>{text}</p>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Page;
