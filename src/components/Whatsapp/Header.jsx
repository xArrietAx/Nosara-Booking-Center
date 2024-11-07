import { IoClose } from "@/icons/index";

export function Header({ setIsOpen }) {
    return (
      <div className="chatbox__header">
        <div className="chatbox__avatar">
          <img src="/Logo.png" width="60" height="60" alt="whatsapp-avatar" />
        </div>
        <div className="chatbox__details">
          <span>Nosara Booking Center</span>
          <p>
            Typically replies within 1 hour
          </p>
        </div>
        <IoClose
          className="bg-hover mx-auto text-white size-7 hover:!bg-[#0e4d45]"
          onClick={() => setIsOpen(false)}
        />
      </div>
    );
  }