import SelectDates from "./components/SelectDates";
import { TextInput } from "./components/TextInput";
import { IoLocationOutline } from "@/icons/index";

export function Car({ pickUpLocation, setPickUpLocation, dropOffLocation, setDropOffLocation, rangeDates, onChangeDate }) {
  return (
      <>
      <TextInput value={pickUpLocation} setValue={setPickUpLocation} title="City or airport" desc="Pick up location" Icon={IoLocationOutline} />
      <TextInput value={dropOffLocation} setValue={setDropOffLocation} title="City or airport" desc="Drop off location" Icon={IoLocationOutline} />
      <SelectDates title="Add dates" selected={rangeDates} setSelected={onChangeDate} />
      </>
  );
}

