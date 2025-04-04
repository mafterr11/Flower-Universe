export default function LayoutMagazin({ title, description, children }) {
  return (
    <div className="relative mx-auto mb-44 flex max-w-5xl flex-col items-center px-4 pt-[12rem] text-center text-white">
      {/* Decorative ornament */}
      <div className="bg-hero pointer-events-none fixed inset-0 z-[-1] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <h1 className="text-4xl leading-8">{title}</h1>
      {description && <p className="mt-2">{description}</p>}
      <div className="xl:mt-24">{children}</div>
    </div>
  );
}
