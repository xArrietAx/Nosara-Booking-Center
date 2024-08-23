"use client";

import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { allIcons } from "@/icons/index";
import { Button } from "@/shared/Button";

export function ModalAmenities({ amenities }) {

  const amenitiesLimit = 9

  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);
  
    function openModalAmenities() {
      document.documentElement.classList = "overflow-hidden"
      setIsOpenModalAmenities(true);
    }

    function closeModalAmenities() {
      document.documentElement.classList = "overflow-visible"
      setIsOpenModalAmenities(false);
    }

  const renderModalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModalAmenities} >
          <div className="min-h-screen px-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-dark/60" onClick={closeModalAmenities} />
            </TransitionChild>

            <span className="inline-block h-screen align-middle" aria-hidden="true" >
              &#8203;
            </span>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full max-w-4xl">
                <div className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-border text-center">
                    <span className="text-lg font-medium leading-6 text-dark" id="headlessui-dialog-title-70" >
                      Amenities
                    </span>
                    <span className="absolute left-3 top-3">
                      <button onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto divide-y divide-border">
                    {amenities.map((item, i) => {
                      const Icon =  allIcons[item.icon]
                      return <div
                      key={i + Date + Math.random()}
                      className="flex items-center py-2.5 sm:py-4 lg:py-5 space-x-5 lg:space-x-8"
                    >  
                    <Icon className="size-6" />            
                      <span>{item.name}</span>
                    </div>
                    })}
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <div className="listingSection__wrap">
      <div>
        <h3 className="font-semibold text-2xl text-dark">Some of the amenities</h3>
        <span className="block mt-2">
          About the property's amenities and services
        </span>
      </div>
      <div className="w-14 border-b border-border"></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 font-semibold text-sm">
        {amenities.filter((_, i) => i < amenitiesLimit).map((item, i) => {

          const Icon =  allIcons[item.icon]

          return <div key={i + Date + Math.random()} className="flex items-center space-x-3">
            <Icon fontSize={20} />
            <span>{item.name}</span>
          </div>;
        })}
      </div>

      <div className="w-14 border-b border-border"></div>

      {amenities.length > amenitiesLimit && (
        <div>
          <Button onClick={openModalAmenities}>
            View more amenities
          </Button>
        </div>
      )}

      {renderModalAmenities()}
    </div>
  );
}
