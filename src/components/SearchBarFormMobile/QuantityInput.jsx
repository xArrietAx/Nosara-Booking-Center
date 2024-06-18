export function QuantityInput({children, title}){
  return (
    <div className="flex flex-col relative p-5">
      <span className="mb-5 block font-semibold text-xl sm:text-2xl">
        {title}
      </span>
      {children}
    </div>
  );
};