"use client";

import { IoClose, MdKeyboardArrowDown } from "@/utils/Icons";
import { SocialsList } from "@/Shared/SocialList";
import { Disclosure } from "@headlessui/react";
import link from "@/config/links.json";
import { Logo } from "@/Shared/Logo";
import Link from "next/link";
import { FooterBar } from "../FooterBar";

export function NavMobile({ onClickClose }) {

  const data = [
    {
      id: Date + Math.random(),
      href: link.Home,
      name: "Home"
    },
    {
      id: Date + Math.random(),
      href: link.About,
      name: "About"
    },
    {
      id: Date + Math.random(),
      href: link.Contact,
      name: "Contact us"
    },
    {
      id: Date + Math.random(),
      href: link.VacationRentals,
      name: "Vacation rentals"
    },
    {
      id: Date + Math.random(),
      href: link.Tours,
      name: "Tours"
    },
    {
      id: Date + Math.random(),
      href: link.ShuttleRental,
      name: "Shuttle"
    },
    {
      id: Date + Math.random(),
      name: "Rental",
      type: "dropdown",
      children: [
        {
          id: Date + Math.random(),
          href: link.AtvRental,
          name: "ATV",
        },
        {
          id: Date + Math.random(),
          href: link.GolfCartRental,
          name: "Golf Cart",
        },
        {
          id: Date + Math.random(),
          href: link.CarRental,
          name: "Car",
        },
      ],
    },
  ];

  const _renderMenuChild = (item) => {
    return (
      <ul className="pl-6 pb-1 text-base">
        {item.children?.map((i) => {
          return <Disclosure key={i + Date + Math.random()} as="li">
          <Link href={i.href} className="flex px-4 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 mt-0.5" >
            <span className={`py-2.5 pr-3 ${!i.children ? "block w-full" : ""}`} >
              {i.name}
            </span>
            {i.children && (
              <span className="flex-1 flex" onClick={(e) => e.preventDefault()} >
                <Disclosure.Button as="span" className="py-2.5 flex justify-end flex-1" >
                  <MdKeyboardArrowDown fontSize={20} className="text-gray-500" />
                </Disclosure.Button>
              </span>
            )}
          </Link>
          {i.children && <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>}
        </Disclosure>
        })}
      </ul>
    );
  };

  const _renderItem = (item, index) => {
    return (
      <Disclosure key={item.id + index + Math.random()} as="li" className="text-gray-900"
      >
        <Link className="flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-gray-100 rounded-lg" href={{
            pathname: item.href || undefined,
          }}
        >
          <span className={`py-2.5 pr-3 ${!item.children ? "block w-full" : ""}`} >
            {item.name}
          </span>
          {item.children && (
            <span className="flex-1 flex" onClick={(e) => e.preventDefault()}>
              <Disclosure.Button as="span" className="py-2.5 flex items-center justify-end flex-1 " >
                <MdKeyboardArrowDown fontSize={20} className="text-gray-500" />
              </Disclosure.Button>
            </span>
          )}
        </Link>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 bg-white divide-y-2 divide-gray-100">
      <div className="py-6 px-5">
        <div className="w-[140px]">
        <Logo />
        </div>
        <div className="flex flex-col gap-4 mt-5 text-gray-700 text-sm">
          <span>
           Accompanying us, you have a trip full of experiences. With houses, shuttles, ATV rental, golf carts rental and much more
          </span>
            <SocialsList className="inline-block" />
        </div>
        <span className="absolute right-2 top-2 p-1">
          <div onClick={onClickClose}>
            <IoClose fontSize={32} className="cursor-pointer" /> 
          </div>
        </span>
      </div>
      <div>
      <ul className="flex flex-col py-6 px-2 space-y-1">
        {data.map(_renderItem)}
      </ul>
        <div className="flex justify-center mt-3">
          <span>Hola! 😄</span>
        </div>
      </div>
    </div>
  );
};