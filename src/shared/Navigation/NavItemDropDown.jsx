"use client"

import { Popover, Transition } from "@headlessui/react";
import { MdKeyboardArrowDown } from "@/icons/index";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { useState } from "react";
import Link from "next/link";

export function NavItemDropDown({ title, childs = [], titleLink }) {

  const [isShowing, setIsShowing] = useState(false);

  const pathname = usePathname()

  return (
    <Popover as="li" className="relative flex items-center" onMouseLeave={() => setIsShowing(false)} >
      <Popover.Button className="bg-hover flex items-center gap-1 px-5 py-2 rounded hover:text-dark" onMouseEnter={() => setIsShowing(true)}>
        { titleLink ? <Link href={titleLink}>{title}</Link> : <span>{title}</span> }
        <MdKeyboardArrowDown fontSize={22} />
      </Popover.Button>
      <Transition as={Fragment} show={isShowing} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" >
        <Popover.Panel className="absolute top-20 left-1/2 w-screen max-w-[16rem] border border-border rounded-lg bg-white -translate-x-1/2 transform sm:px-0">
          <ul className="p-3">
            {childs.map((e, i) => {

              const active = pathname === e.url

              return (
                <li key={i + Date + Math.random()} >
                  <Link href={e.url} className={`inline-block w-full py-2 cursor-pointer bg-hover ${ active ? "text-primary hover:bg-transparent" : "hover:text-dark" }`} onClick={() => setIsShowing(false)}>
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}