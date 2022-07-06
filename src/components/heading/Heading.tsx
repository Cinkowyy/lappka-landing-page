import styles from "./Heading.module.scss";

interface IHeading {
  text: any;
}

const Heading: React.FC<IHeading> = ({ text }) => {
  return <h2 className={styles.heading}>{text}</h2>;
};

export default Heading;
