import Image from "next/image";

const servicii = [
  {
    img: "/servicii/buchete.webp",
    titlu: "Buchete de flori",
  },
  {
    img: "/servicii/decor.webp",
    titlu: "Decor Floral Personalizat",
  },
  {
    img: "/servicii/design.webp",
    titlu: "Designul invitațiilor si al meniurilor",
  },
];
const Servicii = () => {
  return (
    <div className="relative bg-[#ac3333]">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex flex-col items-center justify-center gap-y-24 py-[8rem] text-white">
        <h2>Ne ocupăm de tot</h2>
        <div className="flex items-center justify-center gap-24 max-md:flex-col">
          {servicii.map((serviciu, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-y-4"
            >
              <div className="relative h-[400px] w-[400px] max-md:h-[300px] max-md:w-[300px]">
                <Image
                  src={serviciu.img}
                  alt={serviciu.titlu}
                  className="rounded-full object-cover"
                  fill
                />
              </div>
              <h3 className="max-w-sm text-center text-xl font-semibold">
                {serviciu.titlu}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicii;
