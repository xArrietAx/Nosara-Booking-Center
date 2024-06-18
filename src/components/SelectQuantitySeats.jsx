export function SelectQuantitySeats({ setPax }) {
    return <div className="w-full">
    <span className="block p-2 rounded-3xl cursor-pointer hover:bg-gray-50" onClick={() => setPax(4)}>4</span>
    <span className="block p-2 rounded-3xl cursor-pointer hover:bg-gray-50" onClick={() => setPax(6)}>6</span>
    </div>
}