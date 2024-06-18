import { DateInput } from "@/components/SearchBarFormPc/DateInput";
import { SelectQuantityQuest } from "../../SelectQuantityQuest";
import { IoLocationOutline, FiUserPlus } from "@/utils/Icons";
import { QuantityInput } from "../QuantityInput";
import { BookBtn } from "@/Shared/BookBtn";
import { TextInput } from "../TextInput";

export function Shuttle({ handleChangeGuests, adultsInput, childrenInput, destination, setDestination, router }) {

  const totalGuests = childrenInput + adultsInput;

  return (
    <form className="relative flex w-screen max-w-[60rem] mt-8 rounded-full shadow-xl bg-white" onSubmit={e => { e.preventDefault(), router.push("/Service/Shuttle") }} >
      <TextInput value={destination} setValue={setDestination} placeholder="Destination" desc="Where are you going?" Icon={IoLocationOutline} />
      <DateInput />
      <QuantityInput total={totalGuests} title="Guests" Icon={<FiUserPlus fontSize={25} />} hasButtonSubmit={true} >
      <SelectQuantityQuest className="w-full" defaultValue={adultsInput} onChange={(value) => handleChangeGuests(value, "adultsInput")} min={1} max={20} label="Adults" />
      <SelectQuantityQuest className="w-full mt-6" defaultValue={childrenInput} onChange={(value) => handleChangeGuests(value, "childrenInput")} max={20} label="Children" />
      </QuantityInput>
      <BookBtn />
    </form>
  );
}
