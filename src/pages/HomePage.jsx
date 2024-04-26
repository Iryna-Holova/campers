import { useEffect } from 'react';
import { scrollToTop } from 'helpers/scrolls';
import AboutUs from 'components/Home/AboutUs/AboutUs';
import Advantages from 'components/Home/Advantages/Advantages';
import CallToAction from 'components/Home/CallToAction/CallToAction';
import Hero from 'components/Home/Hero/Hero';
import Services from 'components/Home/Services/Services';

const HomePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Hero />
      <AboutUs />
      <Advantages />
      <CallToAction />
      <Services />
    </>
  );
};

export default HomePage;
