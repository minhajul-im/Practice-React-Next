import { useState } from "react";
import classes from "./Content.module.css";
import Clock from "./clock/Clock";

const Content = ({ data }) => {
  const { mainTitle, button } = data;

  // input value
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
      <main className={classes.main}>
        <Clock />

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
    </div>
  );
};

export default Content;
