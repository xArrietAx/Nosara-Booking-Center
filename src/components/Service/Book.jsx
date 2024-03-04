"use client";

import { IoMdInformationCircleOutline } from "react-icons/io";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";

export function Book({firstCard = ""}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  
  const {ResetTimeOut, Toast, setShowToast, setSuccess ,setError} = useToast()

  async function SendEmail() {
    try {
      setLoading(true);
      setShowToast(true)
      const res = await axios.post("/sendEmail", {
        name,
        email,
        service,
        phone
      });
      setSuccess(res.data.message);
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      ResetTimeOut()
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("")
      setService("");
    }
  }

  return (
    <div className="form_book sticky top-3 w-full max-w-sm h-fit p-5 border rounded-2xl bg-white sm:border-none sm:max-w-none lg:hidden">
      <form
        className="flex flex-col gap-5"
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
          type="text"
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

      <Toast />

      </form>
    </div>
  );
}
