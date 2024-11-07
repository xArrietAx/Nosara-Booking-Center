"use client";

import { MdWhatsapp } from "@/icons/index";
import { Chatbox } from "./ChatBox";
import { useState } from "react";

export function Whatsapp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="whatsapp">
      <Chatbox isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="whatsapp__btn" onClick={() => setIsOpen(true)}>
        <MdWhatsapp className="text-white size-10" />
      </div>
    </div>
  );
}