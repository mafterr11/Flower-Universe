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
    <div className="flex flex-col items-center justify-center pt-24 pb-[15rem] gap-y-32 xl:w-[80%] mx-auto max-md:px-3">
      <h2>Partenerii noștri</h2>
      <div className="flex items-center justify-between w-[65%]">
        {parteneri.map((partener, index) => (
          <a href={partener.link} key={index} target="_blank">
            <div className="relative max-md:w-[300px] max-md:h-[300px] w-[150px] h-[150px] ">
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
