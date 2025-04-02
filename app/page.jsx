import About from "@/components/home/About";
import Cta from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Parteneri from "@/components/home/Parteneri";
import Servicii from "@/components/home/Servicii";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Servicii />
      <Parteneri />
      <Cta />
    </div>
  );
};

export default Home;
