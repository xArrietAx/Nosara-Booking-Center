"use client"

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from "next/image";

export function ImageCarrousel({ data }) {

    const options = {
        type         : 'loop',
        gap          : '.5rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        height       : '23rem',
      };

    return <div className="sm:hidden">
      <Splide
        options={ options }
        hasTrack={ false }
      >
        <div className='columns-1' style={ { position: 'relative' } }>
          <SplideTrack>
            { data.map( slide => (
              <SplideSlide className='w-full h-full bg-secondary' key={ slide }>
                <Image src={ slide }  alt="House's image" width={650} height={380} className='w-full h-full object-cover' />
              </SplideSlide>
            ) ) }
          </SplideTrack>
        </div>
      </Splide>

    </div>
}