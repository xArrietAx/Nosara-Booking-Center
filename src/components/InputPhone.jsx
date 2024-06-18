import { Context } from "@/context/useContext";
import { useState, useRef, useEffect, useContext } from "react";
import { PhoneInput } from 'react-international-phone';

export function InputPhone() {

    const [focus, setFocus] = useState(false)
    const containerRef = useRef(null);

  const  { phone, setPhone } = useContext(Context)

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

    return  <div className="input_container">
    <label htmlFor="phone" className="input_label">
      Phone <div className="badge badge-primary text-white">optional</div>
    </label>
    <div onClick={() => setFocus(true)} ref={containerRef} >
    <PhoneInput defaultCountry="us" className={`input_field !pl-1 ${focus ? "!border-transparent !bg-transparent shadow-[0px_0px_0px_2px_#242424]" : ""}`} inputProps={{id:"phone", name:"Phone"}} value={phone} onChange={value => setPhone(value)} />
    </div>
  </div>
}