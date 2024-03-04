import { Nav } from "./Nav";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="container flex items-center justify-between py-7 md:py-5">
      <Logo />
      <Nav />
    </header>
  );
};
