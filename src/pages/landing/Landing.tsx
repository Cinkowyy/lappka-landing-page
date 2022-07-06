import About from "sections/about/About";
import Aspects from "sections/aspects/Aspects";
import Hero from "sections/hero/Hero";
import HowTo from "sections/howTo/HowTo";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Aspects />
      <HowTo />
    </>
  );
};

export default Landing;
