import cars from "@/data/CarData";
import { ChooseInput } from "./ChooseInput";
import { SelectDate } from "./SelectDate";

export function CarForm({ startDate, setStartDate, endDate, setEndDate, car, setCar }) {
  return (
    <>
    <ChooseInput title={`Choose your car`} placeholder="SELECT THE CAR" value={car} list={cars} onClick={value => setCar(value)}>
      {item => {return <span>{item}</span>}}
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
