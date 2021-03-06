import styles from "./Aspects.module.scss";
import AspectCard from "components/aspectCard/AspectCard";
import magnifier from "img/Icons/magnifier-icon.svg";
import petHouse from "img/Icons/pet-house-icon.svg";
import share from "img/Icons/share-icon.svg";
import heart from "img/Icons/heart-icon.svg";
import safetyRing from "img/Icons/safety-ring-icon.svg";
import eye from "img/Icons/eye-icon.svg";
import location from "img/Icons/location-icon.svg";
import emptyHeart from "img/Icons/empty-heart-icon.svg";
import Lappka from "components/lappka/Lappka";
import Heading from "components/heading/Heading";

interface IAspectCard {
  icon: string; //icon url
  paragraphText: string;
}

const aspectData: IAspectCard[] = [
  {
    icon: magnifier,
    paragraphText:
      "Wyszukiwanie zwierzaków w oparciu o Twoje preferencje co do ich typów (pies, kot, świnka morska itd.) oraz w wybranej lokalizacji (położenie schroniska względem Ciebie itp.)",
  },
  {
    icon: petHouse,
    paragraphText:
      "Podstawowe informacje na jego temat wszystkich zwierzaków, jak: odległość do schroniska, w którym przebywa, gatunek, maść, wiek, płeć, status sterylizacji oraz informacje o usposobieniu zwierzęcia",
  },
  {
    icon: share,
    paragraphText:
      "Możliwość udostępniania profili zwierzaków w mediach społecznościowych",
  },
  {
    icon: heart,
    paragraphText:
      "Cyfrowa książeczka zdrowia pupila, w której możesz aktywnie śledzić stan szczepień, wizyt u weterynarza, przepisywanych lekarstw, odbytych operacji oraz innych kwestii związanych ze zdrowiem pupila",
  },
  {
    icon: safetyRing,
    paragraphText:
      "Możliwość wyboru różnych wariantów wolontariatu, związanego z pomocą dla schronisk i zwierzaków",
  },
  {
    icon: eye,
    paragraphText:
      "Zgłaszanie zaginionych pupili, z możliwością korespondowania między członkami społeczności oraz możliwością udostępniania lokalizacji",
  },
  {
    icon: location,
    paragraphText:
      "Raportowanie błąkających się zwierząt wraz z możliwością udostępniania ich lokalizacji w aplikacji (informowanie schronisk i służb zajmujących się opuszczonymi zwierzętami)",
  },
  {
    icon: emptyHeart,
    paragraphText:
      "Możliwość zapisywania przeglądanych profili w kategorii „Ulubione”, tak aby w wygodny sposób przeglądać je później",
  },
];

const Aspects = () => {
  return (
    <div className={styles.aspects_container}>
      <Heading>
        Dlaczego <Lappka />?
      </Heading>
      <div className={styles.content_container}>
        {aspectData.map((aspect, index) => {
          return (
            <AspectCard
              key={`aspect-card-${index}`}
              icon={aspect.icon}
              paragraphText={aspect.paragraphText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Aspects;
