export function ZipLineForm({ Adults, Children, Time, Day, Information, updateFields, isFirstStep }) {
  return (
    <>
      {isFirstStep && (
        <>
          <div className="mb-5">
            <label htmlFor="adults" className="mb-3 block text-sm font-medium text-gray-900" >
            Adults
            </label>
            <input type="number" name="adults" id="adults" placeholder="2" max="10" min="1" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Adults} onChange={(e) => updateFields({ Adults: e.target.value })} />
          </div>
          <div className="mb-5">
            <label htmlFor="children" className="mb-3 block text-sm font-medium text-gray-900" >
            Children
            </label>
            <input type="number" name="children" id="children" placeholder="3" max="10" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Children} onChange={(e) => updateFields({ Children: e.target.value })} />
          </div>
        </>
      )}

      {!isFirstStep && (
        <>
          <div className="mb-5">
            <label htmlFor="day" className="mb-3 block text-sm font-medium text-gray-900" >
              Day
            </label>
            <input type="date" name="day" id="day" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Day} onChange={e => updateFields({Day: e.target.value})} />
          </div>

          <div className="mb-5">
            <label htmlFor="time" className="mb-3 block text-sm font-medium text-gray-900" >
              Time
            </label>
            <select id="time" name="time" className="select select-bordered w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm focus:outline-none focus:border-[#121213] focus:shadow-md" required value={Time} onChange={e => updateFields({Time: e.target.value})} >
            <option value="">Select the time</option>
              <option value={"Morning 7:30 - 11:30"}>Morning 7:30 - 11:30</option>
              <option value={"Afternoon 12:30 - 4:30"}>Afternoon 12:30 - 4:30</option>
            </select>
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
