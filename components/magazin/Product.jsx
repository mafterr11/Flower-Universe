"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Product({
  title,
  price,
  description,
  images = [],
  cta,
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-16 pb-20 overflow-x-hidden">
      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.slice(0, 3).map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-square w-full overflow-hidden rounded-md bg-white p-2 shadow-sm"
          >
            <Image
              src={src}
              alt={`${title} - imagine ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Text Block */}
      <div className="mx-auto mt-8 max-w-3xl text-center px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase">
          {title}
        </h2>

        <p className="mt-2 text-xl sm:text-2xl font-bold ">
          {price} RON
        </p>

        <div className="mx-auto my-4 h-[2px] w-20 bg-gray-300" />

        <p className="text-base sm:text-lg leading-relaxed">
          {description}
        </p>

        {cta && (
          <div className="mt-6">
            <Button className="bg-accent rounded-sm px-4 py-2 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:scale-95 hover:bg-red-800 hover:underline cursor-pointer">
              <Link href="/contact">{cta}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
