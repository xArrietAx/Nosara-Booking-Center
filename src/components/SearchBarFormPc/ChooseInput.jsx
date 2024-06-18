import { PopOver } from "../PopOver";
import { ButtonInput } from "./ButtonInput";

export function ChooseInput({ data, classNameContainer = "flex flex-grow w-36", classNamePanel, placeholder, popoverTitle, desc, Icon, renderValues, value }) {

  function renderTitle() {
    return <input placeholder={placeholder} className="w-full placeholder-inherit cursor-pointer" required value={value} onChange={() => {}} />
  }

  return (
    <PopOver
    classNameContainer={classNameContainer}
    classNamePanel={classNamePanel}
    classNameButton={open => `flex-1 z-10 flex items-center space-x-3 p-[34px] focus:outline-none ${open ? "rounded-full shadow-2xl" : null}`}
    Button={() => <ButtonInput title={renderTitle()} desc={desc} Icon={Icon} />}
  >
    {() => {
      return (
        <>
       
      <span className="inline-block font-semibold text-base p-3 sm:text-lg text-gray-800">
        {popoverTitle}
      </span>

    <div className="max-h-[200px] overflow-y-auto overflow-hidden">
      <ul className="mx-1">
        {data.map((item, i) => {
            return renderValues(item, i);
        })}
      </ul>
    </div>
        </>
      );
    }}
  </PopOver>
  );
}
