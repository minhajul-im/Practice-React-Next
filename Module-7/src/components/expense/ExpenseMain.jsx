import { useEffect, useState } from "react";
import classes from "./Expense.module.css";
import image from "../../assets/undraw_Finance_re_gnv2.png";

const data = {
  title: `Your Expense`,
  image: `../asset/undraw_finance_re_gnv2.svg`,
  label: `You can Expense your money`,
  button: `expense to amount`,
};

const ExpenseMain = () => {
  const [taka, setTaka] = useState(0);
  const [number, setNumber] = useState("");

  const { title, label, button } = data;

  return (
    <div className={classes.incomeSec}>
      <img className={classes.img} src={image} alt="Finance" />

      <div style={{ width: "100%" }}>
        <h1 className={classes.title}>{title}</h1>
        <h1 className={classes.title}> {taka}</h1>
        <div className={classes.inputSec}>
          <label>{label}</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button onClick={handleButton}> {button} </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseMain;
