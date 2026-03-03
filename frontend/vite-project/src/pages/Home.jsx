import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Facilities from "../components/Facilities";
import QuoteStrip from "../components/QuoteStrip";


const Home = () => {
  return (
    <>
      <Hero />
      <QuoteStrip />
      <WhyChoose />
      <Services />
      <Testimonials />
      <Facilities />
    </>
  );
};

export default Home;