"use client" 

import { IoLocationOutline, MdOutlineDoorBack, MdOutlineBed, MdOutlineBathtub } from "@/icons/index";
import Image from "next/image";
import Link from "next/link";

export function HouseCard({ data, className, type = 1 }) {

  const { id, baths, beds, location, name, information, bedrooms, price, galleryImages } = data;

  return (
    <Link href={`/Vacation_rentals/${name.replace(/ /g, "-")}/${id}`} className={`${className} ${type === 1 ? null : "border border-border rounded-2xl hover:shadow-xl transition-shadow" } `}>
      <div className="rounded-xl overflow-hidden">
      <Image className="w-full h-56 bg-secondary object-cover transition-transform duration-500 hover:scale-110" src={galleryImages[0]} alt="image" width={350} height={250} loading="lazy" />
      </div>
     
      <div className="p-4 pt-2 mt-2 space-y-3">
        <div className="space-y-3">
        
        <div className="flex gap-5 text-sm"> 
        <div className="space-x-1.5">
        <span >{bedrooms}</span>
        <MdOutlineDoorBack fontSize={20} className="inline" />
        </div>
        <div className="space-x-1.5">
        <span >{beds}</span>
        <MdOutlineBed fontSize={20} className="inline" />
        </div>
        <div className="space-x-1.5">
        <span >{baths}</span>
        <MdOutlineBathtub fontSize={20} className="inline" />
        </div>
        </div>

        <div className="space-y-1">
            <span className="font-semibold capitalize text-dark text-base line-clamp-2">
              {name}
            </span>
            <p className="text-sm line-clamp-2">{information}</p>
          </div>
          
          <div className="flex items-center text-sm space-x-1.5">
              <IoLocationOutline fontSize={20} />
            <span>{location}</span>
          </div>
        </div>

        <div className="w-14 border-b border-border"></div>
       
        <span className="inline-block font-semibold text-dark">
            ${price} 
            <span className="font-normal text-text text-sm">
                / night
            </span>
        </span>
      </div>
    </Link>
  );
};
