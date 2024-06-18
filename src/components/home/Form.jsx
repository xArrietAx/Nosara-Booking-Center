"use client"

import { Context } from "@/Context/useContext";
import { useSubmit } from "@/hooks/useSubmit";
import { useContext, useEffect } from "react";
import { Button } from "@/Shared/Button";
import emailTypes from "@/config/emailTypes";

export function Form() {

  const { resetFormData, resetContactForm, email, setEmail } = useContext(Context)

  useEffect(() => {
    resetFormData()
  }, [])

  const { Submit, loading } = useSubmit(emailTypes.PublishHouse)

  return (
    <form className="flex items-center gap-5 max-w-[500px] mx-auto mt-10" onSubmit={e => Submit({ e, reset: resetContactForm })}>
    <label htmlFor="email-address" className="sr-only">
      Email address
    </label>
         <input
           id="email"
           className="input_field !h-[48px] !rounded-none"
           type="email"
           name="email"
           placeholder="Enter your email"
           required
           value={email}
           onChange={e => setEmail(e.target.value)}
         />
    <Button className="w-[150px] !rounded-none" loading={loading} >
     Send 
   </Button>
  </form>
  );
}