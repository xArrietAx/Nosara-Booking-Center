
import { IoLocationOutline, PiCarProfile } from "@/utils/Icons";
import { ChooseInput } from "../ChooseInput";
import { BookBtn } from "@/Shared/BookBtn";
import { TextInput } from "../TextInput";
import { PickDrop } from "../PickDrop";
import cars from "@/data/CarData";


export function Car({ name, setName, car, setCar, router }) {

  function renderValues(car, i) {
    return (
      <li key={i} onClick={() => setCar(car)} className="p-2 rounded-3xl cursor-pointer hover:bg-gray-50" >
        {car}
      </li>
    );
  }

  return (
    <form className="relative flex w-full max-w-[65rem] mt-8 rounded-full bg-white shadow-xl" onSubmit={e => { e.preventDefault(), router.push("/Service/Car")}} >
      <TextInput value={name} setValue={setName} placeholder="Name" desc="Where are you going? (From - To)" Icon={IoLocationOutline} />
      <PickDrop />
      <ChooseInput data={cars} placeholder="Choose car" desc="What car do you want?" Icon={<PiCarProfile fontSize={30} color="#d4d4d4" />} popoverTitle="Popular cars" value={car} setValue={setCar} renderValues={renderValues} classNamePanel="left-[58%] !max-w-lg" />
      <BookBtn />
    </form>
  );
}