import { SelectQuantitySeats } from "@/components/SelectQuantitySeats";
import { TextInput } from "../TextInput";
import { QuantityInput } from "../QuantityInput";
import { BookBtn } from "@/Shared/BookBtn";
import { FiUser } from "@/utils/Icons";
import { PickDrop } from "../PickDrop";

export function GolfCart({ name, setName, pax, setPax, router }) {
  return (
    <form className="relative flex w-full max-w-5xl mt-8 rounded-full bg-white shadow-xl" onSubmit={e => { e.preventDefault(), router.push("/Service/GolfCart") }}>
      <TextInput value={name} setValue={setName} placeholder={"Name"} desc="Tell us your name for the booking" Icon={FiUser} />
      <PickDrop />
      <QuantityInput title="Passengers" total={pax} Icon={<FiUser fontSize={25} color="#d4d4d4" />} hasButtonSubmit={true}>
       <SelectQuantitySeats setPax={setPax} />
      </QuantityInput>
      <BookBtn />
    </form>
  );
}
