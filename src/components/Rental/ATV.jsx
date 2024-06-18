import { SelectDate } from "./SelectDate";

export function AtvForm({ startDate, setStartDate, endDate, setEndDate }) {
  return (
    <>
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
