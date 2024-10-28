"use client"

import { useState, useContext, useEffect } from "react";
import { Context } from "@/Context/useBookingContext";
import { BookBtn } from "./components/BookBtn";
import { useRouter } from "next/navigation";
import menu from "@/config/menu.json";
import { GolfCart } from "./GolfCart";
import { Shuttle } from "./Shuttle";
import { ATV } from "./ATV";
import { Car } from "./Car";

const categories = {Shuttle: "Shuttle", ATV: "ATV", GolfCart: "Golf cart", Car: "Car"};

export default function SearchBar() {
  
  const router = useRouter()

  const [category, setcategory] = useState(categories.Shuttle)

  const { reset, name, setName, destination, setDestination, pickUp, setPickUp, dropOff, setDropOff, pickUpLocation, setPickUpLocation, dropOffLocation, setDropOffLocation, rangeDates, onChangeDate, seats, setSeats, adults, childrens, handleChangeGuests } = useContext(Context)
  
  useEffect(() => {
    reset()
  }, [category])
  
  function renderForm(category) {
    switch (category) {
      case categories.Car:
        return <Car pickUpLocation={pickUpLocation} setPickUpLocation={setPickUpLocation} dropOffLocation={dropOffLocation} setDropOffLocation={setDropOffLocation} rangeDates={rangeDates} onChangeDate={onChangeDate} />;

      case categories.Shuttle:
        return <Shuttle destination={destination} setDestination={setDestination} pickUp={pickUp} setPickUp={setPickUp} adults={adults} childrens={childrens} handleChangeGuests={handleChangeGuests} />;

      case categories.ATV:
        return <ATV name={name} setName={setName} pickUp={pickUp} setPickUp={setPickUp} dropOff={dropOff} setDropOff={setDropOff} />;

      case categories.GolfCart:
        return <GolfCart name={name} setName={setName} rangeDates={rangeDates} onChangeDate={onChangeDate} seats={seats} setSeats={setSeats} />;

      default:
        return <div>Search bar not found</div>;
    }
  }

  function Submit(e) {
    e.preventDefault();
    switch (category) {

        case categories.Shuttle:
            router.push(menu.main[5].children[1].url)
            break;

        case categories.ATV:
            router.push(menu.main[5].children[0].url)
            break;

        case categories.GolfCart:
            router.push(menu.main[5].children[2].url)

            break;

        case categories.Car:
            router.push(menu.main[5].children[3].url)
            break;

        default:
            break;
    }
  }

  return (
    <div className="hidden w-full z-10 mb-12 lg:mb-0 lg:-mt-40 lg:block">
      <div className="w-full max-w-6xl py-5 lg:py-0">
        <Tabs category={category} setCategory={setcategory} />
        <form onSubmit={Submit} className="relative flex w-full max-w-5xl mt-8 bg-white rounded-full shadow-xl h-24">
        {renderForm(category)}
        <BookBtn />
        </form>
      </div>
    </div>
  );
}

function Tabs({ category, setCategory }) {
  
  const tabs = [categories.Shuttle, categories.ATV, categories.GolfCart, categories.Car];

  return (
    <ul className="relative z-10 ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto">
      {tabs.map((tab, i) => {
        const active = tab === category;
        return (
          <li
            className={`flex-shrink-0 flex items-center cursor-pointer text-sm lg:text-base font-medium ${
              active ? "text-dark" : "text-text/70 hover:text-dark"
            } `}
            key={i + Date + Math.random()}
            onClick={() => setCategory(tab)}
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
        <span className="block w-2.5 h-2.5 rounded-full bg-dark  mr-2" />
      )}
    </>
  );
}
