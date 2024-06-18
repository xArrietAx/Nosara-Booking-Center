import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

export function PopOver({children, Button, classNameContainer, classNamePanel, classNameButton = () => {}}) {
    return  (<>
    <Popover className={`relative ${classNameContainer}`} >
      {({ open, close }) => (
        <>
        <Popover.Button className={`relative outline-none ${classNameButton(open)}`}>
        {Button(open)}
        </Popover.Button>
          <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" >
            <Popover.Panel className={`absolute top-full left-1/2 z-[999999999] w-screen max-w-sm mt-3 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl ${classNamePanel}`}>
              <div className="relative overflow-hidden p-3 rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                {children(open, close)}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  </>)
}