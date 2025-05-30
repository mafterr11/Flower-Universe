import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-y-32 pt-24 pb-[15rem] max-md:px-3 xl:w-[80%]">
      {" "}
      {/* Set a height */}
      <h2>Despre noi</h2>
      <div className="flex max-md:flex-col max-md:gap-y-5 max-md:text-center text-balance">
        {/* Image Section */}
        <div className="relative h-[500px] xl:w-1/2">
          <Image
            src="/about.webp"
            alt="about section"
            fill
            className="object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="flex items-start justify-center xl:w-1/2 xl:px-8">
          <div className="flex flex-col gap-y-2">
            <p className="text-lg">
              <span className="text-accent text-xl">•</span> Dragilor, vă urez
              să aveți parte de începuturi pline de reușite și de bucurii
              zilnice! Cu această ocazie, vreau să vă povestesc puțin despre
              Flower Universe și activitatea care ne aduce mai aproape de voi,
              creând momente speciale pentru evenimente importante.
            </p>
            <p>
              <span className="text-accent text-xl">•</span> La Flower Universe,
              realizăm decoruri florale personalizate pentru nunți, botezuri,
              evenimente corporate și alte ocazii private care merită să fie
              marcate cu stil. Folosim doar flori naturale, alese cu grijă în
              funcție de sezon, pentru a oferi autenticitate și eleganță
              fiecărui eveniment.
            </p>
            <p>
              <span className="text-accent text-xl">•</span> Pe lângă decorurile
              florale, oferim și buchete de flori excepționale pe comandă,
              fiecare creat cu atenție la detalii, pentru a aduce un strop de
              frumusețe și emoție în viața de zi cu zi.
            </p>
            <p>
              <span className="text-accent text-xl">•</span> Ne concentrăm pe
              autenticitate și pe relația directă cu fiecare client, fără
              promisiuni exagerate - doar flori frumoase și aranjamente care
              reflectă personalitatea și preferințele tale. Suntem aici să
              transformăm orice moment important într-o experiență memorabilă.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
