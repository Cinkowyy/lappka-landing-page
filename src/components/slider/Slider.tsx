import styles from "./Slider.module.scss";
import OpinionCard from "components/opinionCard/OpinionCard";
import { useRef, useState } from "react";

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
];

const dataLength:number = opinionsData.length;

const Slider = () => {
  const currentCard = useRef(1)
  const [opinions, setOpinions] = useState<IOpinionCard[]>(opinionsData);

  const handleNextCard = () => {
    if(currentCard.current>=dataLength) return
    
    
    currentCard.current += 1;
    const newOpinions = opinionsData.filter((opinion, index) => {
      return index>=currentCard.current-1
    })
    
    setOpinions(newOpinions);
  };

  const handlePrevCard = () => {
    if(currentCard.current<= 1) return
    
    currentCard.current -= 1;
    const newOpinions = opinionsData.filter((opinion, index) => {
      return index>=currentCard.current-1
    })

    
    
    setOpinions(newOpinions);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.opinions_container}>
        {opinions.map((opinion, index) => {
          return (
            <OpinionCard
              key={index}
              content={opinion.content}
              author={opinion.author}
              age={opinion.age}
            />
          );
        })}
      </div>
      <div className={styles.arrows}>
        <div
          className={`${styles.arrow_left} ${currentCard.current>1?styles.active_arrow:null}`}
          onClick={() => handlePrevCard()}
        ></div>
        <div
          className={`${styles.arrow_right} ${currentCard.current<dataLength?styles.active_arrow:null}`}
          onClick={() => handleNextCard()}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
