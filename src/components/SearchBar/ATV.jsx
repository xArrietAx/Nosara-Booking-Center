import { TextInput } from "./components/TextInput";
import SelectDate from "./components/SelectDate";
import { FiUser } from "@/icons/index";

export function ATV({ name, setName, pickUp, setPickUp, dropOff, setDropOff }) {
  return (
    <>
    <TextInput value={name} setValue={setName} title="Name" desc="Tell us your name" Icon={FiUser} />
    <SelectDate title="Pick up" selected={pickUp} setSelected={setPickUp} />
    <SelectDate title="Drop off" selected={dropOff} setSelected={setDropOff} disabled={pickUp} />
    </>
  );
}