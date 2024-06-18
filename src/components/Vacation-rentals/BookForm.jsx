"use client";

import { Context } from "@/Context/useContext";
import { useSubmit } from "@/hooks/useSubmit";
import emailTypes from "@/config/emailTypes";
import { InputPhone } from "../InputPhone";
import { FaWhatsapp } from "@/utils/Icons";
import { Button } from "@/Shared/Button";
import { useContext } from "react";

export function BookForm({ service }) {
  const { resetFormData, name, setName, email, setEmail, message, setMessage } =
    useContext(Context);

  const { Submit, loading } = useSubmit(emailTypes.Book);

  return (
    <form
      className="grid grid-cols-1 gap-6"
      onSubmit={e => Submit({ e, reset: resetFormData, service: service })}
    >
      <div className="input_container">
        <label htmlFor="full-name" className="input_label">
          Full name
        </label>
        <input
          id="full-name"
          className="input_field"
          type="text"
          name="full-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jhon"
        />
      </div>

      <div className="input_container">
        <label htmlFor="email" className="input_label">
          Email
        </label>
        <input
          id="email"
          className="input_field"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="example@gmail.com"
        />
      </div>

      <InputPhone />

      <div className="input_container">
        <label htmlFor="textarea" className="input_label">
          Message
        </label>
        <textarea
          rows={6}
          id="textarea"
          className="input_field min-h-40"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="textarea"
        />
      </div>
      <div className="flex justify-between">
      <Button className="max-w-[200px]" loading={loading}>
        {"I'm interested"}
      </Button>

      <a href={`https://api.whatsapp.com/send/?phone=50686012266&text=Hi, I am interested in this home: ${service}`} target="_blank" className="btn btn-circle bg-green-500 hover:bg-green-600">
        <FaWhatsapp fontSize={26} color="white" />
      </a>
      </div>
    </form>
  );
}
