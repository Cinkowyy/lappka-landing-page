import Heading from "components/heading/Heading";
import Slider from "components/slider/Slider";
import styles from "./Opinions.module.scss";

const Opinions = () => {
  return (
    <div className={styles.opinions_container}>
      <Heading type="blue">Opinie</Heading>
      <Slider />
    </div>
  );
};

export default Opinions;
