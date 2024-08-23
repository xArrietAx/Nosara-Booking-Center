"use client" 

import Image from "next/image";
import Link from "next/link";

export function RentalCard({ data }) {

    const { title, desc, url, image: { src, width, height, alt } } = data
    
    return <Link href={url} className={`flex flex-col`}>
    <div className={`h-56`}>
      <Image
        src={src}
        className="object-cover w-full h-full rounded-2xl"
        alt={alt}
        width={width}
        height={height}
      />
    </div>
    <div className="mt-4 truncate">
      <span className={`heading2 text-dark font-medium truncate`} >
        {title}
      </span>
      { desc && <span className={`body2`} >
        {desc}
      </span> }
    </div>
  </Link>
}