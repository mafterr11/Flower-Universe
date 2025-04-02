import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Servicii from "@/components/home/Servicii";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Servicii />
    </div>
  );
};

export default Home;
