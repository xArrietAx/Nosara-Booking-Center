import { Input } from "@/shared/Input";
import { Label } from "@/shared/Label";

export function GolfCart({
  pickUp,
  setPickUp,
  dropOff,
  setDropOff,
  seats,
  setSeats,
}) {

  return (
    <>
      <div>
        <Label htmlFor="passengerCapacity" >Passenger capacity</Label>
        <select
          className="form-input"
          id="passengerCapacity"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          required
        >
          <option value={""} hidden >
            How many seats
          </option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
      </div>

      <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-3">
        <div>
          <Label htmlFor="pickUp">Pick up</Label>
          <Input
            type="date"
            id="pickUp"
            placeholder="Choose date"
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="dropOff">Drop off</Label>
          <Input
            type="date"
            id="dropOff"
            placeholder="Choose date"
            value={dropOff}
            onChange={(e) => setDropOff(e.target.value)}
            required
          />
        </div>
      </div>
    </>
  );
}
