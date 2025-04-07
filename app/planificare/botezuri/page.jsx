import LayoutMagazin from "@/components/magazin/LayoutMagazin";
import Image from "next/image";
import React from "react";

const Botezuri = () => {
  return (
    <LayoutMagazin
      title={"Lasă-ne pe noi să ne ocupăm de botezul micuțului tău"}
      className={"xl:max-w-[90%]"}
    >
      <div className="mt-20 flex flex-col max-md:gap-y-5 gap-y-20 xl:items-center">
        {/* Image Section */}
        <div className="relative h-[400px] xl:w-1/2">
          <Image
            src="/planificare/botez.webp"
            alt="about section"
            fill
            className="object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="flex items-start justify-center xl:w-1/2 xl:px-8">
          <div className="flex flex-col gap-y-3">
            <h4 className="mb-6">Pentru viitorul nostru - copiii</h4>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> La Flower Universe,
              de peste 8 ani oferim aranjamente florale unice, din pasiune și cu
              respect pentru fiecare eveniment. Am început ca o mică afacere de
              familie și, chiar dacă suntem încă în creștere, ne bucurăm să fim
              o alegere apreciată de cei care își doresc un decor floral
              autentic și personalizat.
            </p>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> Fiecare comandă
              este pentru noi o oportunitate de a aduce un strop de natură și
              frumusețe într-un moment special. Nu suntem un brand imens, dar
              tocmai acest lucru ne permite să oferim o atenție deosebită
              detaliilor și să construim relații sincere și de durată cu
              clienții noștri.
            </p>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> Dacă visezi la un
              decor floral care să reflecte personalitatea și emoțiile tale,
              suntem aici să îți aducem viziunea la viață, cu grijă,
              creativitate și flori naturale de sezon.
            </p>
            <p className="text-start">
              <span className="text-accent text-xl">•</span> Pentru botezuri,
              punem accent pe crearea unui decor floral care să transmită
              bucurie și puritate, fără a încărca atmosfera. Fiecare colț este
              gândit cu grijă pentru a aduce un echilibru între eleganță și
              căldură, oferind o amprentă personală fiecărui eveniment. Ne dorim
              ca florile să devină parte din amintirile acestui moment unic,
              completând emoția unei zile pline de semnificație.
            </p>
          </div>
        </div>
      </div>
    </LayoutMagazin>
  );
};

export default Botezuri;
