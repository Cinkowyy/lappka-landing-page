import styles from "./Footer.module.scss";
import logo from "img/logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>© 2021 All rights reserved.</p>
      <img src={logo} alt="Łappka" className={styles.logo} />
      <div className={styles.links}>
        <a href="/">Regulamin</a>
        <a href="/">Polityka Prywatności</a>
      </div>
    </div>
  );
};

export default Footer;
