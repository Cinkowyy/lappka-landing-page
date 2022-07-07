import styles from "./Heading.module.scss";

interface IHeading {
  children: React.ReactNode;
  type?: "primary" | "blue";
}

const Heading: React.FC<IHeading> = ({ children, type }) => {
  return (
    <h2
      className={`${styles.heading} ${
        type !== undefined ? styles[type] : null
      }`}
    >
      {children}
    </h2>
  );
};

export default Heading;
