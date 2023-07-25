import { useEffect, useState } from "react";
import classes from "./Income.module.css";
import image from "../../assets/undraw_savings_re_eq4w.svg";

const data = {
  title: `Your Income`,
  image: `../asset/undraw_finance_re_gnv2.svg`,
  label: `Please add your amount`,
  button: `Add to account`,
};

const IncomeMain = () => {
  const [taka, setTaka] = useState(0);
  const [inputAmount, setInputAmount] = useState("");

  const handleInput = (e) => {
    setInputAmount(e.target.value);
  };
  useEffect(() => {
    window.localStorage.setItem("taka", taka);
  }, [taka]);

  const handleButton = () => {
    if (isNaN(inputAmount)) {
      alert("Please Provide Number");
      setInputAmount("");
      return;
    }
    const inputTK = parseFloat(inputAmount);
    setTaka((p) => p + inputTK);
    setInputAmount("");
  };

  const { title, label, button } = data;

  return (
    <div className={classes.incomeSec}>
      <img className={classes.img} src={image} alt="Finance" />

      <div style={{ width: "100%" }}>
        <h1 className={classes.title}>{title}</h1>

        <h1 className={classes.title}> ৳ {taka} /- </h1>

        <div className={classes.inputSec}>
          <label>{label}</label>
          <input type="text" value={inputAmount} onChange={handleInput} />
          <button onClick={handleButton}> {button} </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeMain;
