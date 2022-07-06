import AboutCard from "components/aboutCard/AboutCard";
import styles from "./About.module.scss";

interface IAboutCard {
  headingText: string;
  paragraphText: string;
}

const cardsContent: IAboutCard[] = [
  {
    headingText: "Zaadoptuj idealnego zwierzaka",
    paragraphText:
      "Dzięki Łappce dużo łatwiej zaadaptujesz samotne zwierzaki. Znalezienie i wybranie Twojego nowego pupila są teraz jeszcze łatwiejsze – możesz to zrobić nie wychodząc z domu!",
  },
  {
    headingText: "Wybierz idealny wolontariat",
    paragraphText:
      "Korzystając z Łappki wejdziesz do społeczności osób, którym nie jest obojętny los zwierzaków. Razem możemy pomóc jeszcze większej ilości opuszczonych zwierzaków.",
  },
  {
    headingText: "Zadbaj o swojego pupila",
    paragraphText:
      "Oprócz adoptowania samotnych zwierząt, możesz również w niej prowadzić dokumentację medyczną swojego pupila i kontaktować się z innymi użytkownikami.",
  },
  {
    headingText: "Odnajdź ukochaną zgubę",
    paragraphText:
      "Czy zdarzyło ci się kiedyś, że Twój ukochany pies albo kot uciekł lub zniknął? Niestety zdarza się to dość często. Dlatego postanowiliśmy wykorzystać działanie Łappki oraz życzliwość społeczności, do wspólnego rozwiązywania takich problemów!",
  },
];

const About = () => {
  return (
    <div className={styles.about_container}>
      <h2 className={`heading`}>O naszej aplikacji</h2>
      <div className={styles.content_container}>
        {cardsContent.map((card) => {
          return (
            <AboutCard
              headingText={card.headingText}
              paragraphText={card.paragraphText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
