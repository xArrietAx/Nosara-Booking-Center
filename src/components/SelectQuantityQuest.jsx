"use client";

import React, { useEffect, useState } from "react";

export function SelectQuantityQuest({ className = "w-full", defaultValue = 0, min = 0, max, onChange, label }) {

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleClickDecrement = () => {
    if (min >= value) return;
    setValue((state) => {
      return state - 1;
    });
    onChange && onChange(value - 1);
  };
  const handleClickIncrement = () => {
    if (max && max <= value) return;
    setValue((state) => {
      return state + 1;
    });
    onChange && onChange(value + 1);
  };
 

  return (
    <div className={`flex items-center justify-between space-x-5 ${className}`}>
       <span className="font-medium text-gray-800">
          {label}
        </span>
      <div className={`relative flex items-center justify-between w-28`} >
        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-400 bg-white focus:outline-none hover:border-gray-700 disabled:hover:border-gray-400 disabled:opacity-50 disabled:cursor-default" type="button" onClick={handleClickDecrement} disabled={min >= value} >
         -
        </button>
        <span className="absolute left-1/2 -translate-x-1/2">{value}</span>
        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-400 bg-white focus:outline-none hover:border-gray-700 disabled:hover:border-gray-400 disabled:opacity-50 disabled:cursor-default" type="button" onClick={handleClickIncrement} disabled={max ? max <= value : false} >
          +
        </button>
      </div>
    </div>
  );
};