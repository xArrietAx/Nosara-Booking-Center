import { Select } from "../Select"
import { useRef, useEffect, useState } from "react";

export function ChooseInput({ children = () => {}, value, onClick, title, list, placeholder}) {

  const containerRef = useRef(null)

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setFocus(false);
        }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}, []);

    return <div className="input_container">
    <label className="input_label">
      {title}
    </label>
    <div ref={containerRef}>
    <Select  value={value} list={list} ButtonOnClick={() => setFocus(true)} Button={item => <input placeholder={placeholder} className={`input_field placeholder-black pointer-events-none caret-transparent ${focus ? "!border-transparent !bg-transparent shadow-[0px_0px_0px_2px_#242424]" : ""}`} required value={value} onChange={() => {}} />} onClick={(item) => {return onClick(item), setFocus(false)}} >
      {item => children(item)}
    </Select>
    </div>
  </div>
}
