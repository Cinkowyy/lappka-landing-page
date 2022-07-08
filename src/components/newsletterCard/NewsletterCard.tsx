import styles from "./NewsletterCard.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsletter_card}>
      <p className={styles.newsletter_text}>
        Chciałbyś włączyć się w naszą społeczność{" "}
        <span className={styles.text_bold}>„Łapkowców”</span> i być na bieżąco z
        najnowszymi informacjami?{" "}
      </p>

      <div className={styles.subscribe}>
        <p className={styles.subscribe_text}>
          Zapraszamy do zapisania się do naszego newslettera!
        </p>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            placeholder="Wpisz swój email"
            className={styles.subscribe_input}
          />
          <button className={styles.subscribe_button}>Subskrybuj</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
