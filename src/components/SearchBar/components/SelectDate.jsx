import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { Popover, Transition } from "@headlessui/react";
import { MdCalendarToday } from "@/icons/index";
import { ButtonInput } from "./Button";
import { Fragment } from "react";

export default function SelectDate({ title, selected, setSelected, disabled }) {
  const defaultClassNames = getDefaultClassNames();

  function disabledDays() {
    if (disabled === undefined) return new Date();
    if (!disabled) return new Date(9999, 11, 31);
    if (disabled) return disabled;
  }

  return (
    <Popover className={`relative flex flex-grow w-[100px]`}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`relative outline-none  flex-1 z-10 flex items-center space-x-3 p-8 focus:outline-none ${
              open ? "rounded-full shadow-2xl" : null
            } `}
          >
            <ButtonInput
              title={
                selected
                  ? selected.toLocaleString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : title
              }
              desc="Choose the date"
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
              className={`absolute top-full left-1/2 z-[999999999] w-screen max-w-md mt-3 -translate-x-1/2 transform px-4 sm:px-0 `}
            >
              <div className="relative overflow-hidden p-3 rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  disabled={{ before: disabledDays() }}
                  required
                  classNames={{
                    today: `text-primary`,
                    selected: `rounded text-white bg-primary`,
                    root: `${defaultClassNames.root}`,
                    chevron: `text-dark`,
                    months: "max-w-none",
                    month_grid: "w-full",
                    day_button: "w-full h-full",
                    month_caption:
                      "flex justify-center mt-2 mb-5 font-medium text-dark text-base",
                    nav: "absolute -top-2.5 w-full",
                    button_next:
                      "bg-hover relative left-[342px] !p-2 rounded-full",
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
