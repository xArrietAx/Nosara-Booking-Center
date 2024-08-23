"use client";

import { IoLocationOutline } from "@/icons/index";
import Image from "next/image";
import Link from "next/link";

export function TourCard({ data, className, type = 1 }) {

  const { id, location, name, info, category, from_price, image } = data;

  return (
    <Link href={`/Tours/${name.replace(/ /g, "-")}/${id}`} className={`${className} ${type === 1 ? null : "border rounded-2xl hover:shadow-xl transition-shadow" } `}>
      <div className="rounded-xl overflow-hidden">
        <Image
          className="w-full h-56 bg-secondary object-cover transition-transform duration-500 hover:scale-110"
          src={image}
          alt="image"
          width={10000}
          height={10000}
          loading="lazy"
        />
      </div>

      <div className="p-4 pt-2 mt-2 space-y-3">
        <div className="space-y-3">
          <div className="space-y-1">
            <span className="font-semibold capitalize text-dark text-base line-clamp-2">
              {name}
            </span>
            <p className="text-sm line-clamp-3">{info}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1.5">
              <IoLocationOutline fontSize={20} />
              <span>{location}</span>
            </div>

            <span className=" text-sm">{category.category}</span>
          </div>
        </div>

        <div className="w-20 border-b border-border"></div>

        <div className="space-x-2">
          <span className="text-sm">From</span>
          <span className="font-semibold text-dark">${from_price}</span>
        </div>
      </div>
    </Link>
  );
}
