import { TextInput } from "../TextInput";
import { BookBtn } from "@/Shared/BookBtn";
import { PickDrop } from "../PickDrop";
import { FiUser } from "@/utils/Icons";

export function ATV({ name, setName, router }) {
  return (
    <form className="relative flex w-full max-w-[48rem] mt-8 rounded-full bg-white shadow-xl" onSubmit={(e) => {e.preventDefault(), router.push("/Service/ATV"); }} >
      <TextInput value={name} setValue={setName} placeholder={"Name"} desc="Tell us your name for the booking" Icon={FiUser} />
      <PickDrop />
      <BookBtn />
    </form>
  );
}
