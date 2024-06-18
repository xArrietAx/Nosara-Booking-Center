"use client";

import { createContext, useState } from "react";

export const Context = createContext({});

export function ContextProvider({ children }) {
  
  // contact
  
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("")
  // const [message, setMessage] = useState("")
  
  
  // Rental
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")
  
  const [destination, setDestination] = useState("");
  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const [adultsInput, setAdultsInput] = useState(0);
  const [childrenInput, setChildrenInput] = useState(0);
  
  const [car, setCar] = useState("");
  const [pax, setPax] = useState("");
  
  const [luggages, setLuggages] = useState("")
  const [surfboard, setSurfboard] = useState("")
  
  const [airline, setAirline] = useState("")
  const [flighNumber , setFlighNumber] = useState("")

  const [arrivalTime, setArrivalTime] = useState("")
  const [departureTime, setDepartureTime] = useState("")  


  // Functions

  const handleChangeGuests = (value, type) => {
    let newValue = { adultsInput, childrenInput};
    if (type === "adultsInput") {
      setAdultsInput(value);
      newValue.adultsInput = value;
    }
    if (type === "childrenInput") {
      setChildrenInput(value);
      newValue.childrenInput = value;
    }
  };

  function resetFormData() {
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setPax("")
    setCar("")
    setDestination("")
    setStartDate("")
    setEndDate("")
    setAdultsInput(0)
    setChildrenInput(0)
    setDepartureTime("")
    setLuggages("")
    setSurfboard("")
    setAirline("")
    setFlighNumber("")
    setArrivalTime("")
  }

  function resetContactForm() {
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }
  
  // FILTER
  

  let [min, setMin] = useState(0)
  let [max, setMax] = useState(500)

  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLocation, setSelectedLocation] = useState([])

  const locationOptions = ["Garza", "Nosara", "Guiones", "Esperanza"];
          
  const categoryOptions = ["ATV", "Sea Adventure", "Horseback Riding", "Canopy"];

 
  const formData = {
    name,
    email,
    subject,
    phone,
    startDate,
    endDate,
    destination,
    car,
    adultsInput, 
    childrenInput,
    pax, 
    departureTime, 
    luggages,
    surfboard, 
    airline,
    flighNumber,
    arrivalTime,
    message,
  }

  const value = {
    name,
    setName,
    email,
    setEmail,
    subject, 
    setSubject,
    phone,
    setPhone,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    destination,
    setDestination,
    car,
    setCar,
    adultsInput, 
    setAdultsInput,
    childrenInput,
    setChildrenInput,
    pax, 
    setPax,
    departureTime, 
    setDepartureTime,
    luggages,
    setLuggages,
    surfboard, 
    setSurfboard,
    airline,
    setAirline,
    flighNumber,
    setFlighNumber,
    arrivalTime,
    setArrivalTime,
    message,
    setMessage,

    min,
    setMin, 
    max, 
    setMax, 
    selectedCategory, 
    setSelectedCategory, 
    selectedLocation, 
    setSelectedLocation,
    
    handleChangeGuests,
    resetContactForm,
    resetFormData,

    formData,
    locationOptions,
    categoryOptions

  }

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
