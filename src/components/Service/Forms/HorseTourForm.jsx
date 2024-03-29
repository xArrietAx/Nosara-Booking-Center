export function HorseTourForm({ Day, Pax, HorseActivity, Information, updateFields, isFirstStep }) {
    return (
      <>
        {isFirstStep && (
          <>
            <div className="mb-5">
              <label htmlFor="activity" className="mb-3 block text-sm font-medium text-gray-900" >
                Activity name
              </label>
              <input type="text" name="activity" id="activity" placeholder="Horse Classes" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={HorseActivity} onChange={(e) => updateFields({ HorseActivity: e.target.value })} />
            </div>
  
            <div className="mb-5">
              <label htmlFor="pax" className="mb-3 block text-sm font-medium text-gray-900" >
                How many people?
              </label>
              <input type="number" name="pax" id="pax" placeholder="3" max="35" min="1" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Pax} onChange={(e) => updateFields({ Pax: e.target.value })} />
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
  