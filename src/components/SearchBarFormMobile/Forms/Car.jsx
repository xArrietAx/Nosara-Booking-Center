import { IoCarOutline } from "@/utils/Icons";
import { ChooseInput } from "../ChooseInput";
import { PickDrop } from "../PickDrop";
import { Collapse } from "../Collapse";
import data from "@/data/CarData";

export function Car({ startDate, endDate, car, setCar }) {
  return (
    <div>
      <div className="w-full space-y-5">
        <ChooseInput
        isChecked={true}
          title="Choose your car"
          data={data}
          subtitle="Popular cars"
          alterTitle="Choose"
          defaultValue="Car"
          placeholder="Hyundai Santa Fe"
          value={car}
          setValue={setCar}
        >
          {(item) => {
            return (
              <div className="flex gap-3">
                <IoCarOutline fontSize={20} />
                <span onClick={() => setCar(item)}>{item}</span>
              </div>
            );
          }}
        </ChooseInput>

        <Collapse
          title="Rental period"
          alterTitle="Pick up & drop off"
          value={
            <span>
              {typeof startDate === "object"
                ? startDate?.toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "short",
                    day: "2-digit",
                  })
                : "Pick up"}{" "}
              -{" "}
              {typeof endDate === "object"
                ? endDate?.toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "short",
                    day: "2-digit",
                  })
                : "Drop off"}
            </span>
          }
          defaultValue={"Rental period"}
        >
          <PickDrop />
        </Collapse>
      </div>
    </div>
  );
}
