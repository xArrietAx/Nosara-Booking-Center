"use client";

import { DatePickerHeaderOneMonth } from "../DatePickerHeaderOneMonth";
import { MdCalendarToday } from "@/utils/Icons";
import { Context } from "@/context/useContext";
import { ButtonInput } from "./ButtonInput";
import DatePicker from "react-datepicker";
import { PopOver } from "../PopOver";
import { useContext }  from "react";

export function DateInput(){

  const {startDate, setStartDate} = useContext(Context)

  const onChangeDate = (date) => {
    setStartDate(date);
  };
  
  function title() {
    return (
      <>
        {startDate? startDate?.toLocaleDateString("en-US", { year:"numeric", month: "short", day: "2-digit" }) :
        "Add date"}
      </>
    );
  }

  return (
    <PopOver classNameContainer="flex flex-grow w-[100px]" classNameButton={open => `flex-1 z-10 flex items-center space-x-3 p-8 focus:outline-none ${open ? "rounded-full shadow-2xl" : null}`} Button={() => <ButtonInput title={title()} desc={"Choose the date"} Icon={<MdCalendarToday fontSize={25} />} />}>
      {() => {
          return <DatePicker selected={startDate} onChange={onChangeDate} startDate={startDate} monthsShown={1} showPopperArrow={false} inline renderCustomHeader={(p) => (
            <DatePickerHeaderOneMonth {...p} />
          )}
          renderDayContents={(day, date) => (
            <span>{day}</span>
          )}
        />}}
    </PopOver>
  );
};