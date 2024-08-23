export function ButtonInput({title, desc, Icon}) {
    return <>
     <div className="text-text/20">
          {Icon}
        </div>
        <div className="flex-grow text-left">
          <span className="block font-semibold text-dark text-lg">
            {title}
          </span>
          <span className="block mt-1 text-sm text-text/60 leading-none">
           {desc}
          </span>
        </div>
    </>
}