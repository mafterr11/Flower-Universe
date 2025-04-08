export default function LayoutMagazin({ title, description, children, className }) {
  return (
    <div className={`relative mx-auto mb-44 flex max-w-5xl flex-col items-center px-4 max-md:pt-[8.5rem] pt-[12rem] text-center text-white ${className}`}>
      {/* Decorative ornament */}
      <div className="bg-magazin pointer-events-none fixed inset-0 z-[-1] bg-cover bg-no-repeat bg-scroll md:bg-fixed">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <h1 className="text-4xl leading-8 max-w-4xl">{title}</h1>
      {description && <p className="mt-2">{description}</p>}
      <div className="xl:mt-24">{children}</div>
    </div>
  );
} 
