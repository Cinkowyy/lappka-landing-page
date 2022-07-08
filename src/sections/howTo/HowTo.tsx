import styles from "./HowTo.module.scss";
import phonesImage from "img/phones.png";
import Heading from "components/heading/Heading";

const HowTo = () => {
  return (
    <div className={styles.howTo_container}>
      <div className={styles.howTo_content}>
        <Heading>Podaj swoją łapkę zwierzakom!</Heading>
        <p className={`grey_paragraph ${styles.howTo_paragraph}`}>
          Misja, która przyświeca Łappce, związana jest z chęcią niesienia
          pomocy zwierzakom oraz całej społeczności, dla której losy bezbronnych
          zwierząt nie są obojętne. Osób chcących pomagać jest wiele. Czasami
          jednak warunki oraz indywidualne możliwości utrudniają adoptowanie
          pupili. Postanowiliśmy wyjść naprzeciw tym potrzebom oraz znacznie
          usprawnić całość procesu. Dzięki Łappce przygarnianie samotnych psów,
          kotów i innych zwierząt domowych będzie tak proste, jak kilka kliknięć
          w telefonie. Aplikacja ułatwi także znajdowanie zaginionych pupili,
          dzięki wymianie informacji pomiędzy członkami społeczności. Dodatkowo,
          każdy użytkownik będzie mógł w niej prowadzić kartę zdrowia swojego
          ukochanego zwierzaka.
          <span className={styles.paragraphBold}>
            Razem możemy pomóc jeszcze większej ilości zwierząt <br />w
            potrzebie!
          </span>
        </p>
      </div>
      <div className={styles.howTo_image_container}>
        <img src={phonesImage} alt="Phones" />
      </div>
    </div>
  );
};

export default HowTo;
