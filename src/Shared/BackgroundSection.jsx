export function BackgroundSection({ className = "bg-gray-50", children}){
    return (
      <div className={`absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${className}`} >
        {children}
      </div>
    );
  };