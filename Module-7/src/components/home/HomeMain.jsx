import classes from "./Home.module.css";
import image from "../../assets/undraw_digital_currency_qpak.svg";

const HomeMain = () => {
  return (
    <div>
      <h1 className={classes.h1}>Heyooooo, How's it going?</h1>

      <img className={classes.img} src={image} alt="Digital Currency" />
    </div>
  );
};

export default HomeMain;
