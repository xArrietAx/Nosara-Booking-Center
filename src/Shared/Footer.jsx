import { HiOutlineInformationCircle } from "@/icons/index";
import { SocialsList } from "../components/SocialList";
import menu from "@/config/menu.json";
import { Logo } from "./Logo";
import Link from "next/link";

export function Footer() {

    const renderWidgetMenuItem = (menu, index) => {
        return (
          <div key={index} className="text-sm">
            <span className="font-semibold text-dark">
              {menu.title}
            </span>
            <ul className="mt-5 space-y-4">
              {menu.menus.map((item, index) => (
                <li key={index}>
                  { item.url ? <Link key={index} href={item.url} className="hover:text-dark" > {item.name} </Link> : <span><HiOutlineInformationCircle className="relative -top-0.5 inline text-base" /> {item.label}</span> }
                </li>
              ))}
            </ul>
          </div>
        );
      };

    return <footer >
    <div className="relative py-24 mt-32 lg:py-28 border-t border-border">
    <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-10">
      <div className="grid gap-6 col-span-3 max-[520px]:col-span-2  lg:col-span-1 lg:flex lg:flex-col">       
          <Logo />
          <SocialsList />
      </div>
      {menu.footer.map(renderWidgetMenuItem)}
    </div>
    </div>
  </footer>
}