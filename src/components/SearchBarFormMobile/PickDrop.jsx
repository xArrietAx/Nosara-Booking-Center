"use client";

import { DatePickerHeaderTwoMonth } from "../DatePickerHeaderTwoMonth";
import { Context } from "@/Context/useContext";
import DatePicker from "react-datepicker";
import React, { useContext } from "react";

export function PickDrop() {
  
  const { startDate, setStartDate, endDate, setEndDate } = useContext(Context);

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="w-full max-w-[700px] max-h-[360px] mx-auto max-[640px]:overflow-y-auto" >
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
   </div>
  );
}
