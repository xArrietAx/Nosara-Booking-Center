"use client";
import axios from "axios";
import { useState } from "react";

export function Form() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showToast, setShowToast] = useState(false);

  async function SendEmail() {
    try {
      setLoading(true);
      setShowToast(true)
      const res = await axios.post("/sendEmail", {
        name,
        email,
        subject,
        message,
      });
      setSuccess(res.data.message);
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setTimeout(() => {
        setError("");
        setSuccess("");
        setShowToast(false)
      }, 4000);
      setLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  return (
    <form
      className="space-y-8 w-[75%] lg:w-full"
      onSubmit={(e) => {
        e.preventDefault(), SendEmail();
      }}
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="John Fitzgerald Kennedy"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Let us know how we can help you"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button
        className="btn btn-neutral w-44 text-white sm:w-full"
        disabled={loading}
      >
        {loading ? <span className="loading loading-spinner" /> : "Send"}
      </button>

     <Toast showToast={showToast} success={success} error={error} />

    </form>
  );
}

function Toast({showToast, success, error}) {
  return <>
   {showToast ? (
        error ? (
          <div className="toast toast-center">
            <div className="alert alert-error">
              <span className="text-white">{error}</span>
            </div>
          </div>
        ) : (
          <div className={`toast toast-center ${success ? null : "hidden"}`}>
            <div className="alert alert-success">
              <span className="text-white">{success}</span>
            </div>
          </div>
        )
      ) : null}
  </>
}
