"use client";

import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import toast from 'react-hot-toast';
import axios from "axios";
import { useState } from "react";

export function Book({firstCard = ""}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false)
  
  async function SendEmail() {
    try {
      setLoading(true);
      const res = await axios.post("/sendEmail", {
        name,
        email,
        service,
        phone
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("")
      setService("");
    }
  }

  return (
      <>
      <form
        className="form_book flex flex-col gap-5 w-full max-w-sm h-fit p-5 border rounded-xl lg:hidden"
        onSubmit={(e) => {
          e.preventDefault(), SendEmail();
        }}
      >
        <div className="flex items-center justify-center gap-3">
          <span className="font-medium text-center text-xl uppercase">
            Book Now!
          </span>
          <div
            className="tooltip"
            data-tip={"This is NOT a confirmation of your reservation."}
          >
            <IoMdInformationCircleOutline fontSize={"1.1em"} />
          </div>
        </div>

        <div>
        <label
        htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Full name
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="John Fitzgerald Kennedy"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div>
        <label
        htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="+506 4354 6865"
          
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="name@gmail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="sm:col-span-2">
      
            <label htmlFor="service" className="inline-block mb-2 font-[500] text-sm text-center text-gray-900">
            Paste here the activity/rent/tour you want to book
            </label>
           
            <input
          type="text"
          id="service"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder={firstCard}
          required
          onChange={(e) => setService(e.target.value)}
          value={service}
        />
      </div>

      <button
        className="btn btn-neutral text-white"
        disabled={loading}
      >
        {loading ? <span className="loading loading-spinner" /> : "Send"}
      </button>


      </form>

      <button className="btn btn-circle fixed bottom-5 right-5 hidden w-14 h-14 border text-white bg-green-500 shadow lg:block" onClick={() => {setOpen(true), document.documentElement.style.overflowY = "hidden" }} >Book</button>

      <div className={`hidden fixed top-0 left-0 z-50 items-center justify-center w-screen h-screen bg-[#00000073] transition-[visibility opacity] duration-700 lg:flex ${open ? "opacity-100" :"invisible opacity-0"}`}>
        
     <form className={`flex flex-col gap-3 w-full max-w-md p-5 rounded-xl mx-2 bg-white transition-transform duration-700
      ${open ? "translate-y-0" :"translate-y-[200%]"}`} onSubmit={(e) => {
          e.preventDefault(), SendEmail();
        }}>

          <div className="relative w-full  mb-3">
            <span className="inline-block w-full font-[600] text-center text-xl">Book now!</span>
            <IoClose className="absolute top-0 left-0" fontSize={"26px"} onClick={() => {setOpen(false), document.documentElement.style.overflowY = "auto" }} />
          </div>

        <div>
        <label
        htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Full name
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="John Fitzgerald Kennedy"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div>
        <label
        htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="+506 4354 6865"
          
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="name@gmail.com"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="sm:col-span-2">
      
            <label htmlFor="service" className="inline-block mb-2 font-[500] text-sm text-center text-gray-900">
            Paste here the activity/rent/tour you want to book
            </label>
           
            <input
          type="text"
          id="service"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder={firstCard}
          required
          onChange={(e) => setService(e.target.value)}
          value={service}
        />
      </div>

      <button
        className="btn btn-neutral text-white"
        disabled={loading}
      >
        {loading ? <span className="loading loading-spinner" /> : "Send"}
      </button>

      </form> 
      </div>
      
      </>
  );
}
