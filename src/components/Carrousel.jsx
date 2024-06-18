"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {MdArrowForwardIos } from "@/utils/Icons";

export default function Carrousel({ data, Card, classNameCard }) {
  return (
        <Splide hasTrack={false} tag="ul" aria-label="My Favorite Images" 
        options={{
      type: "loop",
      perMove: 1,
      perPage:4,
      gap: "1em",
      pagination: false,
      // autoplay: true,
      breakpoints: {
        1024: {
          perPage: 3,
        },
        768: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
      }
        }} >
          <SplideTrack className="w-full">
            {data.map((data, i) => {
            return <SplideSlide className={classNameCard} key={i + Date + Math.random()} data-splide-interval="2000" >
              <Card data={data} />
              </SplideSlide>
            })}
          </SplideTrack>
  
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev bg-white -left-4" >
              <MdArrowForwardIos fontSize={15} />
            </button>
            <button className="splide__arrow splide__arrow--next bg-white -right-4" >
              <MdArrowForwardIos fontSize={15} />
            </button>
          </div>
        </Splide>
  );
}