export function AtvForm({ Vehicle, PickUp, DropOff, Information, updateFields, isFirstStep }) {
  return (
    <>
      {isFirstStep && (
        <>
          <div className="mb-5">
            <label htmlFor="atv" className="mb-3 block text-sm font-medium text-gray-900" >
              ATV or Tour
            </label>
            <input type="text" name="atv" id="atv" placeholder="Coffe tour" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Vehicle} onChange={(e) => updateFields({ Vehicle: e.target.value })} />
            
            <span className="inline-block mt-2 text-[14px] font-medium text-gray-500">If you need an ATV, just mention "ATV" and we will provide you with prices by mail, as the ones shown may be reserved.</span>
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
