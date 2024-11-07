import { MdSend } from "@/icons/index";
import { useState } from "react";
import toast from "react-hot-toast";

export function Footer({ isLoading }) {

  const [message, setMessage] = useState("");

  function Submit(e) {
    e.preventDefault();

    if (!message) {
      return toast.error("Type a message")
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/50686012266?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setMessage("")
  }

  return (
    <div className="chatbox__footer">
      <form onSubmit={Submit}>
        <input
          placeholder="Type a message.."
          dir="auto"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="text-[#919191] disabled:text-opacity-50"
        >
          <MdSend className="size-9" />
        </button>
      </form>
    </div>
  );
}
