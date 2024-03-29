export function GolfCartForm({Vehicle, PickUp, DropOff, Information, updateFields, isFirstStep }) {
  return (
    <>

          {isFirstStep && <>
          <div className="mb-5">
            <label htmlFor="capacity" className="mb-3 block text-sm font-medium text-gray-900" >
             Passenger capacity
            </label>
            <select id="capacity" name="capacity" className="select select-bordered w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm focus:outline-none focus:border-[#121213] focus:shadow-md" required value={Vehicle} onChange={(e) => updateFields({ Vehicle: e.target.value })} >
            <option value="">Select passenger capacity</option>
              <option value={"4 Passenger"}>4 Passenger</option>
              <option value={"6 Passenger"}>6 Passenger</option>
            </select>
          </div>
          </>
          }


      {!isFirstStep && (
        <>
          <div className="mb-5">
            <label htmlFor="pickUp" className="mb-3 block text-sm font-medium text-gray-900"
            >
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