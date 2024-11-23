"use client"

import { Context } from "@/Context/useBookingContext";
import { InputPhone } from "@/components/InputPhone";
import { GolfCart } from "./Components/GolfCart";
import { Shuttle } from "./Components/Shuttle";
import { Textarea } from "@/shared/Textarea";
import { useContext, useState } from "react";
import { Badge } from "@/components/Badge";
import { Button } from "@/shared/Button";
import { Label } from "@/shared/Label";
import { Car } from "./Components/Car";
import { ATV } from "./Components/ATV";
import { Input } from "@/shared/Input";
import toast from "react-hot-toast";

export default function Form({ rent }) {

  const [loading, setLoading] = useState(false)

  const { reset, filteredData, name, setName, pickUpFormated, setPickUp, dropOffFormated, setDropOff, pickUpLocation, setPickUpLocation, dropOffLocation, setDropOffLocation, seats, setSeats, adults, setAdults, childrens, setChildrens, departureTime, setDepartureTime, luggages, setLuggages, surfboard, setSurfboard, airline, setAirline, flighNumber, setFlighNumber, arrivalTime, setArrivalTime, time, setTime } = useContext(Context)

  function renderForm() {
    switch (rent) {
        case "Shuttle":
         return <Shuttle time={time} setTime={setTime} pickUpLocation={pickUpLocation} setPickUpLocation={setPickUpLocation} dropOffLocation={dropOffLocation} setDropOffLocation={setDropOffLocation} pickUp={pickUpFormated} setPickUp={setPickUp} adults={adults} setAdults={setAdults} childrens={childrens} setChildrens={setChildrens} departureTime={departureTime} setDepartureTime={setDepartureTime} luggages={luggages} setLuggages={setLuggages} surfboard={surfboard} setSurfboard={setSurfboard} airline={airline} setAirline={setAirline} flighNumber={flighNumber} setFlighNumber={setFlighNumber} arrivalTime={arrivalTime} setArrivalTime={setArrivalTime} />;
    
        case "ATV":
         return <ATV pickUp={pickUpFormated} setPickUp={setPickUp} dropOff={dropOffFormated} setDropOff={setDropOff} />;
    
        case "Golf_cart":
         return <GolfCart pickUp={pickUpFormated} setPickUp={setPickUp} dropOff={dropOffFormated} setDropOff={setDropOff} seats={seats} setSeats={setSeats} />;
    
        case "Car":
         return <Car pickUpLocation={pickUpLocation} setPickUpLocation={setPickUpLocation} dropOffLocation={dropOffLocation} setDropOffLocation={setDropOffLocation} pickUp={pickUpFormated} setPickUp={setPickUp} dropOff={dropOffFormated} setDropOff={setDropOff} />;
    
        default:
          break;
      }
  }

  async function Submit(e) {
    try {
      e.preventDefault()
      setLoading(true)

      const formData = new FormData(e.target) 
  
      const email = formData.get("email")
      const message = formData.get("message")
  
      if (message !== "") {
        filteredData.message = message
      } else {
        delete filteredData.message
      }
  
      filteredData.email = email
      filteredData.service = rent

      const res = await fetch("/sendRentalEmail", {
        method:"POST",
        body: JSON.stringify(filteredData)
       })
       
       if (!res.ok) {
        throw new Error("Failed to send the email");
       }
       const jsonData = await res.json()

       toast.success(jsonData.message);

    } catch (error) {
      toast.error(error?.message);
    } finally {
      reset(e.target)
      setLoading(false)
     }
  }

  return <form className="grid gap-6" onSubmit={Submit}>

      <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-3">
        <div>
          <Label htmlFor="name">
            Full name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="example@gmail.com"
          />
        </div>
      </div>

      <InputPhone />

    {renderForm()}

    <div>
        <Label htmlFor="message">
          Message <Badge>Optional</Badge>
        </Label>
        <Textarea
          id="message"
          type="text"
          name="message"
        />
    </div>

      <Button type="submit" className="px-16 sm:ml-auto sm:w-fit" loading={loading}>Send</Button>
   
  </form>;
}
