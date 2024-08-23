import { Popover, Transition } from "@headlessui/react";
import { ButtonInput } from "./Button"; 
import { Fragment } from "react";

export function Select({ children, title, desc, Icon }){
  return (
    <Popover className="relative flex flex-grow">
      {({ open }) => (
        <>
            <Popover.Button className={`flex-1 z-10 flex relative items-center space-x-3 p-5 w-36 ${ open ? "rounded-full shadow-2xl" : null} focus:outline-none`} >
              <ButtonInput title={title} desc={desc} Icon={Icon} />
            </Popover.Button>

          <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" >
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[300px] max-w-xs bg-white top-full mt-3 px-4 py-5 rounded-3xl shadow-xl">
            {children}
            </Popover.Panel>
          </Transition>
          
        </>
      )}
    </Popover>
  );
};