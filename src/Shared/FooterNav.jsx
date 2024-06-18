"use client";

import { LuMountain, IoHomeOutline, IoCompassOutline } from "@/utils/Icons";
import React, { useEffect, useRef } from "react";
import isInViewport from "@/utils/isInViewport";
import { usePathname } from "next/navigation";
import link from "@/config/links.json";
import { MenuBar } from "./MenuBar";
import Link from "next/link";

let WIN_PREV_POSITION = 0;

if (typeof window !== "undefined") {
  WIN_PREV_POSITION = window.pageYOffset;
}

const NAV = [
  {
    name: "Home",
    link: link.Home,
    icon: <IoCompassOutline fontSize={19} />,
  },
  {
    name: "Stays",
    link: link.VacationRentals,
    icon: <IoHomeOutline fontSize={20} />,
  },
  {
    name: "Tours",
    link: link.Tours,
    icon: <LuMountain fontSize={20} />,
  },
  {
    name: "Menu",
    icon: <MenuBar size="text-xl" />,
  },
];

export function FooterNav() {
  const containerRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleEvent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEvent = () => {
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(showHideHeaderMenu);
    }
  };

  const showHideHeaderMenu = () => {
    // if (typeof window === "undefined" || window?.innerWidth >= 768) {
    //   return null;
    // }

    let currentScrollPos = window.pageYOffset;
    if (!containerRef.current) return;

    // SHOW _ HIDE MAIN MENU
    if (currentScrollPos > WIN_PREV_POSITION) {
      if (
        isInViewport(containerRef.current) &&
        currentScrollPos - WIN_PREV_POSITION < 80
      ) {
        return;
      }

      containerRef.current.classList.add("FooterNav--hide");
    } else {
      if (
        !isInViewport(containerRef.current) &&
        WIN_PREV_POSITION - currentScrollPos < 80
      ) {
        return;
      }
      containerRef.current.classList.remove("FooterNav--hide");
    }

    WIN_PREV_POSITION = currentScrollPos;
  };

  const renderItem = (item, index) => {
    const isActive = pathname === item.link;

    return item.link ? (
      <Link
        key={index}
        href={item.link}
        className={`flex flex-col items-center justify-between p-2 rounded-md text-gray-500 hover:bg-gray-50  ${
          isActive ? "text-gray-900" : ""
        }`}
      >
       <div className={isActive ? "text-green-500" : ""}>
       {item.icon}
       </div>
        <span
          className={`leading-none mt-1 ${
            isActive ? "text-green-500" : ""
          }`}
        >
          {item.name}
        </span>
      </Link>
    ) : (
      <div
        key={index}
        className={`relative flex flex-col items-center p-2 rounded-md text-gray-500 cursor-pointer hover:bg-gray-50 ${
          isActive ? "text-gray-900" : ""
        }`}
      >
         <div className={isActive ? "text-green-500" : ""}>
       {item.icon}
       </div>
        <span className="leading-none mt-1">{item.name}</span>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="FooterNav block md:!hidden p-2 bg-white fixed top-auto bottom-0 inset-x-0 z-30 border-t border-gray-300
      transition-transform duration-300 ease-in-out"
    >
      <div className="w-full max-w-lg flex justify-around mx-auto text-xs text-center ">
        {NAV.map(renderItem)}
      </div>
    </div>
  );
};