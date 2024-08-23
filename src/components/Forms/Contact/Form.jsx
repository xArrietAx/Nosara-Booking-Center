"use client"

import { Textarea } from "@/shared/Textarea";
import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";
import { Label } from "@/shared/Label";
import toast from "react-hot-toast";
import { useState } from "react";

export function Form() {

  const [loading, setLoading] = useState(false)

  async function Submit(e) {
    try {
      e.preventDefault()
      setLoading(true)
      const formData = new FormData(e.target) 
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message")   
      }
       const res = await fetch("/sendContactEmail", {
        method:"POST",
        body:JSON.stringify(data)
       })
       if (!res.ok) {
        throw new Error("Failed to send the email");
       }
       const jsonData = await res.json()
       toast.success(jsonData.message);
     } catch (error) {
       toast.error(error?.message);
     } finally {
      setLoading(false)
     }
   }

  return (
    <form onSubmit={Submit} className="grid gap-6">

      <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-3">
        <div>
          <Label htmlFor="name">
            Full name
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="example@gmail.com"           
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subject">
          Subject
        </Label>
        <Input
          id="subject"
          type="text"
          name="subject"
          required
          placeholder="Inquiry about..."          
        />
      </div>

      <div>
        <Label htmlFor="message">
          Message
        </Label>
        <Textarea
          id="message"
          type="text"
          required
          name="message"
        />
      </div>

      <Button type="submit" className="px-16 sm:ml-auto sm:w-fit" loading={loading}>Send</Button>

    </form>
  );
}
