import { useState, useRef, useEffect, useContext } from "react";
import { PhoneInput } from 'react-international-phone';
import { Context } from "@/Context/useBookingContext";
import { Badge } from "./Badge";

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

    return  <div className="space-y-2">
    <label htmlFor="phone" className="form-label">
      Phone <Badge>Optional</Badge>
    </label>
    <div onClick={() => setFocus(true)} ref={containerRef} >
    <PhoneInput defaultCountry="us" className={`!pl-1 py-1 border rounded-lg text-dark ${focus ? "border-primary/70 ring ring-opacity-20 ring-primary" : ""}`} inputProps={{id:"phone", name:"phone"}} value={phone} onChange={value => setPhone(value)} />
    </div>
  </div>
}