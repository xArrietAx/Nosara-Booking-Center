"use client"

import { IoLocationOutline, MdOutlineDoorBack, MdOutlineBed, MdOutlineBathtub } from "@/utils/Icons";
import Image from "next/image";
import Link from "next/link";

export function StayCard({ data, className }) {

  const { id, baths, beds, location, name, bedrooms, price, galleryImages } = data;

  return (
    <Link href={`/Vacation-rentals/${id}`} className={className}>
      <div className="rounded-xl overflow-hidden">
      <Image className="w-full h-56 bg-gray-100 object-cover transition-transform duration-500 hover:scale-110" src={galleryImages[0]} alt="image" width={350} height={250} loading="lazy" />
      </div>
     
      <div className="p-4 pt-2 mt-2 space-y-3">
        <div className="space-y-3">
        
        <div className="flex gap-5 text-gray-500 text-sm"> 
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

            <h2 className={`font-semibold capitalize text-gray-900 text-base`} >
              <span className="line-clamp-1">{name}</span>
            </h2>
          
          <div className="flex items-center text-gray-500 text-sm space-x-1.5">
            
              <IoLocationOutline fontSize={20} />

            <span>{location}</span>
          </div>
        </div>

        <div className="w-14 border-b border-gray-100"></div>
       
        <span className="inline-block text-base font-semibold">
            ${price} <span className="text-sm text-gray-500 font-normal">
                / night
              </span>
        </span>
      </div>
    </Link>
  );
};
