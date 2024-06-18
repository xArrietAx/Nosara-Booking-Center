import { FiUser, IoLocationOutline, LiaBathSolid, LiaBedSolid, LiaDoorOpenSolid } from "@/utils/Icons";
import { ModalAmenities } from "@/components/Vacation-rentals/ModalAmenities";
import { ImageGrid } from "@/components/Vacation-rentals/ImageGrid";
import { BookForm } from "@/components/Vacation-rentals/BookForm";
import { SideBar } from "@/components/Vacation-rentals/SideBar";
import { Mansory } from "@/components/Vacation-rentals/Masonry";
import { notFound } from 'next/navigation'
import supabase from "@/utils/Supabase";
import { cache } from "react";
// import { Client } from "@/components/Client";



const getData = cache(async id => {
  const { data, error } = await supabase
  .from('House')
  .select()
  .eq('id', id )
  return {data, error}
});

export const revalidate = 2;

export async function generateMetadata({ params }) {

  const { data } = await getData(params.id);

  const { name, information, galleryImages } = data[0]
 
  return {
    title: name,
    description: information,
    openGraph: {
      title: name,
      description: information,
      images:[
        {
          url: galleryImages[0],
          alt: `${name} image`,
          width: 1200,
          height: 630,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description: information,
      images:[
        {
          url: galleryImages[0],
          alt: `${name} image`,
          width: 1200,
          height: 630
        }
      ]
    }
  }
  
 }

export default async function ListingStayDetail({params}) {
  
  const { data, error } = await getData(params.id);

  if (data.length === 0 || error || data === null ) {
    return notFound()
  }
  
  const { name, information, location, price, beds, bedrooms, baths, maxGuests } = data[0]

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-8">
        
        <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {name}
        </h1>
        <span className="text-xl font-semibold md:text-3xl lg:hidden">
              ${price}
              <span className="ml-1 text-base font-normal text-gray-500">
                /night
              </span>
            </span>
        </div>

        <div className="flex items-center gap-1">
          <IoLocationOutline fontSize={20} color="gray" />
          <span className="ml-1">{location}, Costa Rica</span>
        </div>

        <div className="w-full border-b border-gray-100" />

        <div className="space-x-8 flex items-center justify-between py-4 text-sm text-gray-700 overflow-hidden overflow-x-auto min-[310px]:py-0 xl:justify-start xl:space-x-12">
          <div className="flex items-center space-x-3 ">
            <FiUser fontSize={25} />
            <span>
              {maxGuests} <span className="hidden xs:inline-block">guests</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <LiaBedSolid fontSize={25} />
            <span>
              {beds} <span className="hidden xs:inline-block">beds</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <LiaBathSolid fontSize={25} />
            <span>
              {baths} <span className="hidden xs:inline-block">baths</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <LiaDoorOpenSolid fontSize={25} />
            <span>
              {bedrooms} <span className="hidden xs:inline-block">bedrooms</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Stay information</h2>
        <div className="w-14 border-b border-gray-200"></div>
        <div dangerouslySetInnerHTML={{ __html: information }} />
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap lg:hidden">
      <h4 className="text-2xl font-semibold">Inquire more information</h4>
      <BookForm service={name} />
      </div>
    );
  };

  return (
    <>
      <main className="container">
        {/* <Client data={data} /> */}
        <ImageGrid data={data[0].galleryImages} />
        <div className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
          <div className="w-full lg:w-3/5 xl:w-2/3 space-y-7 lg:space-y-10 lg:pr-10">
            {renderSection1()}
            {renderSection2()}
            <ModalAmenities amenities={data[0].amenities?.amenities} />
            {renderSection3()}
          </div>
          <SideBar price={price} name={name} />
        </div>
      </main>
      <Mansory data={data[0].galleryImages} />
    </>
  );
}
