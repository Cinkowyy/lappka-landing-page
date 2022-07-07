import styles from "./AspectCard.module.scss";

interface IAspect {
  icon: string;
  paragraphText: string;
}

const AspectCard: React.FC<IAspect> = ({ icon, paragraphText }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="icon" />
      <p className="grey_paragraph">{paragraphText}</p>
    </div>
  );
};

export default AspectCard;
