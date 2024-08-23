export function BgSection({ className = "bg-secondary", children }) {
  return (
    <section className="relative py-16">
      <div
        className={`absolute inset-y-0 w-screen xl:max-w-[1330px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${className}`}
      />
      {children}
    </section>
  );
}
