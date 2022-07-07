import styles from "./AboutCard.module.scss";

interface IAbout {
  headingText: string;
  paragraphText: string;
}

const AboutCard: React.FC<IAbout> = ({ headingText, paragraphText }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.about_heading}>{headingText}</h2>
      <p className={styles.about_paragraph}>{paragraphText}</p>
    </div>
  );
};

export default AboutCard;
