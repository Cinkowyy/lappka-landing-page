import styles from "./Heading.module.scss";

interface IHeading {
  children: React.ReactNode;
  type?: "default" | "primary" | "blue";
}

const Heading: React.FC<IHeading> = ({ children, type = "default" }) => {
  return <h2 className={`${styles.heading} ${styles[type]}`}>{children}</h2>;
};

export default Heading;
