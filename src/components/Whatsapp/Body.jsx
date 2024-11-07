import { useEffect, useState } from "react";

export function Body({ isOpen, isLoading, setIsLoading }) {

  const [timeStarted, setTimeStarted] = useState(false)

  useEffect(() => {
    if (timeStarted) return

    let timer;

    if (isOpen) {
      setIsLoading(true);
      
      timer = setTimeout(() => {
        setIsLoading(false);
        setTimeStarted(true)
      }, 2000);
    }
  
    return () => clearTimeout(timer);
  }, [isOpen]); 

  return (
    <div className="chatbox__body">
      {isLoading ? <IsWriting /> : <Message />}
    </div>
  );
}

function Message() {
  return (
    <div className="chatbox__message">
      <span className="chatbox__triangle" />
      <span>Nosara Booking Center</span>
      <p>Hello there! 🤝 <br />How can we help?</p>
      <div className="chatbox__time">
        <span>
          {new Date()
            .toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
            .toUpperCase()}
        </span>
        <span className="ml-1">
          <svg viewBox="0 0 16 15" width="16" height="15">
            <path
              fill="currentColor"
              d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

function IsWriting() {
  return (
    <div className="chatbox__bubble">
      <div className="chatbox__typing">
        <div className="chatbox__dot" />
        <div className="chatbox__dot" />
        <div className="chatbox__dot" />
      </div>
    </div>
  );
}