export function ShuttleForm({ Pax, PickUp, DepartureTime, DropOff, Surfboard, Airline, FlighNumber, ArrivalTime, Luggages, Day, Information, updateFields, isFirstStep, currentStep }) {

    // recuerde preguntar por silla para niños menores

  return (
    <>
      {isFirstStep && (
        <>
         
          <div className="mb-5">
            <label htmlFor="day" className="mb-3 block text-sm font-medium text-gray-900" >
              Date
            </label>
            <input type="date" name="day" id="day" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Day} onChange={(e) => updateFields({ Day: e.target.value })} />
          </div>

          <div className="mb-5">
            <label htmlFor="pax" className="mb-3 block text-sm font-medium text-gray-900" >
              Pax
            </label>
            <input type="number" name="pax" id="pax" placeholder="3" min="1" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Pax} onChange={(e) => updateFields({ Pax: e.target.value })} />
          </div>
        </>
      )}

      {currentStep === 1 && (
        <>

<div className="mb-5">
            <label htmlFor="pickUp" className="mb-3 block text-sm font-medium text-gray-900"
            >
              Pick Up (Airport, House, Hotel, etc.)
            </label>
            <input type="text" name="pickUp" id="pickUp" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={PickUp} onChange={(e) => updateFields({ PickUp: e.target.value })} />
          </div>

          <div className="mb-5">
            <label htmlFor="dropOff" className="mb-3 block text-sm font-medium text-gray-900" >
              Drop off (Airport, House, Hotel, etc.)
            </label>
            <input type="text" name="dropOff" id="dropOff" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={DropOff} onChange={(e) => updateFields({ DropOff: e.target.value })} />
          </div>

          <div className="mb-5">
            <label htmlFor="departureTime" className="mb-3 block text-sm font-medium text-gray-900" >
            Departure time 
            </label>
            <input type="time" name="departureTime" id="departureTime" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={DepartureTime} onChange={e => updateFields({DepartureTime: e.target.value })} />
          </div>

          <div className="mb-5">
            <label htmlFor="luggages" className="mb-3 block text-sm font-medium text-gray-900" >
            Luggages
            </label>
            <input type="number" name="luggages" id="luggages" placeholder="3" max="10" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Luggages} onChange={(e) => updateFields({ Luggages: e.target.value })} />
          </div>

          <div className="mb-5">
            <label htmlFor="surfboard" className="mb-3 block text-sm font-medium text-gray-900" >
            Surfboard
            </label>
            <input type="number" name="surfboard" id="surfboard" placeholder="3" max="10" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" required value={Surfboard} onChange={(e) => updateFields({ Surfboard: e.target.value })} />
          </div>

        </>
      )}

      {currentStep === 2 && (
        <>
          <div className="mb-5">
            <label htmlFor="airline" className="mb-3 block text-sm font-medium text-gray-900" >
            Airline <span className="badge badge-sm badge-neutral">Optional</span>
            </label>
            <input type="text" name="airline" id="airline" placeholder="American Airlines" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" value={Airline} onChange={(e) => updateFields({ Airline: e.target.value })} />
          </div>

<div className="mb-5">
            <label htmlFor="flighNumber" className="mb-3 block text-sm font-medium text-gray-900" >
            Fligh number <span className="badge badge-sm badge-neutral">Optional</span>
            </label>
            <input type="text" name="flighNumber" id="flighNumber" placeholder="1766" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" value={FlighNumber} onChange={(e) => updateFields({ FlighNumber: e.target.value })} />
          </div>
        
        <div className="mb-5">
            <label htmlFor="ArrivalTime" className="mb-3 block text-sm font-medium text-gray-900" >
            Arrival time <span className="badge badge-sm badge-neutral">Optional</span>
            </label>
            <input type="time" name="ArrivalTime" id="ArrivalTime" min="0" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-sm outline-none focus:border-[#121213] focus:shadow-md" value={ArrivalTime} onChange={e => updateFields({ArrivalTime: e.target.value})} />
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
