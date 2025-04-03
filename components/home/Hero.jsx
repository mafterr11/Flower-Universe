import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="bg-hero relative z-0 flex h-screen items-center justify-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black/20" />
      <div className="font-cinzel-sans relative flex max-w-5xl flex-col items-center justify-center gap-y-5 text-center">
        <h1 className="text-white">
          Dăm viață momentelor importante din viața ta!
        </h1>
        <a href="tel:0756805732">
          <Button size={"lg"} className="font-semibold">
            0756.805.732
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
