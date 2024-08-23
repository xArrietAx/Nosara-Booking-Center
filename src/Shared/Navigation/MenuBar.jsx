"use client"

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMenu } from "@/icons/index";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import('./Menu'), { ssr: false })

export function MenuBar({ size = "text-[2rem]" }){

  const [isVisable, setIsVisable] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsVisable(false);
  }, [pathname]);

  const handleOpenMenu = () => {
    setIsVisable(true);
  }
  const handleCloseMenu = () => {
    setIsVisable(false);
  }

  return (
    <>
      <button onClick={handleOpenMenu} className={`flex items-center justify-center rounded-lg text-dark focus:outline-none lg:hidden ${size}`} aria-label="Open menu" >
        <IoMenu />
      </button>
      <Menu isVisable={isVisable} handleCloseMenu={handleCloseMenu} />
    </>
  );
};