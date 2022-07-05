import styles from "./Hero.module.scss";
import phoneHome from "img/hero-phone-home.png";
import phoneMenu from "img/hero-phone-menu.png";
import phonePet from "img/hero-phone-pet.png";
import logo from "img/logo.svg";

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
      <h2 className={`heading ${styles.heading_hero}`}>
        Ł<span className="green_text">app</span>ka – pomóż zwierzakom za pomocą
        jednego kliknięcia!
      </h2>
      <p className={"grey_paragraph"}>
        Odpowiadamy na potrzeby bezbronnych zwierząt, ułatwiając ich adopcje
        oraz opiekowanie się nimi.
      </p>
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
