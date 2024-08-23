import SelectDates from "./components/SelectDates";
import { TextInput } from "./components/TextInput";
import { Select } from "./components/Select";
import { FiUser } from "@/icons/index";

export function GolfCart({ name, setName, rangeDates, onChangeDate, seats, setSeats }) {
  return (
    <>
      <TextInput value={name} setValue={setName} title="Name" desc="Tell us your name" Icon={FiUser} />
      <SelectDates title="Add dates" selected={rangeDates} setSelected={onChangeDate} />
      <Select title={`${seats || ""} Seats`} desc="How many seats?" Icon={<FiUser className="size-6" />}>
      <Passenger setSeats={setSeats} />
      </Select>
    </>
  );
}

function Passenger({ setSeats }) {
  return <div className="space-y-2 w-full">
  <span data-value={4} className="block p-2 rounded-3xl cursor-pointer hover:bg-secondary" onClick={e => {
    setSeats(e.target.dataset.value)
  }} >4 passenger</span>
  <span data-value={6} className="block p-2 rounded-3xl cursor-pointer hover:bg-secondary" onClick={e => {
    setSeats(e.target.dataset.value)
  }} >6 passenger</span>
  </div>
}