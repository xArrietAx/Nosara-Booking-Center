"use client"

import { InputPhone } from "@/components/InputPhone";
import { Textarea } from "@/shared/Textarea";
import { MdWhatsapp } from "@/icons/index";
import { Badge } from "@/components/Badge";
import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";
import { Label } from "@/shared/Label";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Form({ service }) {

  const [loading, setLoading] = useState(false)

    async function Submit(e) {
        try {
          e.preventDefault()
          setLoading(true)
          const formData = new FormData(e.target) 
          const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message")   
          }
          data.service = service
           const res = await fetch("/sendBookingEmail", {
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

   return <form className="grid gap-6" onSubmit={Submit} >

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
          required
          name="email"
          placeholder="example@gmail.com"
        />
      </div>

      <InputPhone />

      <div>
        <Label htmlFor="message" >
          Message <Badge>Optional</Badge>
        </Label>
        <Textarea id="message" name="message" />
      </div>

      <div className="flex items-center justify-between">
      <Button loading={loading}>
        I'm interested
      </Button>

      <a href={`https://api.whatsapp.com/send/?phone=50686012266`} target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-opacity-80" aria-label="Chat with us on WhatsApp">
        <MdWhatsapp fontSize={26} color="white" />
      </a>
      </div>

    </form>
}