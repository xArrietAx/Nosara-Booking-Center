import { useContext } from "react";
import { Context } from "@/Context/useContext";

export function UnderNameInput() {

  const { name, setName } = useContext(Context);

  return (
    <input
      className={`block w-full bg-transparent border px-4 py-3 pr-12 border-gray-900 rounded-xl focus:ring-0 focus:outline-none text-base leading-none placeholder-gray-500 truncate placeholder:truncate`}
      placeholder={"Andrés"}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
