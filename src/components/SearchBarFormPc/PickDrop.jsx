"use client";

import { DatePickerHeaderTwoMonth } from "../DatePickerHeaderTwoMonth";
import { MdCalendarToday } from "@/utils/Icons";
import { Context } from "@/Context/useContext";
import { ButtonInput } from "./ButtonInput";
import DatePicker from "react-datepicker";
import { PopOver } from "../PopOver";
import { useContext } from "react";

export function PickDrop() {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(Context);

  console.log(startDate);

  console.log(endDate);

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  function title() {
    return (
      <>
        {startDate
          ? startDate?.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "short",
              day: "2-digit",
            })
          : "Add date"}
        {endDate
          ? " - " +
            endDate?.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "short",
              day: "2-digit",
            })
          : ""}
      </>
    );
  }

  return (
    <>
      <PopOver
        classNameContainer="flex flex-grow w-36"
        classNameButton={(open) =>
          `flex-1 z-10 flex items-center space-x-3 p-5 focus:outline-none ${
            open ? "rounded-full shadow-2xl" : null
          }`
        }
        Button={() => <ButtonInput title={title()} desc={"Pick up - Drop off"} Icon={<MdCalendarToday fontSize={25} />} />}
      >
        {() => {
          return (
            <DatePicker
              id="dates"
              name="dates"
              selected={startDate}
              onChange={onChangeDate}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              monthsShown={2}
              showPopperArrow={false}
              inline
              renderCustomHeader={(p) => <DatePickerHeaderTwoMonth {...p} />}
              renderDayContents={(day) => <span>{day}</span>}
              required
            />
          );
        }}
      </PopOver>
    </>
  );
}