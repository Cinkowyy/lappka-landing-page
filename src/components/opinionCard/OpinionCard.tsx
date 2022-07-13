import styles from "./OpinionCard.module.scss";
import quote from "img/quote.svg";
import React from "react";
import classNames from "classnames";

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
  let cardClasses = classNames({
    [styles.card]: true,
    [styles.active]: order === 0 ? true : false,
    [styles.left]: order === 0 && slideDirection === "left" ? true : false,
    [styles.second]: order === -1 ? true : false,
    [styles.third]: order === -2 ? true : false,
    [styles.prevCard]: order > 0 ? true : false,
    [styles.nextCard]: order < -2 ? true : false,
  });

  return (
    <div className={cardClasses}>
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
