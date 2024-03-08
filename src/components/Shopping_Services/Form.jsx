"use client";

import axios from "axios";
import { useState } from "react";

export function Form() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <form className="space-y-8">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900" >
          Name
        </label>
        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="John Fitzgerald Kennedy" required value={name} onChange={e => setName(e.target.value)}  />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900" >
          Email
        </label>
        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900" >
          Phone number
        </label>
        <input type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="+506 4354 6865" required value={phone} onChange={e => setPhone(e.target.value)} />
      </div>

      <div className="space-y-2">
        <label htmlFor="MoreProducts" className="font-[600]">
          Use this field for comments or more products you need.
        </label>
        <textarea id="MoreProducts" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a message..." value={message} onChange={e => setMessage(e.target.value)} />
      </div>

      



      <button className="btn btn-neutral w-44 text-white sm:w-full">Send</button>
    </form>
  );
}
