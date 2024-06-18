import { SelectQuantityQuest } from "../../SelectQuantityQuest";
import { IoLocationOutline } from "@/utils/Icons";
import { ChooseInput } from "../ChooseInput";
import { DateInput } from "../DateInput";
import { Collapse } from "../Collapse";
import data from "@/data/ShuttleData";

export function Shuttle({ startDate, destination, setDestination, handleChangeGuests, adultsInput, childrenInput }) {
  return (
    <div>
      <div className="w-full space-y-9">
        <ChooseInput
        isChecked={true}
          title="Where to?"
          data={data}
          subtitle="Popular destinations"
          alterTitle="Where"
          defaultValue="Location"
          placeholder="Nosara - Santa Teresa"
          value={destination}
          setValue={setDestination}
        >
          {(item) => {
            return (
              <div className="flex gap-3">
                <IoLocationOutline fontSize={20} />
                <span onClick={() => setDestination(item.name)}>
                  {item.name}
                </span>
              </div>
            );
          }}
        </ChooseInput>

        <Collapse
          title="When's your trip?"
          alterTitle="When"
          value={
            <span>
              {typeof startDate === "object"
                ? startDate?.toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "short",
                    day: "2-digit",
                  })
                : "Pick up"}
            </span>
          }
          defaultValue={"Rental period"}
        >
          <DateInput />
        </Collapse>

        <Collapse
          title="Who's coming?"
          alterTitle="Who"
          value={childrenInput + adultsInput}
          defaultValue={"Guests"}
        >
          <div className="flex flex-col gap-5 w-full">
            <SelectQuantityQuest
              className="w-full"
              defaultValue={adultsInput}
              onChange={(value) => handleChangeGuests(value, "adultsInput")}
              max={20}
              label="Adults"
            />
            <SelectQuantityQuest
              className="w-full"
              defaultValue={childrenInput}
              onChange={(value) => handleChangeGuests(value, "childrenInput")}
              max={20}
              label="Children"
            />
          </div>
        </Collapse>
      </div>
    </div>
  );
}