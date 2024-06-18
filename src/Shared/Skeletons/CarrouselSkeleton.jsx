export function CarrouselSkeleton() {
    return <div className="flex gap-5">
        {[...Array(4).keys()].map((item, i) => {
            return <div key={i + Date + Math.random()} className={`custom-skeleton w-full h-56 ${i === 1 ? "hidden min-[481px]:block" :"" } ${i === 2 ? "hidden md:block" :"" } ${i === 3 ? "hidden lg:block" : "" }`} />        
        })}
    </div>    
}