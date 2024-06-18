"use client";

import { useContext } from "react";
import { InputPhone } from "../InputPhone";
import { Context } from "@/context/useContext";
import { Button } from "@/Shared/Button";
import { useSubmit } from "@/hooks/useSubmit";

export function BookForm({children, serviceOrHouse, phone = true }) {
    
  const { name, setName, email, setEmail, message, setMessage } = useContext(Context);

  const { Submit, loading } = useSubmit()

  return (
    <form className="grid grid-cols-1 gap-6" onSubmit={e => Submit({ e, reset: resetContactForm })}>
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

      {phone && <InputPhone />}

      {children}

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

      <Button className="max-w-[200px]">{"I'm interested"}</Button>
    </form>
  );
}
