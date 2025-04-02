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
    <div className=" bg-servicii bg-cover bg-no-repeat relative">
      <div className="bg-black/40 inset-0 absolute" />
      <div className="relative flex flex-col items-center justify-center gap-y-24 text-white py-[10rem]">
        <h2>Ne ocupăm de tot</h2>
        <div className="flex items-center justify-center gap-x-24">
          {servicii.map((serviciu, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-y-4"
            >
              <div className="relative w-[400px] h-[400px] ">
                <Image
                  src={serviciu.img}
                  alt={serviciu.titlu}
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <h3 className="font-semibold text-xl max-w-sm text-center">
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
