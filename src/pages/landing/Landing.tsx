import About from "sections/about/About";
import Aspects from "sections/aspects/Aspects";
import Hero from "sections/hero/Hero";
import HowTo from "sections/howTo/HowTo";
import Newsletter from "sections/newsletter/Newsletter";
import Opinions from "sections/opinions/Opinions";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Aspects />
      <HowTo />
      <Opinions />
      <Newsletter />
    </>
  );
};

export default Landing;
