import classes from "./Footer.module.css";

const Footer = ({ data }) => {
  const { linkedin, github, facebook } = data;

  return (
    <div>
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

export default Footer;
