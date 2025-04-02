import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="h-screen bg-hero bg-cover bg-no-repeat relative flex items-center justify-center z-0">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative  max-w-5xl text-center font-cinzel-sans flex items-center justify-center flex-col gap-y-5">
        <h1 className="text-white">
          Dăm viață momentelor importante din viața ta!
        </h1>
        <Button size={"lg"} className="font-semibold">
          Contactează-ne
        </Button>
      </div>
    </div>
  );
};

export default Hero;
