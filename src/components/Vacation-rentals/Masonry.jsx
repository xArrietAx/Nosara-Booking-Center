"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "@/utils/Icons";
import { Fragment, useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

export function Mansory({ data }){

  const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

  const searchParams = useSearchParams();

  const thisPathname = usePathname();

  const router = useRouter()

  const modal = searchParams?.get("modal");

  const onClose = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}`);
  };

  const renderContent = () => {
    return (
        <div className="columns-1 gap-4 min-[392px]:columns-2 md:columns-3">
          {data.map((item, id) => {
            return <div key={id + Date+ Math.random()} className="after:content group relative mb-5 block w-full h-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight focus:outline-none" >
            <Image alt="chisfis listing gallery" className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-100 focus:outline-none" src={item} width={2000} height={2000} onClick={() => openLightboxOnSlide(id + 1)} loading="lazy" />
          </div>
          })}
        </div>
    );
  };

  return (
    <>
      <Transition appear show={modal === "PHOTO_TOUR_SCROLLABLE"} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={onClose}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
            <div className="fixed inset-0 bg-white" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="sticky z-10 top-0 p-4 xl:px-10 bg-white">
              <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-50" onClick={onClose} >
                <IoClose fontSize={25} />
              </button>
            </div>

            <div className="flex min-h-full items-center justify-center sm:p-4 pt-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-5"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-5"
              >
                <Dialog.Panel className="w-full max-w-screen-lg mx-auto transform p-4 pt-0 text-left transition-all ">
                  {renderContent()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <FsLightbox
				toggler={lightboxController.toggler}
				sources={data}
        exitFullscreenOnClose={true}
				slide={lightboxController.slide}
			/>

    </>
  );
};