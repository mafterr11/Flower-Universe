import LayoutMagazin from "@/components/magazin/LayoutMagazin";
import Image from "next/image";
import React from "react";

const Nunti = () => {
  return (
    <LayoutMagazin
      title={"Despre nunțile organizate de noi"}
      className={"xl:max-w-[70%]"}
    >
      <div className="mt-20 flex max-md:flex-col max-md:gap-y-5">
        {/* Image Section */}
        <div className="relative h-[400px] xl:w-1/2">
          <Image
            src="/planificare/nunti.webp"
            alt="about section"
            fill
            className="object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="flex items-start justify-center xl:w-1/2 xl:px-8">
          <div className="flex flex-col gap-y-3">
            <h4 className="mb-6">Orice poveste de iubire are stilul ei</h4>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> Poate mereu ai
              visat la o nuntă la castel, cu o sală imensă, cu decor ca-n
              poveștile citite în copilărie sau poate-ți dorești o nuntă pe o
              pajiște, cu decor minimalist și o rochie lejeră, doar oameni
              apropiați și muzica voastră. Orice este posibil acum, există
              locuri pentru toate gusturile și pentru orice buget. Nimic nu mai
              e ”la modă”; la modă este fix ce-ți place și ce te face cu
              adevărat fericit/ă.
            </p>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> Noi ne ocupăm de
              decorurile florale, însă avem parteneri pentru orice alt serviciu
              necesar, de la planificarea evenimentului, până la elementele de
              papetărie.
            </p>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> Let the fun begin!
            </p>
          </div>
        </div>
      </div>
    </LayoutMagazin>
  );
};

export default Nunti;
