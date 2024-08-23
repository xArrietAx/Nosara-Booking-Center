import { MenuBar } from "./Navigation/MenuBar";
import { Nav } from "./Navigation/Nav";
import { Logo } from "./Logo";

export function Header2() {
  return (
    <header className={`relative z-10`}>
      <div className="relative flex items-center justify-between gap-10 h-20 px-4 lg:container">
        <div className="space-x-4 flex flex-1 justify-start h-full">
          <Logo className="w-32 lg:w-36" />
          <Nav />
        </div>
        <MenuBar />
      </div>
    </header>
  );
}
