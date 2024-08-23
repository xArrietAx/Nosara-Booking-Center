import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { Popover, Transition } from "@headlessui/react";
import { MdCalendarToday } from "@/icons/index";
import { ButtonInput } from "./Button";
import { Fragment } from "react";

export default function SelectDates({ title, selected, setSelected }) {
  const defaultClassNames = getDefaultClassNames();

  function convertTitle() {
    const { from, to } = selected;

    return (
      <>
        {from
          ? from?.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "short",
              day: "2-digit",
            })
          : title}
        {to
          ? " - " +
            to?.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "short",
              day: "2-digit",
            })
          : ""}
      </>
    );
  }

  return (
    <Popover className={`relative flex flex-grow w-[100px]`}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`relative outline-none flex-1 z-10 flex items-center space-x-3 p-8 focus:outline-none ${
              open ? "rounded-full shadow-2xl" : null
            } `}
          >
            <ButtonInput
              title={convertTitle()}
              desc="Choose the dates"
              Icon={<MdCalendarToday className="size-6" />}
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={`absolute top-full left-1/2 z-[999999999] w-screen max-w-2xl mt-3 -translate-x-1/2 transform px-4 sm:px-0 `}
            >
              <div className="relative overflow-hidden p-3 rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                <DayPicker
                  mode="range"
                  numberOfMonths={2}
                  selected={selected}
                  onSelect={setSelected}
                  disabled={{ before: new Date() }}
                  required
                  classNames={{
                    today: `text-primary`,
                    selected: `rounded-md text-white bg-primary`,
                    range_end: "rounded-tl-none rounded-bl-none",
                    range_start: "rounded-tr-none rounded-br-none",
                    range_middle: "rounded-none bg-primary/30",
                    root: `${defaultClassNames.root}`,
                    chevron: `text-dark`,
                    months: "flex justify-between gap-5",
                    month_grid: "w-full",
                    day_button: "w-full h-full",
                    month_caption:
                      "flex justify-center mt-2 mb-5 font-medium text-dark text-base",
                    nav: "absolute -top-1 w-full",
                    button_next:
                      "bg-hover relative left-[567px] !p-2 rounded-full",
                    button_previous: "bg-hover !p-2 rounded-full",
                  }}
                />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
