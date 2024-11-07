import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";
import { useState } from "react";

export function Chatbox({ isOpen, setIsOpen }) {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`whatsapp__chatbox chatbox ${
        isOpen ? "whatsapp__chatbox--open" : "whatsapp__chatbox--close"
      }`}
    >
      <Header setIsOpen={setIsOpen} />
      <Body isOpen={isOpen} isLoading={isLoading} setIsLoading={setIsLoading} />
      <Footer isLoading={isLoading} />
    </div>
  );
}

