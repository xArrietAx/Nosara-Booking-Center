import { NavItemDropDown } from "./NavItemDropDown";
import menu from "@/config/menu.json";
import { NavItem } from "./NavItem";

export function Nav() {
  return (
    <nav className="z-50 hidden h-full lg:block">
      <ul className="flex h-full">
        {menu.main.map((item, i) => {
          if (item?.hasChildren) return <NavItemDropDown key={i + Date.now() + Math.random} title={item.name} childs={item.children} />;
          return <NavItem item={item} key={i + Date.now() + Math.random} />
        })}
      </ul>
    </nav>
  ); 
}