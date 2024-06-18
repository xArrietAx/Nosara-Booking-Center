"use client";

import link from "@/config/links.json";
import { HiOutlineInformationCircle } from "@/utils/Icons";
import { SocialsList } from "@/Shared/SocialList";
import { FooterNav } from "./FooterNav";
import { Logo } from "@/Shared/Logo";
import Link from "next/link";
import { FooterBar } from "./FooterBar";

const widgetMenus = [
  {
    id: "5",
    title: "Pages",
    menus: [
      { href: link.Home, label: "Home" },
      { href: link.About, label: "About" },
      { href: link.Contact, label: "Contact us" },
    ],
  },
  {
    id: "1",
    title: "Rental",
    menus: [
      { href: link.AtvRental, label: "ATV" },
      { href: link.GolfCartRental, label: "Golf cart" },
      { href: link.CarRental, label: "Car" },
    ],
  },
  {
    id: "4",
    title: "Other pages",
    menus: [
      { href: link.VacationRentals, label: "Vacation rentals" },
      { href: link.Tours, label: "Tours" },
    ],
  },
];

export function Footer() {

  const renderWidgetMenuItem = (menu, index) => {
    return (
      <div key={index} className=" text-sm">
        <h2 className="font-semibold text-gray-700">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              { item.href ? <Link key={index} href={item.href} className="text-gray-500 hover:text-gray-700" > {item.label} </Link> : <span><HiOutlineInformationCircle className="relative -top-0.5 inline text-base" /> {item.label}</span> }
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
    <FooterNav />
      <footer >
        <div className="relative py-24 mt-32 lg:py-28 border-t border-gray-200">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-10">
          <div className="grid gap-6 col-span-3 max-[520px]:col-span-2  lg:col-span-1 lg:flex lg:flex-col">       
              <Logo />
              <SocialsList />
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
        </div>
        <FooterBar />
      </footer>
    </>
  );
};



