export default function LayoutMagazin({ title, description, children }) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-[12rem] mb-44">
      <h1 className="text-4xl leading-8">{title}</h1>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      <div className="mt-24">{children}</div>
    </div>
  );
}
