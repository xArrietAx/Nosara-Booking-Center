"use client";

import { Context } from "@/context/useContext";
import { useSubmit } from "@/hooks/useSubmit";
import emailTypes from "@/config/emailTypes";
import { InputPhone } from "../InputPhone";
import { GolfCartForm } from "./GolfCart";
import { Button } from "@/Shared/Button";
import { ShuttleForm } from "./Shuttle";
import { useContext } from "react";
import { AtvForm } from "./ATV";
import { CarForm } from "./Car";


export function Form({ rent }) {

  const { resetFormData, name, setName, email, setEmail, message, setMessage, startDate, setStartDate, endDate, setEndDate, pax, setPax, car, setCar, destination, setDestination, adultsInput, setAdultsInput, childrenInput, setChildrenInput, departureTime, setDepartureTime, luggages, setLuggages, surfboard, setSurfboard, airline, setAirline, flighNumber, setFlighNumber, arrivalTime, setArrivalTime } = useContext(Context);

  const { Submit, loading } = useSubmit(emailTypes.Book)

  function renderForm() {
    switch (rent) {
      case "ATV":
        return <AtvForm startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />;
      case "Car":
        return <CarForm startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} car={car} setCar={setCar} />;
      case "GolfCart":
        return <GolfCartForm startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} pax={pax} setPax={setPax} />;
      case "Shuttle":
        return <ShuttleForm startDate={startDate} setStartDate={setStartDate} destination={destination} setDestination={setDestination} adultsInput={adultsInput} setAdultsInput={setAdultsInput} childrenInput={childrenInput} setChildrenInput={setChildrenInput} departureTime={departureTime} setDepartureTime={setDepartureTime} luggages={luggages} setLuggages={setLuggages} surfboard={surfboard} setSurfboard={setSurfboard} airline={airline} setAirline={setAirline} flighNumber={flighNumber} setFlighNumber={setFlighNumber} arrivalTime={arrivalTime} setArrivalTime={setArrivalTime} />;
      default:
        return;
    }
  }

  return (
    <form onSubmit={e => Submit({ e, reset: resetFormData, service: rent })} className="space-y-5 text-[15px]">

        <div className="input_container">
          <label htmlFor="Name" className="input_label">
            Full name
          </label>
          <input
            className="input_field"
            type="text"
            name="Name"
            required
            placeholder="Andrés"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label">
            Email
          </label>
          <input
            className="input_field"
            type="email"
            required
            placeholder="example@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <InputPhone />

        {renderForm()}

        <div className="input_container">
          <label htmlFor="Message" className="input_label">
            Message
          </label>
          <textarea
            rows={6}
            className="input_field min-h-40"
            type="text"
            name="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <Button className="w-[150px]" loading={loading} >Book {rent}</Button>

    </form>
  );
  
}