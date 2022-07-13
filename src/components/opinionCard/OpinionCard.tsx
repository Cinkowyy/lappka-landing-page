import styles from "./OpinionCard.module.scss";
import quote from "img/quote.svg";
import React from "react";

interface IOpinionCard {
  author: string;
  age: string;
  content: string;
  order: number;
  slideDirection: "left" | "right";
}

const OpinionCard: React.FC<IOpinionCard> = ({
  content,
  author,
  age,
  order,
  slideDirection,
}) => {
  return (
    <div
      className={`${styles.card} ${order === 0 ? styles.active : ""} ${
        order === 0 && slideDirection === "left" ? styles.prev : ""
      } ${order === -1 ? styles.second : ""} ${
        order === -2 ? styles.third : ""
      } ${order > 0 ? styles.prevCard : ""} ${
        order < -2 ? styles.nextCard : ""
      }`}
    >
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
