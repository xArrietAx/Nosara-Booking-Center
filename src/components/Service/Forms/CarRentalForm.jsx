import { IoMdInformationCircleOutline } from "react-icons/io";

export function CarRentalForm({ Vehicle, PickUp, DropOff, Information, updateFields, isFirstStep }) {
  return (
    <>
      {isFirstStep && (
        <>
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <label htmlFor="car" className="block text-sm font-medium text-gray-900" >
                What car do you want
              </label>
              <div className="tooltip" data-tip="It doesn't matter if the car you want is not here, you put it here, we will get it for you." >
                <IoMdInformationCircleOutline fontSize={"20px"} />
              </div>
            </div>
            <input type="text" name="car" id="car" placeholder="Hyundai tucson" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Vehicle} onChange={(e) => updateFields({ Vehicle: e.target.value })} />
          </div>
        </>
      )}

      {!isFirstStep && (
        <>
          <div className="mb-5">
            <label htmlFor="pickUp" className="mb-3 block text-sm font-medium text-gray-900" >
              Pick Up
            </label>
            <input type="date" name="pickUp" id="pickUp" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={PickUp} onChange={(e) => updateFields({ PickUp: e.target.value })} />
          </div>

          <div className="mb-5">
            <label htmlFor="dropOff" className="mb-3 block text-sm font-medium text-gray-900" >
              Drop off
            </label>
            <input type="date" name="dropOff" id="dropOff" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={DropOff} onChange={(e) => updateFields({ DropOff: e.target.value })} />
          </div>

          <div className="mb-5">
            <label htmlFor="information" className="mb-3 block text-sm font-medium text-gray-900" >
              Questions or comments
            </label>
            <textarea type="text" name="information" id="information" placeholder="Leave a questions or more information about your request..." rows="5" cols="33" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" value={Information} onChange={(e) => updateFields({ Information: e.target.value })} />
          </div>
        </>
      )}
    </>
  );
}
