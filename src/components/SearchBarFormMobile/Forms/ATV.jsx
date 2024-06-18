import { Collapse } from "../Collapse";
import { PickDrop } from "../PickDrop";
import { UnderNameInput } from "../UnderNameInput";
import React from "react";

export function ATV({ startDate, endDate, name }){
  return (
    <div>
      <div className="w-full space-y-5">
        
        <Collapse isChecked={true} title="Under name" alterTitle="Name" value={name} defaultValue={"Name"}>
          <UnderNameInput />
        </Collapse>

        <Collapse title="Rental period" alterTitle="Pick up & drop off" value={
          <span>
             {typeof(startDate) === "object" ? startDate?.toLocaleDateString("en-US", {
               year:"2-digit",
               month: "short",
               day: "2-digit",
             }) : "Pick up"} {" "} - {" "}            
             { typeof(endDate) === "object" ? 
             (
                 endDate?.toLocaleDateString("en-US", {
                   year:"2-digit",
                   month: "short",
                   day: "2-digit",
                 })) : "Drop off" }
          </span>
        } defaultValue={"Rental period"}>
          <PickDrop />
        </Collapse>

      </div>
    </div>
  );
};