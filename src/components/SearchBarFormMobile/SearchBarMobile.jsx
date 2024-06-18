"use client";

import { Fragment, useContext, useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation";
import { IoSearchOutline } from "@/utils/Icons";
import { Context } from "@/Context/useContext";
import { DialogPanel } from "../DialogPanel";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GolfCart } from "./Forms/GolfCart";
import { Shuttle } from "./Forms/Shuttle";
import { Tab } from "@headlessui/react";
import { ATV } from "./Forms/ATV";
import { Car } from "./Forms/Car";

export default function SearchBarMobile(){

  const isMobile = useMediaQuery("(max-width: 1024px)");

  const { startDate, setStartDate, endDate, setEndDate, destination, setDestination, handleChangeGuests, adultsInput, childrenInput, name, setName, pax, setPax, car, setCar } = useContext(Context)
  
  const { rent } = useParams()

  const [selectedIndex, setSelectedIndex] = useState(0)

  const router = useRouter()

  function handleSelectedIndex() {
    switch (rent) {
      case "Shuttle": return setSelectedIndex(0)
      case "ATV": return setSelectedIndex(1)
      case "GolfCart": return setSelectedIndex(2)
      case "Car": return setSelectedIndex(3)    
      default: return setSelectedIndex(0)
    }
  }
  
  useEffect(() => {
    if (isMobile) {
      setStartDate("")
      setEndDate("")
    }
  }, [selectedIndex])  

  useEffect(() => {
    handleSelectedIndex()
  }, [rent])

  function redirectTo() {
    switch (selectedIndex) {
      case 0: return router.push("/Service/Shuttle")
      case 1: return router.push("/Service/ATV")
      case 2: return router.push("/Service/GolfCart")
      case 3: return router.push("/Service/Car")    
      default: return router.push("/Service/Shuttle")
    }
  }

  const renderButton = (openModal) => {
    return (
      <button onClick={openModal} className="relative flex items-center w-full border border-gray-200 px-4 py-2 pr-11 rounded-full shadow-lg" >
        <IoSearchOutline className="flex-shrink-0 w-5 h-5" />
        <div className="ml-3 flex-1 text-left overflow-hidden">
          <span className="block font-medium text-sm">Where are you going?</span>
          <span className="block mt-0.5 text-xs font-light text-gray-500 ">
            <span className="line-clamp-1">
              Anywhere • Any week • Add guests
            </span>
          </span>
        </div>

        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200">
          <svg viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" className="block w-4 h-4" fill="currentColor" >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </span>
      </button>
    );
  };

  function renderContent(openModal, closeModal) {
    return  <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
    <Tab.List className="flex w-full justify-center font-semibold text-sm sm:text-base text-gray-500 space-x-6 sm:space-x-8">
      {["Shuttle", "ATV", "Golf cart", "Car"].map(
        (item, index) => (
          <Tab key={index} as={Fragment} >
            {({ selected }) => (
              <div className="relative focus:outline-none focus-visible:ring-0 outline-none select-none cursor-pointer">
                <div className={`${ selected ? "text-black" : "" }`} >
                  {item}
                </div>
                {selected && (
                  <span className="absolute inset-x-0 top-full border-b-2 border-black"></span>
                )}
              </div>
            )}
          </Tab>
        )
      )}
    </Tab.List>

    <div className="flex-1 pt-3 px-1.5 sm:px-4 flex overflow-hidden">
      <Tab.Panels className="flex-1 overflow-y-auto hiddenScrollbar py-4" >

        <Tab.Panel>
          <div className="transition-opacity animate-[myblur_0.4s_ease-in-out]">
           <Shuttle startDate={startDate} destination={destination} setDestination={setDestination} handleChangeGuests={handleChangeGuests} adultsInput={adultsInput} childrenInput={childrenInput} />
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className="transition-opacity animate-[myblur_0.4s_ease-in-out]">
            <ATV startDate={startDate} endDate={endDate} name={name} setName={setName} />
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className="transition-opacity animate-[myblur_0.4s_ease-in-out]">
            <GolfCart endDate={endDate} startDate={startDate} pax={pax} setPax={setPax} name={name} setName={setName} />
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className="transition-opacity animate-[myblur_0.4s_ease-in-out]">
           <Car startDate={startDate} endDate={endDate} car={car} setCar={setCar} />
          </div>
        </Tab.Panel>

      </Tab.Panels>
    </div>

    <div className="sticky bottom-0 flex justify-end px-2 py-2 border-t bg-white">
      <button className="btn btn-lg btn-circle relative z-50 text-white bg-green-500 hover:bg-green-600" onClick={() => {closeModal(), redirectTo()}}> 
      Book</button>
    </div>

</Tab.Group> 
  }

  return (
    <DialogPanel Button={openModal => renderButton(openModal)} closeOnClick={redirectTo} >
      {(openModal, closeModal) => {
         return renderContent(openModal, closeModal)
      }}
    </DialogPanel>
  );
}