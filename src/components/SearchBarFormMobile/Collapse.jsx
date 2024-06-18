import { useState } from "react";

export function Collapse({isChecked, children, title, alterTitle, value, defaultValue }) {

  const [checked, setchecked] = useState(isChecked || false)

  return (
    <>
    <div className="collapse w-[95%] mx-auto border shadow">
    <input type="checkbox" readOnly checked={checked} onClick={() => setchecked(!checked)}/>
    <div className="collapse-title flex justify-between text-sm font-medium">
      <span className={checked ? "font-semibold text-xl sm:text-2xl" : "text-gray-500" }>{checked ? title : alterTitle}</span>
      {!checked && <span>{value ? value : defaultValue}</span>} 
    </div>
    <div className="collapse-content">
      <div className="flex items-center gap-2 w-full">
        {children}
      </div>
    </div>
  </div> 
    </>
  )
}
