import { Input } from "@/shared/Input";
import { Label } from "@/shared/Label";

export function ATV({ pickUp, setPickUp, dropOff, setDropOff }) {
  return (
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
  );
}