"use client";

import { useState, useContext, useEffect } from "react";
import { Context } from "@/context/useContext";
import { useRouter } from "next/navigation";
import { GolfCart } from "./Forms/GolfCart";
import { Shuttle } from "./Forms/Shuttle";
import { Car } from "./Forms/Car";
import { ATV } from "./Forms/ATV";

export function SearchBarPc() {

  const router = useRouter();

  const { resetFormData, setStartDate, setEndDate, name, setName, destination, setDestination, pax, setPax, car, setCar, adultsInput, childrenInput, handleChangeGuests } = useContext(Context);

  const [category, setCategory] = useState("Shuttle");

  useEffect(() => {
    resetFormData()
  }, [])

  useEffect(() => {
    setStartDate("")
    setEndDate("")
  }, [category])

  function RenderForm(category) {
    switch (category) {

      case "Car":
        return <Car name={name} setName={setName} car={car} setCar={setCar} router={router} />;

      case "Shuttle":
        return (<Shuttle handleChangeGuests={handleChangeGuests} adultsInput={adultsInput} childrenInput={childrenInput} destination={destination} setDestination={setDestination} router={router} />
        );

      case "ATV":
        return <ATV name={name} setName={setName} router={router} />;

      case "Golf cart":
        return <GolfCart name={name} setName={setName} pax={pax} setPax={setPax} router={router} />;

      default:
        return <div>Search bar not found</div>;

    }
  }

  return (
    <div className="hidden w-full z-10 mb-12 lg:mb-0 lg:-mt-40 lg:block">
      <div className="w-full max-w-6xl py-5 lg:py-0">
        <Tabs category={category} setCategory={setCategory} />
        {RenderForm(category)}
      </div>
    </div>
  );
}

function Tabs({ setCategory, category }) {
  const categories = ["Shuttle", "ATV", "Golf cart", "Car"];

  return (
    <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto">
      {categories.map((tab, i) => {
        const active = tab === category;
        return (
          <li
            onClick={() => setCategory(tab)}
            className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium ${
              active ? "" : "text-gray-500 hover:text-gray-700"
            } `}
            key={i + Date + Math.random()}
          >
            <Ball active={active} />
            <span>{tab}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Ball({ active }) {
  return (
    <>
      {active && (
        <span className="block w-2.5 h-2.5 rounded-full bg-gray-800  mr-2" />
      )}
    </>
  );
}
