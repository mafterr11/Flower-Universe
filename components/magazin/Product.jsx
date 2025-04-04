import Link from "next/link";
import Image from "next/image";

export default function Product({
  title,
  price,
  description,
  images = [],
  cta,
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        {/* Left Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white p-2 shadow-sm">
          <Image
            src={images[0]}
            alt={`${title} - stânga`}
            fill
            className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Center Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white p-2 shadow-sm">
          <Image
            src={images[1]}
            alt={`${title} - centru`}
            fill
            className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white p-2 shadow-sm">
          <Image
            src={images[2]}
            alt={`${title} - dreapta`}
            fill
            className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Text Block */}
      <div className="mx-auto mt-6 max-w-4xl text-center">
        <h2 className="text-2xl tracking-wide uppercase">{title}</h2>
        <p className="mt-1 mb-3 text-base">
          {price} RON
          <span className="mx-auto mt-1 block h-[2px] w-3xl bg-gray-300"></span>
        </p>
        <p className="mb-3 leading-relaxed">{description}</p>
        {cta && (
          <Link
            href="/contact"
            className="bg-accent rounded-sm px-2 py-1 font-medium transition-all duration-300 ease-in-out hover:bg-[#a31c1cd8] hover:underline"
          >
            {cta}
          </Link>
        )}
      </div>
    </section>
  );
}
