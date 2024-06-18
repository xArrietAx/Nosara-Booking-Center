import { useState, useRef, useEffect } from "react";

export function TextInput({ value, setValue, Icon, placeholder, desc }) {
    
    const IconComponent = Icon

    const containerRef = useRef(null);
    const inputRef = useRef(null);

    const [focus, setFocus] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setFocus(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (focus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [focus]);

    return (
        <div className="relative flex w-[350px]" ref={containerRef} onClick={() => setFocus(true)} >
            <div className={`flex z-10 flex-1 relative flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left p-8 ${focus ? "rounded-full shadow-2xl" : "" }`} >
                <IconComponent fontSize={25} color="#d4d4d4" />
                <div className="flex-grow">
                    <input
                        ref={inputRef}
                        className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-gray-300 xl:text-lg font-semibold placeholder-gray-800 truncate"
                        placeholder={placeholder}
                        required
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <span className="block mt-0.5 text-sm text-gray-400">
                        <span className="line-clamp-1">{desc}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}