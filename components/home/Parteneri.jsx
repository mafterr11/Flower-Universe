import Image from "next/image";

const parteneri = [
  {
    img: "/parteneri/js.webp",
    alt: "JS partener nunti",
    link: "https://www.wedday.ro",
  },
  {
    img: "/parteneri/wedday.jpg",
    alt: "Wedday partener nunti",
    link: "https://www.wedday.ro",
  },
  {
    img: "/parteneri/foto.jpg",
    alt: "Fotograf partener nunti",
    link: "https://www.facebook.com/andreiromanfotograf",
  },
];
const Parteneri = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-y-32 pt-24 pb-[15rem] max-md:gap-y-24 max-md:px-3 xl:w-[80%]">
      <h2 className="text-center">Partenerii noștri</h2>
      <div className="flex w-[65%] items-center justify-between max-md:flex-col max-md:gap-y-12">
        {parteneri.map((partener, index) => (
          <a href={partener.link} key={index} target="_blank">
            <div className="relative h-[150px] w-[150px] max-md:h-[100px] max-md:w-[100px]">
              <Image
                src={partener.img}
                alt={partener.alt}
                className="rounded-full object-cover"
                fill
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Parteneri;
