import { useState } from "react";
import classes from "./Income.module.css";

const data = {
  title: `Your Income`,
  image: `../asset/undraw_finance_re_gnv2.svg`,
  label: `Please add your amount`,
  button: `Add to account`,
};

const IncomeMain = () => {
  const [addTaka, setAddTaka] = useState(0);
  const [taka, setTaka] = useState(0);

  const handleInput = (e) => {
    setTaka(e.target.value);
  };

  const handleButton = () => {
    const totalTaka = new Function(`return ${addTaka}+${taka}`);
    setAddTaka(totalTaka());
    setTaka(0);
  };
  const { title, label, button } = data;

  return (
    <div className={classes.incomeSec}>
      <div>
        <img src="./undraw_Finance_re_gnv2.png" alt="Finance" />
      </div>
      <div>
        <h1 className={classes.title}>{title}</h1>

        <h1 className={classes.title}> {addTaka}</h1>

        <div className={classes.inputSec}>
          <label>{label}</label>
          <input type="number" value={taka} onChange={handleInput} />
          <button onClick={handleButton}> {button} </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeMain;
