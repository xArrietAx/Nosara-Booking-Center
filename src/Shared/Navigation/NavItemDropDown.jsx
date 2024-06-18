import { Popover, Transition } from "@headlessui/react";
import { MdKeyboardArrowDown } from "@/utils/Icons";
import { Fragment } from "react";
import { useState } from "react";
import Link from "next/link";

export function NavItemDropDown({ title, childs = [], titleLink }) {

  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover as="li" className="relative flex items-center hover:text-gray-900" onMouseLeave={() => setIsShowing(false)} >
      <Popover.Button className="flex items-center gap-1 px-4 py-2 rounded-3xl hover:bg-gray-50" onMouseEnter={() => setIsShowing(true)}>
        { titleLink ? <Link href={titleLink}>{title}</Link> : <span>{title}</span> }
        <MdKeyboardArrowDown fontSize={22} />
      </Popover.Button>
      <Transition as={Fragment} show={isShowing} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" >
        <Popover.Panel className="absolute top-20 left-1/2  w-screen max-w-sm px-4 -translate-x-1/2 transform sm:px-0">
          <ul className="p-3 border rounded-lg bg-white overflow-hidden shadow-lg">
            {childs.map((e, i) => {
              return (
                <li key={i + Date + Math.random()} >
                  <Link href={e.href} className="inline-block w-full p-2 rounded-3xl cursor-pointer hover:bg-gray-50" onClick={() => setIsShowing(false)}>
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