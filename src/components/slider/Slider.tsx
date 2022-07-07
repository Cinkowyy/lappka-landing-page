import styles from "./Slider.module.scss";
import quote from "img/quote.svg";
import arrowLeft from "img/arrow-left.svg";
import arrowRight from "img/arrow-right.svg";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.opinion}>
        <img src={quote} alt="" />
        <p className={`grey_paragraph ${styles.content}`}>
          Dzięki Łappce bardzo szybko odnalazłam moją ukochaną Calineczkę.
          Uciekła mi z domu nad ranem i nie mogłam jej dogonić. Zrozpaczona
          szybko udostępniłam wiadomość o tym w Łappce. Już wieczorem odezwał
          się do mnie inny użytkownik, mówiąc, że Calineczka jest u niego w
          ogrodzie. Jakieś 15 minut później już jechałyśmy razem do domu.
          Cudowna aplikacja!
        </p>
        <p className={styles.author}>Malwina</p>
        <p className={styles.author_age}>32 lata</p>
      </div>

      <div className={styles.arrows}>
        <img src={arrowLeft} alt="prev" />
        <img src={arrowRight} alt="next" />
      </div>
    </div>
  );
};

export default Slider;
