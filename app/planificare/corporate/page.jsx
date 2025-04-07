import LayoutMagazin from "@/components/magazin/LayoutMagazin";
import Image from "next/image";
import React from "react";

const Corporate = () => {
  return (
    <LayoutMagazin
      title={"Evenimentele corporate - eleganță și profesionalism"}
      className={"xl:max-w-[78%]"}
    >
      <div className="mt-20 flex max-md:flex-col max-md:gap-y-5">
        {/* Image Section */}
        <div className="relative h-[400px] xl:w-1/2">
          <Image
            src="/planificare/corporate.webp"
            alt="about section"
            fill
            className="object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="flex items-start justify-center xl:w-1/2 xl:px-8">
          <div className="flex flex-col gap-y-3">
            <p className="text-start">
              <span className="text-accent text-xl">•</span> La Flower Universe,
              știm că evenimentele corporate sunt decât simple întâlniri și
              discursuri - sunt despre imagine, atenție la detalii și crearea
              unui mediu plăcut care să inspire și să impresioneze. De aceea, ne
              asigurăm că decorurile florale pe care le realizăm reflectă
              perfect profesionalismul și valorile companiei tale.
            </p>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> Indiferent că este
              vorba despre o conferință, o gală, un cocktail sau o lansare de
              produs, ne adaptăm stilul și aranjamentele florale pentru a
              completa atmosfera și a adăuga acel strop de eleganță care face
              diferența. Decorăm locația, mesele, zonele de primire și orice alt
              spațiu pentru a crea un cadru plăcut, care să stimuleze
              creativitatea și să ofere o experiență memorabilă pentru toți
              participanții.
            </p>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> Fiecare eveniment
              este unic, iar noi suntem aici să îți oferim soluții
              personalizate, care să reflecte imaginea și viziunea companiei
              tale.
            </p>
          </div>
        </div>
      </div>
    </LayoutMagazin>
  );
};

export default Corporate;
