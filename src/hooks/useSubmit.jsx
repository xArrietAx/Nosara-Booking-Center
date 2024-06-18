import { filterEmptyValues } from "@/utils/filterEmptyValues";
import { Context } from "@/context/useContext";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export function useSubmit(type) {

    const [loading, setLoading] = useState(false);

    const { formData } = useContext(Context)

    async function Submit({e, reset, service}) {
      try {
         e.preventDefault()
          setLoading(true);
         const filteredFormData = filterEmptyValues(formData);

         filteredFormData.type = type
        
         { service ? (filteredFormData.service = service.replace(
            /([a-z])([A-Z])/g,
             "$1 $2"
          )) : ( delete filteredFormData.startDate, delete filteredFormData.endDate ) }
         
         const res = await axios.post("/sendEmail", filteredFormData);
         toast.success(res?.data?.message);
       } catch (error) {
         toast.error(error?.response?.data?.message);
       } finally {
         setLoading(false);
         reset();
       }
     }
 
     return { Submit, loading }
 
}