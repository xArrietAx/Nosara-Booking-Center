import { FiUser, IoLocationOutline, LiaBathSolid, LiaBedSolid, LiaDoorOpenSolid } from "@/icons/index";
import { ImageCarrousel } from "@/components/VacationsRentals/ImagesCarrousel";
import { ModalAmenities } from "@/components/VacationsRentals/ModalAmenities";
import { metadataVacationRental } from "@/SEO/dynamic/vacationRental";
import { ImageGrid } from "@/components/VacationsRentals/ImageGrid";
import { getHouse, getHouses } from "@/services/index";
import Form from "@/components/Forms/Bookings/Form";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data } = await getHouses();
  return data.map(({ id, name }) => ({ name: [name, id.toString()] }));
}

export async function generateMetadata({ params }) {
  return metadataVacationRental(params.name[1]);
}

export default async function HousePage({ params }) {
  const { data, error } = await getHouse(params.name[1]);

  if (!data || error || data?.length === 0) {
    return notFound();
  }

  const {
    name,
    information,
    location,
    galleryImages,
    price,
    beds,
    bedrooms,
    baths,
    maxGuests,
    avg,
  } = data[0];

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-semibold text-2xl text-dark sm:text-3xl">
            {name}
          </h1>
          <span className="relative font-semibold text-2xl text-dark lg:hidden">
            ${price}
            <span className="text-base text-text/60"> / night</span>
            {avg && (
              <span className="absolute -bottom-5 left-0 text-sm">Average</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <IoLocationOutline className="size-6" color="gray" />
          <span className="ml-1">{location}, Costa Rica</span>
        </div>

        <div className="w-full border-b border-border" />

        <div className="overflow-hidden">
          <div className="scrollbar-hide flex gap-5 overflow-x-auto">
            <div className="flex items-center flex-grow space-x-3">
              <FiUser className="size-6" />
              <div className="space-x-2 flex">
                <span>{maxGuests}</span>
                <span className="hidden xs:inline-block">guests</span>
              </div>
            </div>

            <div className="flex items-center flex-grow space-x-3">
              <LiaBedSolid className="size-6" />
              <div className="space-x-2 flex">
                <span>{beds}</span>
                <span className="hidden xs:inline-block">beds</span>
              </div>
            </div>

            <div className="flex items-center flex-grow space-x-3">
              <LiaBathSolid className="size-6" />
              <div className="space-x-2 flex">
                <span>{baths}</span>
                <span className="hidden xs:inline-block">baths</span>
              </div>
            </div>

            <div className="flex items-center flex-grow space-x-3">
              <LiaDoorOpenSolid className="size-6" />
              <div className="space-x-2 flex">
                <span>{bedrooms}</span>
                <span className="hidden xs:inline-block">bedrooms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="font-semibold text-2xl text-dark">Stay information</h2>
        <div className="w-14 border-b border-border"></div>
        <p>{information}</p>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap lg:hidden">
        <h3 className="font-semibold text-2xl text-dark">
          Inquire more information
        </h3>
        <div className="w-14 border-b border-border"></div>
        <Form service={name} />
      </div>
    );
  };

  return (
    <main>
      <ImageCarrousel data={galleryImages} />
      <div className="container">
        <ImageGrid data={galleryImages} />
        <div className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
          <div className="w-full lg:w-3/5 xl:w-2/3 space-y-7 lg:space-y-10 lg:pr-10">
            {renderSection1()}
            {renderSection2()}
            <ModalAmenities amenities={data[0].amenities?.amenities} />
            {renderSection3()}
          </div>
          <SideBar name={name} price={price} avg={avg} />
        </div>
      </div>
    </main>
  );
}

function SideBar({ name, price, avg }) {
  return (
    <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
      <div className="sticky top-5">
        <div className="w-full flex flex-col rounded-2xl border-b border-t border-l border-r border-border space-y-6 xl:space-y-7 pb-10 p-2 sm:p-4 xl:px-8 xl:py-6 shadow-xl">
          <span className="relative font-semibold text-3xl text-dark">
            ${price}
            <span className="text-base text-text/60"> / night</span>
            {avg && (
              <span className="absolute -bottom-5 left-0 text-sm">Average</span>
            )}
          </span>

          <div className="w-14 border-b border-border"></div>
          <Form service={name} />
        </div>
      </div>
    </div>
  );
}
