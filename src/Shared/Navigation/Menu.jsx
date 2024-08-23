import { Transition, TransitionChild, Dialog, DialogPanel } from "@headlessui/react";
import { NavMobile } from "./NavMobile";
import { Fragment } from "react";

export default function Menu({isVisable, handleCloseMenu}) {
    return (
        <Transition appear show={isVisable} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 overflow-hidden"
            onClose={handleCloseMenu}
          >
            <TransitionChild
              as={Fragment}
              enter=" duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-dark/60" />
            </TransitionChild>

            <div className="fixed inset-0">
              <div className="flex justify-end min-h-full ">
                <TransitionChild
                  as={Fragment}
                  enter="transition duration-100 transform"
                  enterFrom="opacity-0 translate-x-56"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition duration-150 transform"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-56"
                >
                  <DialogPanel className="w-full max-w-md transform overflow-hidden transition-all">
                    <NavMobile onClickClose={handleCloseMenu} />
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
            
          </Dialog>
        </Transition>
      );
}