import { SelectDate } from "./SelectDate";

export function ShuttleForm({ startDate, setStartDate, destination, setDestination, adultsInput, setAdultsInput, childrenInput, setChildrenInput, departureTime, setDepartureTime, luggages, setLuggages, surfboard, setSurfboard, airline, setAirline, flighNumber, setFlighNumber, arrivalTime, setArrivalTime }) {
    return <>
    
        <div className="input_container">
          <label className="input_label">
            Destination
          </label>
          <input
            className="input_field"
            type="text"
            required
            placeholder="Nosara - Liberia airport"
            value={destination}
            onChange={e => setDestination(e.target.value)}
          />
        </div>

        <SelectDate label="Choose date" placeholder="Choose pick up date" value={startDate} setValue={setStartDate}/>

        <div className="input_container">
          <label className="input_label">
            Adults
          </label>
          <input
            className="input_field"
            type="number"
            required
            min={1}
            placeholder="How many adults?"
            value={ adultsInput === 0 ? "" : adultsInput }
            onChange={e => setAdultsInput(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label">
            Children
          </label>
          <input
            className="input_field"
            required
            type="number"
            min={0}
            placeholder="How many children?"
            value={childrenInput === 0 ? "" : childrenInput}
            onChange={e => setChildrenInput(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label">
          Departure time
          </label>
          <input
            className="input_field"
            type="time"
            required
            placeholder="What is your departure time?"
            value={departureTime}
            onChange={e => setDepartureTime(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label">
          Luggages
          </label>
          <input
            className="input_field"
            type="number"
            required
            min={0}
            placeholder="How many luggages do you have?"
            value={luggages}
            onChange={e => setLuggages(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label">
          Surfboard
          </label>
          <input
            className="input_field"
            type="number"
            required
            min={0}
            placeholder="How many surfboard do you have?"
            value={surfboard}
            onChange={e => setSurfboard(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label">
          Airline <div className="badge badge-primary text-white">optional</div>
          </label>
          <input
            className="input_field"
            type="text"
            placeholder="American Airlines"
            value={airline}
            onChange={e => setAirline(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label">
           Fligh number <div className="badge badge-primary text-white">optional</div>
          </label>
          <input
            className="input_field"
            type="text"
            placeholder="1766"
            value={flighNumber}
            onChange={e => setFlighNumber(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label">
           Arrival time <div className="badge badge-primary text-white">optional</div>
          </label>
          <input
            className="input_field"
            type="time"
            placeholder="What is your departure time?"
            value={arrivalTime}
            onChange={e => setArrivalTime(e.target.value)}
          />
        </div>
        
    </>
}