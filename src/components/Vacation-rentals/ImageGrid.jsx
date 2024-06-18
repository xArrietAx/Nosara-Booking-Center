"use client"

import { usePathname, useRouter } from "next/navigation";
import { HiOutlineSquares2X2 } from "@/utils/Icons";
import Image from "next/image";

export function ImageGrid({ data }) {

  const router = useRouter();
  const thisPathname = usePathname();

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE`);
  };

  return (
    <header className="rounded-md sm:rounded-xl">
      <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 h-[230px] min-[340px]:h-[300px] sm:gap-2 sm:h-[260px] md:h-[310px] lg:h-[410px] xl:h-[530px]">
        <div className="w-full h-full col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer" onClick={handleOpenModalImageGallery} >
          <Image className="w-full h-full object-cover" src={data[0]} alt="Image" width={2000} height={2000} priority />
          <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
        </div>
        {data.filter((_, i) => i >= 1 && i < 5).map((item, index) => {
          return <div key={index + Date + Math.random()} className={`relative rounded-md sm:rounded-xl overflow-hidden bg-gray-50 ${index >= 3 ? "hidden sm:block" : "" }`} >
          <div className="w-full h-full aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
            <Image className="w-full h-full object-cover rounded-md sm:rounded-xl" src={item} alt={`image ${index}`} width={2000} height={2000} priority />
          </div>
          <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={handleOpenModalImageGallery} />
        </div>
        })}
        <ShowAllPhotos onClick={handleOpenModalImageGallery} />
      </div>
    </header>
  );
}

function ShowAllPhotos({ onClick }) {
  return (
    <button
      className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
      onClick={onClick}
    >
      <HiOutlineSquares2X2 className="w-5 h-5" />
      <span className="ml-2 text-neutral-800 text-sm font-medium">
        Show all photos
      </span>
    </button>
  );
}