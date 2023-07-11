import classes from "./Page.module.css";
import { useState, useEffect } from "react";

const Page = ({ data }) => {
  // get data
  const { title, mainTitle, button, linkedin, github, facebook } = data;

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

  // textarea value
  const [output, setOutput] = useState("");
  const [text, setText] = useState("");

  const handelTextarea = (e) => {
    setText(e.target.value);
  };

  // button function
  const handelButton = () => {
    setOutput(text);
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

          <p className={classes.text}>{output}</p>
        </section>
      </main>

      <footer className={classes.footer}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <a className={classes.a} href={linkedin.at(0)}>
              {linkedin.at(1)}
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href={github.at(0)}>
              {github.at(1)}
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href={facebook.at(0)}>
              {facebook.at(1)}
            </a>
          </li>
        </ul>
        <p className={classes.copy}> &copy;copyright by minhaj</p>
      </footer>
    </div>
  );
};

export default Page;
