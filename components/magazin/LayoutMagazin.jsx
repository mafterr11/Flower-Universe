export default function LayoutMagazin({
  title,
  description,
  children,
  className,
}) {
  return (
    <div className="bg-magazin relative bg-cover bg-scroll bg-no-repeat md:bg-fixed">
      <div className="absolute inset-0 bg-black/30" />

      <div
        className={`relative mx-auto flex max-w-5xl flex-col items-center px-4 pt-[12rem] text-center text-white max-md:pt-[8.5rem] ${className}`}
      >
        {/* Decorative ornament */}

        <h1 className="max-w-4xl text-4xl leading-8">{title}</h1>
        {description && <p className="mt-2">{description}</p>}
        <div className="xl:mt-24">{children}</div>
      </div>
    </div>
  );
}
