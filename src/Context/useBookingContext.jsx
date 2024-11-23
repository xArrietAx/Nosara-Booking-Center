import { filterEmptyValues } from "@/utils/filterEmptyValues";
import { createContext, useState, useEffect } from "react";
import { format } from "@/utils/format";

export const Context = createContext();

export function BookingProvider({ children }) {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [rangeDates, setRangeDates] = useState({});
  const [seats, setSeats] = useState("");
  const [adults, setAdults] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [luggages, setLuggages] = useState("")
  const [surfboard, setSurfboard] = useState("")
  const [departureTime, setDepartureTime] = useState("")  
  const [airline, setAirline] = useState("")
  const [flighNumber , setFlighNumber] = useState("")
  const [arrivalTime, setArrivalTime] = useState("")

  useEffect(() => {
    if (dropOff && pickUp && dropOff < pickUp) {
      setDropOff(null);
    }
  }, [pickUp, dropOff, setDropOff]);

  const onChangeDate = (date) => {
    const { from, to } = date;
    setRangeDates({ from, to });
    setPickUp(from)
    setDropOff(to)
  };

  const pickUpFormated = format(pickUp)
  const dropOffFormated = format(dropOff)

  const data = {
    name,
    phone,
    pickUpFormated,
    dropOffFormated,
    pickUpLocation,
    dropOffLocation,
    rangeDates,
    seats,
    adults,
    childrens,
    luggages,
    surfboard,
    departureTime,
    airline,
    flighNumber,
    arrivalTime,
  };

  const reset = (form) => {
    if (form) {
      form.reset()
    }
    setName("");
    setPhone("");
    setPickUp("");
    setDropOff("");
    setPickUpLocation("");
    setDropOffLocation("");
    setRangeDates({});
    setSeats("");
    setAdults(0);
    setChildrens(0);
    setLuggages("");
    setSurfboard("");
    setDepartureTime("");
    setAirline("");
    setFlighNumber("");
    setArrivalTime("");
  };

  const filteredData = filterEmptyValues(data)

  const handleChangeGuests = (value, type) => {
    let newValue = { adults, childrens };
    if (type === "adults") {
      setAdults(value);
      newValue.adults = value;
    }
    if (type === "children") {
      setChildrens(value);
      newValue.childrens = value;
    }
  };

  const value = {
    name, 
    setName,
    phone, 
    setPhone,
    pickUp,
    pickUpFormated,
    setPickUp,
    dropOff,
    dropOffFormated,
    setDropOff,
    pickUpLocation, 
    setPickUpLocation,
    dropOffLocation,
    setDropOffLocation,
    seats,
    setSeats,
    rangeDates,
    onChangeDate,
    adults,
    setAdults,
    childrens,
    setChildrens,
    handleChangeGuests,
    luggages,
    setLuggages,
    surfboard, 
    setSurfboard,
    departureTime,
    setDepartureTime,
    airline,
    setAirline,
    flighNumber,
    setFlighNumber,
    arrivalTime,
    setArrivalTime, 
    reset,
    filteredData
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
