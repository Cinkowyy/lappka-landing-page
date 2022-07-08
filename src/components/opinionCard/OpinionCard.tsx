import styles from "./OpinionCard.module.scss";
import quote from "img/quote.svg";

interface IOpinionCard {
  author: string;
  age: string;
  content: string;
}

const OpinionCard: React.FC<IOpinionCard> = ({ content, author, age }) => {
  return (
    <div className={styles.card}>
      <div className={styles.opinion}>
        <img src={quote} alt="" />
        <p className={`grey_paragraph ${styles.content}`}>{content}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.author_age}>{age}</p>
      </div>
    </div>
  );
};

export default OpinionCard;
