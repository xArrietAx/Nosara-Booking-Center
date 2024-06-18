"use client";

import { DatePickerHeaderOneMonth } from "@/components/DatePickerHeaderOneMonth";
import { Context } from "@/Context/useContext";
import DatePicker from "react-datepicker";
import React, { useContext } from "react";

export function DateInput() {

  const {startDate, setStartDate} = useContext(Context)

  const onChangeDate = (date) => {
    setStartDate(date);
  };

  return (
    <div className="w-11/12 max-w-[500px] mx-auto">
      <DatePicker selected={startDate} onChange={onChangeDate} startDate={startDate} monthsShown={1} showPopperArrow={false} inline renderCustomHeader={(p) => <DatePickerHeaderOneMonth {...p} />} renderDayContents={day => <span>{day}</span>} />
    </div>
  );
}