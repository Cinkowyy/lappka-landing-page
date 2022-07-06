import styles from "./Hero.module.scss";
import phoneHome from "img/hero-phone-home.png";
import phoneMenu from "img/hero-phone-menu.png";
import phonePet from "img/hero-phone-pet.png";
import logo from "img/logo.svg";
import apple from "img/Icons/apple-icon.svg";
import google from "img/Icons/google-icon.svg";
import Button from "components/Button/Button";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <HeroContent />
      <HeroImages />
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className={styles.hero_content}>
      <img src={logo} alt="Łappka" />
      <h2 className={`heading ${styles.hero_heading}`}>
        Ł<span className="green_text">app</span>ka – pomóż zwierzakom za pomocą
        jednego kliknięcia!
      </h2>
      <p className={`grey_paragraph ${styles.hero_paragraph}`}>
        Odpowiadamy na potrzeby bezbronnych zwierząt, ułatwiając ich adopcje
        oraz opiekowanie się nimi.
      </p>
      <div className={styles.buttons_wrapper}>
        <Button image={apple} textSmall="Download on the" textBig="App Store" />
        <Button image={google} textSmall="Get it on" textBig="Google Play" />
      </div>
    </div>
  );
};

const HeroImages = () => {
  return (
    <div className={styles.hero_images}>
      <div className={styles.hero_images__left}>
        <img src={phoneMenu} alt="" />
      </div>
      <div className={styles.hero_images__right}>
        <img src={phonePet} alt="" />
        <img src={phoneHome} alt="" />
      </div>
    </div>
  );
};

export default Hero;
