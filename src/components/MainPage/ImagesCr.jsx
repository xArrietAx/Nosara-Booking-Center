import React from 'react'
import Image from "next/image";

export const ImagesCr = () => {

  const data = [
    {
      src:"/Pajaro.jpg",
      width:"640",
      height:"428"
    },
    {
      src:"/Surf.jpg",
      width:"640",
      height:"427"
    },
    {
      src:"/Dron.jpg",
      width:"640",
      height:"360"
    },
    {
      src:"/Playa.jpg",
      width:"640",
      height:"427"
    },
    {
      src:"/Playa2.jpg",
      width:"640",
      height:"427"
    },
    {
      src:"/Atardecer.jpg",
      width:"640",
      height:"427"
    },
  ]

  return (
    <section className='container'>
        <div className='space-y-16 mt-36'>
          <div className='flex items-center justify-center gap-2'>
          <h2 className='font-[600] text-center text-[2em] sm:text-2xl'>¡PURA VIDA!</h2>
          <CrFlag />
          </div>

          <div className="grid_images">
            {
              data.map((ele, i) => {
                return <div className='overflow-hidden' key={i + Date + Math.random()}>
                <Image className='w-full h-full object-cover transition-transform hover:scale-110' src={ele.src} alt='caption' width={ele.width} height={ele.height} />
                </div>
              })
            }
          </div>

        </div>
    </section>
  )
}


function CrFlag() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M5,4H27c2.208,0,4,1.792,4,4v1H1v-1c0-2.208,1.792-4,4-4Z" fill="#030a85"></path><path d="M5,23H27c2.208,0,4,1.792,4,4v1H1v-1c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 25.5)" fill="#030a85"></path><path fill="#fff" d="M1 8H31V13H1z"></path><path fill="#fff" d="M1 19H31V24H1z"></path><path fill="#c93927" d="M1 12H31V20H1z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
}