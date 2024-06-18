import { MdArrowBackIos, MdArrowForwardIos } from "@/utils/Icons";

export function DatePickerHeaderTwoMonth({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) {
    return (
      <div>
        <button
          aria-label="Previous Month"
          className={
            "react-datepicker__navigation react-datepicker__navigation--previous absolute -top-2 left-0 flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
          }
          style={customHeaderCount === 1 ? { visibility: "hidden" } : {}}
          onClick={decreaseMonth}
          type="button"
        >
          <span className="">
            <MdArrowBackIos fontSize={20} />
          </span>
        </button>
        <span className="react-datepicker__current-month">
          {monthDate.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button
          aria-label="Next Month"
          className="react-datepicker__navigation react-datepicker__navigation--next absolute -top-2 -right-0 flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          style={customHeaderCount === 0 ? { visibility: "hidden" } : {}}
          type="button"
          onClick={increaseMonth}
        >
          <span className="">
            <MdArrowForwardIos fontSize={20} />
          </span>
        </button>
      </div>
    );
  }
  