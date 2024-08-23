"use client";

import { HiOutlineSquares2X2 } from "@/icons/index";
import { Drawer } from "@/components/Drawer";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import Image from "next/image";

export function ImageGrid({ data }) {
    
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <div className="relative hidden gap-2 h-[320px] mt-5 sm:flex md:h-[350px] lg:h-[500px]">
      <Drawer Button={(isOpen, onOpen) =>
      <>
      <MainPhoto main={data[0]} onOpen={onOpen} />
      <Grid data={data} onOpen={onOpen} />
      <ShowAllPhotos onOpen={onOpen} />
      </>
      }>
        <ImageGallery data={data} openLightboxOnSlide={openLightboxOnSlide} />
      </Drawer>
      <FsLightbox toggler={lightboxController.toggler} sources={data} exitFullscreenOnClose={true} slide={lightboxController.slide} />
    </div>
  );
}

function MainPhoto({ main, onOpen }) {
  return (
    <div className="relative w-full">
      <Image
        src={main}
        width={650}
        height={500}
        alt="House's image"
        className="w-full h-full rounded-2xl bg-secondary object-cover"
        priority
      />
      <div className="absolute inset-0 bg-dark bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={onOpen} />
    </div>
  );
}

function Grid({ data, onOpen }) {
  return (
    <div className="grid grid-cols-2 gap-2 w-full h-full">
      {data.slice(1, 5).map((item, i) => {
        return (
          <div className="relative w-full h-full" key={i + Date.now() + Math.random()}>
            <Image
              src={item}
              width={350}
              height={300}
              alt={`${i} house's image`}
              className="w-full h-full rounded-2xl bg-secondary object-cover"
              priority
            />
            <div className="absolute inset-0 bg-dark bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={onOpen} />
          </div>
        );
      })}
    </div>
  );
}

function ShowAllPhotos({ onOpen }) {
  return (
    <div className="absolute bottom-5 left-5 flex items-center gap-1 p-1 rounded-md text-sm bg-white cursor-pointer hover:bg-opacity-90" onClick={onOpen} >
      <HiOutlineSquares2X2 className="size-6" /> Show all photos
    </div>
  );
}

function ImageGallery({ data, openLightboxOnSlide }) {
  return (
    <div className="xs:columns-2">
      {data.map((item, i) => {
        return (
          <div key={i + Date + Math.random()} className="relative mb-5 block w-full h-full cursor-zoom-in" >
            <Image alt="listing gallery" className="transform rounded-lg brightness-90 transition will-change-auto hover:brightness-100 focus:outline-none" src={item} width={500} height={500} onClick={() => openLightboxOnSlide(i + 1)} />
          </div>
        );
      })}
    </div>
  );
}