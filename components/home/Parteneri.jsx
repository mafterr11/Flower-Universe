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
    <div className="flex flex-col items-center justify-center pt-24 pb-[15rem] gap-y-32 max-md:gap-y-24 xl:w-[80%] mx-auto max-md:px-3">
      <h2 className="text-center">Partenerii noștri</h2>
      <div className="flex max-md:flex-col max-md:gap-y-12 items-center justify-between w-[65%]">
        {parteneri.map((partener, index) => (
          <a href={partener.link} key={index} target="_blank">
            <div className="relative max-md:w-[100px] max-md:h-[100px] w-[150px] h-[150px] ">
              <Image
                src={partener.img}
                alt={partener.alt}
                className="object-cover rounded-full"
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
