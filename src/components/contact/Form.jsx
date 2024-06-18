"use client"

import { Context } from "@/Context/useContext";
import { useSubmit } from "@/hooks/useSubmit";
import { useContext, useEffect } from "react";
import emailTypes from "@/config/emailTypes.json";
import { Button } from "@/Shared/Button";

export function Form() {

  const { resetFormData, resetContactForm, name, setName, email, setEmail, subject, setSubject, message, setMessage } = useContext(Context)

  useEffect(() => {
    resetFormData()
  }, [])

  const { Submit, loading } = useSubmit(emailTypes.Contact)

  return (
      <form className="grid grid-cols-1 gap-6" onSubmit={e => Submit({ e, reset: resetContactForm })} >
       
       <div className="input_container">
         <label htmlFor="full-name" className="input_label">
           Full name
         </label>
         <input
           id="full-name"
           className="input_field"
           type="text"
           name="full-name"
           placeholder="Enter your full name"
           required
           value={name}
           onChange={e => setName(e.target.value)}
         />
       </div>

       <div className="input_container">
         <label htmlFor="email" className="input_label">
           Email
         </label>
         <input
           id="email"
           className="input_field"
           type="text"
           name="email"
           placeholder="example@gmail.com"
           required
           value={email}
           onChange={e => setEmail(e.target.value)}
         />
       </div>

       <div className="input_container">
         <label htmlFor="subject" className="input_label">
           Subject
         </label>
         <input
           id="subject"
           className="input_field"
           type="text"
           name="subject"
           placeholder="Inquiry about..."
           required
           value={subject}
           onChange={e => setSubject(e.target.value)}
         />
       </div>

       <div className="input_container">
         <label htmlFor="textarea" className="input_label">
           Message
         </label>
         <textarea
           rows={6}
           id="textarea"
           className="input_field min-h-40"
           type="text"
           name="textarea"
           required
           value={message}
           onChange={e => setMessage(e.target.value)}
         />
       </div>

       <Button className="w-[200px]" loading={loading} >
       Send Message
       </Button>
       
     </form>
  );
}