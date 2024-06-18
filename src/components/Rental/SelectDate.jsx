import { DatePickerHeaderOneMonth } from "../DatePickerHeaderOneMonth";
import DatePicker from "react-datepicker";

export function SelectDate({label, placeholder, value, setValue }) {
  return (
    <div className="input_container">
      <label className="input_label">
       {label}
      </label>
      <div className="relative">
      <DatePicker
        className="input_field"
        placeholderText={placeholder}
        popperPlacement="top-start"
        selected={value}
        onChange={date => setValue(date)}
        required
        renderCustomHeader={(p) => <DatePickerHeaderOneMonth {...p} />}
        renderDayContents={(day, date) => <span className="day text-[13px]">{day}</span>}
      />
      </div>
    </div>
  );
}
