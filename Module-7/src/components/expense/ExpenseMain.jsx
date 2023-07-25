import classes from "./Expense.module.css";

const data = {
  title: `Your Expense`,
  image: `../asset/undraw_finance_re_gnv2.svg`,
  label: `You can Expense your money`,
  button: `expense to amount`,
};

const ExpenseMain = () => {
  const { title, label, button } = data;

  return (
    <div className={classes.incomeSec}>
      <div>
        <img src="./undraw_Finance_re_gnv2.png" alt="Finance" />
      </div>
      <div>
        <h1 className={classes.title}>{title}</h1>
        <h1 className={classes.title}> {0}</h1>
        <div className={classes.inputSec}>
          <label>{label}</label>
          <input type="number" />
          <button> {button} </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseMain;
