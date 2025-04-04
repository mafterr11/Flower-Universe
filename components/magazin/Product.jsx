"use client";
import { useState } from "react";
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
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-md bg-white p-2 shadow-sm"
            onClick={() => openLightbox(src)}
          >
            <Image
              src={src}
              alt={`${title} - imagine ${idx + 1}`}
              fill
              className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Text Block */}
      <div className="mx-auto mt-6 max-w-4xl text-center">
        <h2 className="text-2xl tracking-wide uppercase">{title}</h2>
        <p className="mt-1 mb-3 text-lg font-bold">
          {price} RON
          <span className="mx-auto mt-1 block h-[2px] w-3xl bg-gray-300"></span>
        </p>
        <p className="mb-3 leading-relaxed">{description}</p>
        {cta && (
          <Button className="bg-accent rounded-sm px-2 py-1 font-medium transition-all duration-300 ease-in-out hover:scale-95 hover:bg-red-800 hover:underline">
            <Link href="/contact">{cta}</Link>
          </Button>
        )}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div
          className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={closeLightbox}
        >
          <div className="relative h-[60vh] w-[60vw] max-w-4xl">
            <Image
              src={lightboxImage}
              alt="Preview"
              fill
              quality={100}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
