export default function LayoutMagazin({ title, description, children }) {
  return (
    <div className="mx-auto mb-44 flex max-w-5xl flex-col items-center px-4 pt-[12rem] text-center">
      <h1 className="text-4xl leading-8">{title}</h1>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      <div className="xl:mt-24">{children}</div>
    </div>
  );
}
