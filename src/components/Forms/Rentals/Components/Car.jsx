import { Input } from "@/shared/Input";
import { Label } from "@/shared/Label";

export function Car({
  pickUp,
  setPickUp,
  dropOff,
  setDropOff,
  pickUpLocation,
  setPickUpLocation,
  dropOffLocation,
  setDropOffLocation,
}) {

  return (
    <>
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

      <div>
        <Label htmlFor="pickUpLocation">Pick up location</Label>
        <Input
          type="text"
          id="pickUpLocation"
          placeholder="City or airport"
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
          placeholder="City or airport"
          value={dropOffLocation}
          onChange={(e) => setDropOffLocation(e.target.value)}
          required
        />
      </div>
    </>
  );
}
