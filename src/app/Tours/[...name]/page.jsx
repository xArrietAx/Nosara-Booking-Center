import { allIcons, FaRegClock, IoLocationOutline } from "@/icons/index";
import { getTour, getTours } from "@/services/index";
import Form from "@/components/Forms/Bookings/Form";
import Image from "next/image";
import { metadataTour } from "@/SEO/dynamic/tour";

  export async function generateStaticParams() {
  const { data } = await getTours()
  return data.map(({ id, name }) => ({ name: [name, id.toString()] }));
  }

  export async function generateMetadata({ params }) {
    return metadataTour(params.name[1])
  }

  export default async function TourPage({ params }) {

  const { data, error } = await getTour(params.name[1]);

  if (!data || error || data?.length === 0) {
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
        <div className="relative mt-11 flex flex-col lg:flex-row ">
          <div className="flex flex-col w-full lg:w-[66%] xl:w-[70%] space-y-7 lg:space-y-10 lg:pr-10">
            <div className="relative w-full h-auto max-h-[600px] rounded-md bg-border overflow-hidden sm:rounded-xl">
              <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                className="w-full h-full object-cover bg-secondary"
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
        <h1 className="font-semibold text-2xl text-dark sm:text-3xl">{name}</h1>

        <div className="flex items-center gap-1">
          <IoLocationOutline className="size-6" />
          <span className="ml-1">{location}, Costa Rica</span>
        </div>
  
        <div className="w-full border-b border-border" />
  
        <div className="overflow-hidden">
        <div className="scrollbar-hide flex gap-12 overflow-x-auto">
  
          <div className="flex items-center flex-grow space-x-3 sm:flex-grow-0">
            <FaRegClock className="size-6" />
            <span className="whitespace-nowrap capitalize">{duration}</span>
          </div>
  
          <div className="flex items-center flex-grow space-x-3 sm:flex-grow-0">
            <Icon className="size-6" />
            <span className="whitespace-nowrap capitalize">{category.category}</span>
          </div>
  
          {include.map((item, i) => {
  
              const Icon = allIcons[item.icon]
  
              return (
                <div key={i + Date + Math.random()} className="flex items-center flex-grow space-x-3 sm:flex-grow-0" >
                  <Icon className="size-6" />
                  <span className="whitespace-nowrap capitalize">{item.include}</span>
                </div>
              );
            }).slice(0, 3)}
        </div>
        </div>
  
      </div>
    );
  }
  
  function Information({ info }) {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="font-semibold text-2xl text-dark">Tour information</h2>
          <p className="block mt-2">
            A general description of the tour, the experience you will have, the
            duration, etc.{" "}
          </p>
        </div>
        <div className="w-14 border-b border-border"></div>
        <p>{info}</p>
      </div>
    );
  }
  
  function BookTour({ name }) {
    return (
      <div className="listingSection__wrap lg:hidden">
        <h5 className="font-semibold text-2xl text-dark">Book tour</h5>
        <Form service={name} />
      </div>
    );
  }
  
  function Prices({ prices }) {
    return (
      <div className="listingSection__wrap">
        <div>
          <h3 className="font-semibold text-2xl text-dark">Prices</h3>
          <p className="block mt-2">
            Information about the cost of the tour
          </p>
        </div>
        <div className="w-14 border-b border-border"></div>
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
          <h4 className="font-semibold text-2xl text-dark">Include</h4>
          <p className="block mt-2">
            The tour includes the following:
          </p>
        </div>
        <div className="w-14 border-b border-border"></div>
        <div className="flex gap-8 flex-wrap">
          {include.filter((_, i) => i < 12).map((item, i) => {
  
            const Icon =  allIcons[item.icon]
            
            return <div key={i + Date + Math.random()} className="flex items-center space-x-3">
              <Icon className="size-6" />
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
          <div className="w-full flex flex-col rounded-2xl border-b border-t border-l border-r border-border space-y-6 xl:space-y-7 pb-10 p-2 sm:p-4 xl:px-8 xl:py-6 shadow-xl">
            <Form service={name} />
          </div>
        </div>
      </div>
    );
  }
  