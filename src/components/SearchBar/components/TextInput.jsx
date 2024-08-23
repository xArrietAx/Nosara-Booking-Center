import { useState, useRef, useEffect } from "react";

export function TextInput({ value, setValue, Icon, title, desc }) {
    
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
        <div className="relative flex w-[320px]" ref={containerRef} onClick={() => setFocus(true)} >
            <div className={`flex z-10 flex-1 relative flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left p-8 ${focus ? "rounded-full shadow-2xl" : "" }`} >
                <IconComponent className="size-8 text-text/20" />
                <div className="flex-grow">
                    <input
                        ref={inputRef}
                        className="block w-full border-none p-0 bg-transparent font-semibold text-dark text-lg truncate placeholder:text-dark focus:placeholder:text-text/20 focus:outline-none focus:ring-0"
                        placeholder={title}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required
                    />
                    <span className="block mt-0.5 text-sm text-text/60">
                        <span className="line-clamp-1">{desc}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}