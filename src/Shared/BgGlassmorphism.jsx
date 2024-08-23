export function BgGlassmorphism() {
    return (
      <div className="absolute inset-x-0 lg:top-10 xl:top-40 min-h-0 pl-20 py-24 flex overflow-hidden z-0">
        <span className="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
      </div>
    );
  }