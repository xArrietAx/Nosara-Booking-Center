import { BookForm } from "@/components/Vacation-rentals/BookForm";
import { FaRegClock, IoLocationOutline } from "@/utils/Icons";
import { notFound } from "next/navigation";
import { allIcons } from "@/utils/Icons";
import supabase from "@/utils/Supabase";
import Image from "next/image";
import { cache } from "react";
import { Client } from "@/components/Client";

const getData = cache(async id => {
  const { data, error } = await supabase.from("Tours").select().eq("id", id);
  return { data, error };
});

export async function generateMetadata({ params }) {

 const { data, error } = await getData(params.id);
 
 const {
  name,
  image: { src, width, height },
  info
} = data[0];

  return {
    title: name,
    description: info,
    openGraph: {
      title: name,
      description: info,
      images:[
        {
          url: src,
          alt: `${name} image`,
          width:width,
          height:height,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description: info,
      images:[
        {
          url:"/twitter-image.png",
          alt: `${name} image`,
          width:"1200",
          height:height
        }
      ]
    }
  }
}

export const revalidate = 60;

export default async function ListingStayDetail({ params }) {

  const { data, error } = await getData(params.id);

  if (data.length === 0 || error || data === null) {
    return notFound();
  }

  const {
    name,
    image: { src, alt, width, height },
    info,
    location,
    duration,
    category,
    prices,
    include,
  } = data[0];

  return (
    <main className="container">
    <Client data={data} />
      <div className="relative mt-11 flex flex-col lg:flex-row ">
        <div className="flex flex-col w-full lg:w-[66%] xl:w-[70%] space-y-7 lg:space-y-10 lg:pr-10">
          <div className="relative w-full h-auto max-h-[600px] rounded-md bg-gray-200 overflow-hidden sm:rounded-xl">
            <Image
              src={src}
              width={width}
              height={height}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
          <OtherInfo
            name={name}
            location={location}
            prices={prices}
            duration={duration}
            category={category}
            include={include}
          />
          <Information info={info} />
          <Prices prices={prices} />
          <Include include={include} />
          <BookTour name={name} />
        </div>

        <Sidebar name={name} />
      </div>
    </main>
  );
}

function OtherInfo({ name, location, duration, category, include }) {

  const Icon = allIcons[category.icon]

  return (
    <div className="listingSection__wrap">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{name}</h1>

      <div className="flex items-center gap-1">
        <IoLocationOutline fontSize={20} color="gray" />
        <span className="ml-1">{location}, Costa Rica</span>
      </div>

      <div className="w-full border-b border-gray-100" />

<div className="hidden-scrollbar overflow-hidden overflow-x-auto">
      <div className="space-x-6 flex items-center justify-between w-[600px] py-4 text-sm text-gray-700 min-[310px]:py-0 xl:justify-start xl:space-x-12 sm:w-fit">

        <div className="flex items-center space-x-3 ">
          <FaRegClock fontSize={20} />
          <span className="capitalize">{duration}</span>
        </div>

        <div className="flex items-center space-x-3 ">
          <Icon fontSize={20} />
          <span className="capitalize">{category.category}</span>
        </div>

        {include.map((item, i) => {

            const Icon = allIcons[item.icon]

            return (
              <div key={i + Date + Math.random()} className="flex items-center space-x-3 " >
                <Icon fontSize={20} />
                <span className="capitalize">{item.include}</span>
              </div>
            );
          }).slice(0, 2)}
      </div>
</div>

    </div>
  );
}

function Information({ info }) {
  return (
    <div className="listingSection__wrap">
      <div>
        <span className="text-2xl font-semibold">Tour information</span>
        <p className="block mt-2 text-gray-500">
          A general description of the tour, the experience you will have, the
          duration, etc.{" "}
        </p>
      </div>
      <div className="w-14 border-b border-gray-200"></div>
      <p className="text-gray-6000">{info}</p>
    </div>
  );
}

function BookTour({ name }) {
  return (
    <div className="listingSection__wrap lg:hidden">
      <h4 className="text-2xl font-semibold">Book tour</h4>
      <BookForm service={name} />
    </div>
  );
}

function Prices({ prices }) {
  return (
    <div className="listingSection__wrap">
      <div>
        <span className="text-2xl font-semibold">Prices</span>
        <p className="block mt-2 text-gray-500">
          Information about the cost of the tour
        </p>
      </div>
      <div className="w-14 border-b border-gray-200"></div>
      <div className="flex flex-col gap-2">
        {prices.map((item, i) => {
          return <span key={i + Date + Math.random()}>{item}</span>;
        })}
      </div>
    </div>
  );
}

function Include({ include }) {
  return (
    <div className="listingSection__wrap">
      <div>
        <span className="text-2xl font-semibold">Include</span>
        <p className="block mt-2 text-gray-500">
          The tour includes the following:
        </p>
      </div>
      <div className="w-14 border-b border-gray-200"></div>
      <div className="flex gap-8 flex-wrap">
        {include.filter((_, i) => i < 12).map((item, i) => {

          const Icon =  allIcons[item.icon]
          
          return <div key={i + Date + Math.random()} className="flex items-center space-x-3">
            <Icon fontSize={20} className="text-gray-700" />
            <span>{item.include}</span>
          </div>;
        })}
      </div>
    </div>
  );
}

function Sidebar({ name }) {
  return (
    <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
      <div className="sticky top-5">
        <div className="w-full flex flex-col rounded-2xl border-b border-t border-l border-r border-gray-200 space-y-6 xl:space-y-7 pb-10 p-2 sm:p-4 xl:px-8 xl:py-6 shadow-xl">
          <BookForm service={name} />
        </div>
      </div>
    </div>
  );
}
