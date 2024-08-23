"use client"

import Image from "next/image"

export function ServiceCard({ data }) {

    const { title, desc, image: { src, width, heigth, alt } } = data

return <div className="flex flex-col items-center p-8 border border-border rounded-2xl text-center bg-white shadow-sm">
  <Image src={src} width={width} height={heigth} alt={alt} className="w-20 h-20 rounded-lg object-cover" />
  <span className="heading2 block mb-2 antialiased font-semibold leading-snug tracking-normal text-dark">
    {title}
  </span>
  <p className="body2 block text-base antialiased font-light leading-relaxed text-inherit">
    {desc}
  </p>
</div> 
}

// 