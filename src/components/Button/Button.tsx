import styles from "./Button.module.scss";

interface IButton {
  image: string; //Image URL
  textBig: string;
  textSmall: string;
}

const Button: React.FC<IButton> = ({ image, textSmall, textBig }) => {
  return (
    <button className={styles.button}>
      <img src={image} alt="icon" />
      <div className={styles.text_container}>
        <p className={`${styles.button_text} ${styles.text_small}`}>
          {textSmall}
        </p>
        <p className={`${styles.button_text} ${styles.text_big}`}>{textBig}</p>
      </div>
    </button>
  );
};

export default Button;
