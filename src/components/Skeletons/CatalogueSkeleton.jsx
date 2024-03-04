export function Skeleton() {
    return <div className="grid">
      {[...Array(10).keys()].map((ele, i) => {
          return <div className="skeleton flex flex-col items-center justify-center gap-5 w-full min-h-[250px] h-full" key={i + Date + Math.random()}>
          <div className="w-24 h-24 rounded-full bg-white"></div>
          <div className="w-44 h-8 rounded-lg bg-white" ></div>
        </div>
        })}
    </div>
}