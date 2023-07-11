import classes from "./Footer.module.css";

const Footer = ({ data }) => {
  const { social } = data;
  return (
    <div>
      <footer className={classes.footer}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <a className={classes.a} href="#">
              {social}
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href="#">
              {social}
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href="#">
              {social}
            </a>
          </li>
        </ul>
        <p className={classes.copy}> &copy;copyright by minhaj</p>
      </footer>
    </div>
  );
};

export default Footer;
