import { IoClose, MdKeyboardArrowDown } from "@/icons/index";
import { SocialsList } from "@/components/SocialList";
import { Disclosure } from "@headlessui/react";
import menu from "@/config/menu.json";
import { Logo } from "@/Shared/Logo";
import Link from "next/link";

export function NavMobile({ onClickClose }) {

  const _renderMenuChild = (item) => {

    return (
      <ul className="pl-6 pb-1 text-base">

        {item.children?.map((i) => {


          return <Disclosure key={i + Date + Math.random()} as="li">
          <Link href={i.url} className="flex px-4 text-dark text-sm font-medium rounded-lg hover:bg-secondary mt-0.5" >
            <span className={`py-2.5 pr-3 ${!i.children ? "block w-full" : ""}`} >
              {i.name}
            </span>
            {i.children && (
              <span className="flex-1 flex" onClick={(e) => e.preventDefault()} >
                <Disclosure.Button as="span" className="py-2.5 flex justify-end flex-1" >
                  <MdKeyboardArrowDown fontSize={20} />
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
      <Disclosure key={index + Math.random()} as="li" className="text-dark">
        <Link className="flex w-full px-4 font-medium tracking-wide text-sm hover:bg-secondary rounded-lg" href={{ pathname: item.url || undefined }}
        >
          <span className={`py-2.5 pr-3 ${!item.children ? "block w-full" : ""}`} >
            {item.name}
          </span>
          {item.children && (
            <span className="flex-1 flex" onClick={(e) => e.preventDefault()}>
              <Disclosure.Button as="span" className="py-2.5 flex items-center justify-end flex-1" >
                <MdKeyboardArrowDown fontSize={20} />
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
    <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 bg-white divide-y-2 divide-secondary uppercase">
      <div className="py-6 px-5">
        <div className="w-[140px]">
        <Logo />
        </div>
        <div className="flex flex-col gap-4 mt-5 text-sm">
          <span>
           Accompanying us, you have a trip full of experiences. With houses, shuttles, ATV rental, golf carts rental and much more
          </span>
            <SocialsList className="inline-block" />
        </div>
        <span className="absolute right-2 top-2 p-1">
          <div onClick={onClickClose}>
            <IoClose fontSize={32} className="text-dark cursor-pointer" /> 
          </div>
        </span>
      </div>
      <div>
      <ul className="flex flex-col py-6 px-2 space-y-1">
        {menu.mobile.map(_renderItem)}
      </ul>
      </div>
    </div>
  );
};