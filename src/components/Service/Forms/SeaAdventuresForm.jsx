export function SeaAdventuresForm({ Adults, Children, Day, SeaAdventure, Information, updateFields, isFirstStep }) {

  return (
    <>
      {isFirstStep && (
        <>
          <div className="mb-5">
            <label htmlFor="sea adventure" className="mb-3 block text-sm font-medium text-gray-900" >
            Sea adventure name
            </label>
            <input type="text" name="sea adventure" id="sea adventure" placeholder="Sport Fishing (Small boat)" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={SeaAdventure} onChange={(e) => updateFields({ SeaAdventure: e.target.value })} />
          </div>
        </>
      )}

      {!isFirstStep && (
        <>
          <div className="mb-5">
            <label htmlFor="day" className="mb-3 block text-sm font-medium text-gray-900" >
              Day
            </label>
            <input type="date" name="day" id="day" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Day} onChange={(e) => updateFields({ Day: e.target.value })} />
          </div>

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
