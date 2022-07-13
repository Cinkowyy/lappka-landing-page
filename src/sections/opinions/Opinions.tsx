import Heading from "components/heading/Heading";
import Slider from "components/slider/Slider";
import styles from "./Opinions.module.scss";
import avatar1 from "img/avatar_1.png";
import avatar2 from "img/avatar_2.png";
import avatar3 from "img/avatar_3.png";
import avatar4 from "img/avatar_4.png";

const Opinions = () => {
  return (
    <div className={styles.opinions_container}>
      <Heading type="blue">Opinie</Heading>
      <Slider />
      <img
        className={`${styles.avatar} ${styles.left_bottom}`}
        src={avatar1}
        alt=""
      />
      <img
        className={`${styles.avatar} ${styles.right_bottom}`}
        src={avatar2}
        alt=""
      />
      <img
        className={`${styles.avatar} ${styles.right_top}`}
        src={avatar3}
        alt=""
      />
      <img
        className={`${styles.avatar} ${styles.left_top}`}
        src={avatar4}
        alt=""
      />
    </div>
  );
};

export default Opinions;
