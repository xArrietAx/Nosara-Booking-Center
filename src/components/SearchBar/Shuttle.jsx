import { QuantityQuest } from "./components/QuantityGuests";
import { FiUser, IoLocationOutline } from "@/icons/index";
import { TextInput } from "./components/TextInput";
import SelectDate from "./components/SelectDate";
import { Select } from "./components/Select";

export function Shuttle({ destination, setDestination, pickUp, setPickUp, adults, childrens, handleChangeGuests }) {
  return (
    <>
    <TextInput value={destination} setValue={setDestination} title="Destination" desc="Where are you going?" Icon={IoLocationOutline} />
    <SelectDate title="Add date" selected={pickUp} setSelected={setPickUp} />
    <Select title={` ${ childrens + adults || "" } Guests`} desc="Add Guests" Icon={<FiUser className="size-6" />}>
    <div className="space-y-5">
    <QuantityQuest label="Adults" defaultValue={adults} onChange={(value) => handleChangeGuests(value, "adults")} />
    <QuantityQuest label="Children" defaultValue={childrens} onChange={(value) => handleChangeGuests(value, "children")} />
    </div>
    </Select>
    </>
  );
}