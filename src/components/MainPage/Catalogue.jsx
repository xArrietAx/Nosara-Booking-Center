import { Suspense } from "react";
import { Providers } from "../Services/Providers";
import { Skeleton } from "../Skeletons/CatalogueSkeleton";

export const Catalogue = () => {
  return (
  <section className="container">
      <div className='flex flex-col gap-14 xs:mt-10'>
      <div className='flex items-center justify-center gap-5 md:flex-col' >
        
        <h2 className='font-[600] text-center text-[2em] sm:text-2xl'>
        Explore and Book
        </h2>

        <p className="font-[400] text-xl sm:text-base" >
        Variety of activities at nosara
        </p>

      </div>
      <Suspense fallback={<Skeleton />}>
        <Providers />
      </Suspense>
    </div>
  </section>
  )
}