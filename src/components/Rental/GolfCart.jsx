import { ChooseInput } from "./ChooseInput";
import { SelectDate } from "./SelectDate";

export function GolfCartForm({ startDate, setStartDate, endDate, setEndDate, pax, setPax }) {

  const data = ["4", "6"]

  return (
    <>
      <ChooseInput title={"Passenger capacity"} placeholder="Select the capacity" value={pax} list={data} onClick={value => setPax(value)} Button={item => {return <span>{item}</span>}} > 
          {item => { return <div className="flex justify-between">
              <span>{item}</span>
            </div> 
          }}
        </ChooseInput>
        <SelectDate
        label="Pick up"
        placeholder="Choose pick-up date"
        name="StartDate"
        value={startDate}
        setValue={setStartDate}
      />
      <SelectDate
        label="Drop off"
        placeholder="Choose drop-off date"
        name="EndDate"
        value={endDate}
        setValue={setEndDate}
      />
    </>
  );
}