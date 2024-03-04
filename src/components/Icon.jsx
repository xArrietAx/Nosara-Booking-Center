export const Icon = ({children, onClick, className}) => {
  return (
    <div className={`flex items-center justify-center w-fit rounded-full hover:bg-[#f3f4f6] cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}