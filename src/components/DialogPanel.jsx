import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoClose } from "@/utils/Icons";

export function DialogPanel({
  children = () => {},
  Button = () => {},
  classNameButton,
  closeOnClick
}) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  return (
    <>
    <div className={classNameButton}>
      {Button(openModal, closeModal)}
    </div>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <div className="fixed inset-0 bg-white">
            <div className="flex h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out transition-transform"
                enterFrom="opacity-0 translate-y-52"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in transition-transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-52"
              >
                <Dialog.Panel className="relative flex flex-1 flex-col h-full overflow-y-auto">
                  <div className="p-5">
                    <button onClick={() => {return closeOnClick && closeOnClick(), closeModal()}}>
                      <IoClose fontSize={25} />
                    </button>
                  </div>
                  {children(openModal, closeModal)}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
