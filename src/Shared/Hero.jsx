import { IoLocationOutline, LuMountain } from "@/icons/index";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";

export function Hero({ title, location, category, totalCount, image }) {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:items-center pt-10 lg:pt-16 lg:pb-16">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h1 className="hero_title">{title}</h1>
          <div className="flex items-center text-base md:text-lg">
            <IoLocationOutline className="text-[1.5rem]" />
            <span className="ml-2.5">{location}</span>
            <span className="mx-5"></span>
            <LuMountain className="text-[1.5rem]" />
            <span className="ml-2.5">
              {totalCount} {category}
            </span>
          </div>
        </div>
        <div className="flex-grow">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            priority
          />
        </div>
      </div>

      <div className="hidden lg:flow-root w-full">
        <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
