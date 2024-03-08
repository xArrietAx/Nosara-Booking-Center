'use client'
 
import { createContext, useState } from 'react'
 
export const Context = createContext({})
 
export function ContextProvider({ children }) {

  const [products, setProducts] = useState([])

  const value = {products, setProducts}

  return <Context.Provider value={value} >{children}</Context.Provider>
}