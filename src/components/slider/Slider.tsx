import styles from "./Slider.module.scss";
import OpinionCard from "components/opinionCard/OpinionCard";
import { useState } from "react";

interface IOpinionCard {
  author: string;
  age: string;
  content: string;
}

const opinionsData: IOpinionCard[] = [
  {
    content:
      "Dzięki Łappce bardzo szybko odnalazłam moją ukochaną Calineczkę. Uciekła mi z domu nad ranem i nie mogłam jej dogonić. Zrozpaczona szybko udostępniłam wiadomość o tym w Łappce. Już wieczorem odezwał się do mnie inny użytkownik, mówiąc, że Calineczka jest u niego w ogrodzie. Jakieś 15 minut później już jechałyśmy razem do domu. Cudowna aplikacja!",
    author: "Malwina",
    age: "32 lata",
  },
  {
    content:
      "Już do jakiegoś czasu myślałam o adopcji pieska. Niestety nigdy nie miałam czasu, żeby pojechać do schroniska i znaleźć mojego nowego ukochanego 😊 dzięki Łappce wybrałam Diego, który znajdował się w schronisku blisko mnie. Wystarczyło założenie konta i kilka kliknięć. Teraz jesteśmy z Diegiem w domu i za nic nie zrozumiem dlaczego ten slodziak był w schronisku. Jeśli ktoś myśli o adopcji gorąco polecam Łappkę!",
    author: "Kunegunda",
    age: "19 lat",
  },
  {
    content:
      "Dla mnie to fantastyczna aplikacja, bo znalazłam tam moją Jessy. To ok 8 miesięczna kicia, która przejechała się pod maską samochodu i była poparzona. Była też mocno wychudzona. Kiedy kicia trochę wydobrzała, zabrałam ją do domu. I mam cudowną, mruczącą przyjaciółkę 😊",
    author: "Joanna",
    age: "23 lata",
  },
  {
    content:
      "Dzięki Łappce bardzo szybko odnalazłam moją ukochaną Calineczkę. Uciekła mi z domu nad ranem i nie mogłam jej dogonić. Zrozpaczona szybko udostępniłam wiadomość o tym w Łappce. Już wieczorem odezwał się do mnie inny użytkownik, mówiąc, że Calineczka jest u niego w ogrodzie. Jakieś 15 minut później już jechałyśmy razem do domu. Cudowna aplikacja!",
    author: "Malwina",
    age: "32 lata",
  },
  {
    content:
      "Już do jakiegoś czasu myślałam o adopcji pieska. Niestety nigdy nie miałam czasu, żeby pojechać do schroniska i znaleźć mojego nowego ukochanego 😊 dzięki Łappce wybrałam Diego, który znajdował się w schronisku blisko mnie. Wystarczyło założenie konta i kilka kliknięć. Teraz jesteśmy z Diegiem w domu i za nic nie zrozumiem dlaczego ten slodziak był w schronisku. Jeśli ktoś myśli o adopcji gorąco polecam Łappkę!",
    author: "Kunegunda",
    age: "19 lat",
  },
  {
    content:
      "Dla mnie to fantastyczna aplikacja, bo znalazłam tam moją Jessy. To ok 8 miesięczna kicia, która przejechała się pod maską samochodu i była poparzona. Była też mocno wychudzona. Kiedy kicia trochę wydobrzała, zabrałam ją do domu. I mam cudowną, mruczącą przyjaciółkę 😊",
    author: "Joanna",
    age: "23 lata",
  },
];

const Slider = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const dataLength = opinionsData.length;

  const handleNextCard = () => {
    if (currentCard >= dataLength - 1) return;

    setCurrentCard((prevCard) => prevCard + 1);
  };

  const handlePrevCard = () => {
    if (currentCard <= 0) return;

    setCurrentCard((prevCard) => prevCard - 1);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.opinions_container}>
        {opinionsData.map((opinion, index) => {
          return (
            <OpinionCard
              key={index}
              content={opinion.content}
              author={opinion.author}
              age={opinion.age}
              order={currentCard - index}
            />
          );
        })}
      </div>
      <div className={styles.arrows}>
        <button onClick={() => handlePrevCard()}>
          <div
            className={`${styles.arrow} ${styles.arrow_left} ${
              currentCard > 0 ? styles.active_arrow : null
            }`}
          ></div>
        </button>
        <button onClick={() => handleNextCard()}>
          <div
            className={`${styles.arrow} ${styles.arrow_right} ${
              currentCard < dataLength - 1 ? styles.active_arrow : null
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Slider;
