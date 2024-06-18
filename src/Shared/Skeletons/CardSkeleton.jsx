export function CardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(8).keys()].map((item, i) => {
          return <div key={i + Date + Math.random()} className="flex flex-col gap-4">
          <div className="custom-skeleton h-56 w-full"></div>
          <div className="flex justify-between max-w-[220px]">
          <div className="custom-skeleton h-4 w-16"></div>
          <div className="custom-skeleton h-4 w-16"></div>
          <div className="custom-skeleton h-4 w-16"></div>
          </div>
          <div className="custom-skeleton h-4 w-full"></div>
          <div className="custom-skeleton h-4 w-full"></div>
        </div>
        })}
    </div>
  )
}
