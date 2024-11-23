import { Badge } from "@/components/Badge";
import { Input } from "@/shared/Input";
import { Label } from "@/shared/Label";

export function Shuttle({
  pickUpLocation,
  setPickUpLocation,
  dropOffLocation,
  setDropOffLocation,
  pickUp,
  setPickUp,
  adults,
  setAdults,
  childrens,
  setChildrens,
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
}) {
  
  return (
    <>
      <div>
        <Label htmlFor="pickUp">Date</Label>
        <Input
          type="date"
          id="pickUp"
          placeholder="Choose date"
          required
          value={pickUp}
          onChange={(e) => setPickUp(e.target.value)}
        />
      </div>

      <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-3">
      <div>
        <Label htmlFor="pickUpLocation">Pick up location</Label>
        <Input
          type="text"
          id="pickUpLocation"
          placeholder="Airport, hotel, house or any location"
          value={pickUpLocation}
          onChange={(e) => setPickUpLocation(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="dropOffLocation">Drop off location</Label>
        <Input
          type="text"
          id="dropOffLocation"
          placeholder="Airport, hotel, house or any location"
          value={dropOffLocation}
          onChange={(e) => setDropOffLocation(e.target.value)}
          required
        />
      </div>
      </div>


        <div>
          <Label htmlFor="adults">Adults</Label>
          <Input
            type="number"
            id="adults"
            placeholder="How many adults?"
            min={1}
            value={adults === 0 ? "" : adults}
            onChange={(e) => setAdults(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="children">Children</Label>
          <Input
            type="number"
            id="children"
            placeholder="How many children?"
            min={0}
            value={childrens === 0 ? "" : childrens}
            onChange={(e) => setChildrens(e.target.value)}
            required
          />
        </div>
    

      <div>
        <Label htmlFor="luggages" >Luggages</Label>
        <Input
          type="number"
          id="luggages"
          placeholder="How many luggages?"
          min={0}
          value={luggages}
          onChange={(e) => setLuggages(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="surfboard">Surfboard</Label>
        <Input
          type="number"
          id="surfboard"
          placeholder="How many surfboard?"
          min={0}
          value={surfboard}
          onChange={(e) => setSurfboard(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="airline">
          Airline <Badge>Optional</Badge>
        </Label>
        <Input
          type="text"
          id="airline"
          placeholder="American airlines"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="flightNumber">
          Flight number <Badge>Optional</Badge>
        </Label>
        <Input
          type="text"
          id="flightNumber"
          placeholder="1277"
          value={flighNumber}
          onChange={(e) => setFlighNumber(e.target.value)}
        />
      </div>

      <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-3">
        <div>
          <Label htmlFor="departureTime">Departure time</Label>
          <Input
            type="time"
            id="departureTime"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="arrivalTime">
            Arrival time <Badge>Optional</Badge>
          </Label>
          <Input
            type="time"
            id="arrivalTime"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
