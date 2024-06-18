export function ButtonInput({title, desc, Icon}) {
    return <>
     <div className="text-gray-300">
          {Icon}
        </div>
        <div className="flex-grow text-left">
          <span className="block xl:text-lg font-semibold">
            {title}
          </span>
          <span className="block mt-1 text-sm text-gray-400 leading-none">
           {desc}
          </span>
        </div>
    </>
}