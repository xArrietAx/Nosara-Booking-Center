"use client";

import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { Logo } from "./Logo";

export function Nav() {

  function CloseDrawer(e) {
    const drawer = document.getElementById("my-drawer");
    drawer.checked = false;
  }

  return (
    <nav>
      <ul className="flex font-medium text-gray-700 text-[15px] lg:hidden">
        <li>
          <Link className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100" href={"/"}>Home</Link>
        </li>
        <li>
          <Link className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100" href={"/Services"}>Services</Link>
        </li>
        <li>
          <Link className="py-3 px-5 rounded-md cursor-pointer hover:bg-gray-100" href={"/ContactUs"}>Contact us</Link>
        </li>
      </ul>

      <div className="drawer z-50 hidden lg:block">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" aria-label="toggle sidebar">
            <HiMenuAlt2 fontSize={"40px"} />
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />

          <ul className="p-4 w-80 min-h-full bg-base-200 text-base-content sm:w-72">
            <li className="w-full my-4">
              <div className="w-28 mx-auto">
              <Logo />
              </div>
            </li>

            <li>
              <Link className="inline-block w-full px-3 py-5 rounded-md cursor-pointer hover:bg-gray-200" href={"/"} onClick={CloseDrawer}>
                Home
              </Link>
            </li>

            <li>
              <Link className="inline-block w-full px-3 py-5 rounded-md cursor-pointer hover:bg-gray-200" href={"/Services"} onClick={CloseDrawer}>
                Services
              </Link>
            </li>

            <li>
              <Link className="inline-block w-full px-3 py-5 rounded-md cursor-pointer hover:bg-gray-200" href={"/ContactUs"} onClick={CloseDrawer}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
