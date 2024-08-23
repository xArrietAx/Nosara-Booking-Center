import { Nav } from "./Navigation/Nav";
import { MenuBar } from "./MenuBar";
import { Logo } from "./Logo";

export function Header() {
  return <header className={`relative z-10`}>
  <div className="relative flex items-center justify-between gap-10 h-20 px-4 lg:container">

    <div className="h-full space-x-4 hidden flex-1 justify-start md:flex">
      <Logo className="w-32 lg:w-36" />
      <Nav />
    </div>

    <div className="flex flex-[3] max-w-lg !mx-auto md:px-3 lg:hidden">
      <div className="flex-1">
        {/* <SearchBarMobile /> */}
      </div>
    </div>

    <div className="hidden flex-shrink-0 flex-[0.5] justify-end lg:flex-none md:flex">
      <MenuBar />
    </div>

  </div>
</header>
}
