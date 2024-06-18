import { MdArrowBackIos, MdArrowForwardIos } from "@/utils/Icons";

export function DatePickerHeaderOneMonth({ monthDate, decreaseMonth, increaseMonth }) {
    return <div>
    <button
      aria-label="Previous Month"
      className="absolute -top-1.5 left-2 flex items-center justify-center p-2 rounded-full hover:bg-gray-50"
      onClick={decreaseMonth}
      type="button"
    >
        <MdArrowBackIos fontSize={20} />
    </button>

    <span className="react-datepicker__current-month">
      {monthDate.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      })}
    </span>
    <button
      aria-label="Next Month"
      className="absolute -top-1.5 right-2 flex items-center justify-center p-2 rounded-full hover:bg-gray-50"
      type="button"
      onClick={increaseMonth}
    >
        <MdArrowForwardIos fontSize={20} />
    </button>

  </div>
}