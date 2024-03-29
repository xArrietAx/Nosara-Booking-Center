"use client";

import { createContext, useState } from "react";

export const Context = createContext({});

export function ContextProvider({ children }) {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pax, setPax] = useState("")
  const [serviceName, setServiceName] = useState("")

  function FormReset() {
    return (setName(""), setPhone(""), setEmail(""), setPax(""), setServiceName(""))
  }

  const FormData = {name, phone, email, pax, serviceName}
  
  const value = {
    products,
    setProducts,
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    pax, 
    setPax,
    serviceName, 
    setServiceName,
    FormData,
    FormReset
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
