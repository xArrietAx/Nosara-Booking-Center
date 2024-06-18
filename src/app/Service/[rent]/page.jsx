import { Form } from "@/components/Rental/Form";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {

  const { rent } = params;

  let title = '';
  let description = '';
  let imageUrl = '';
  let canonical = ''

  switch (rent) {
    case 'Shuttle':
      title = 'Shuttle Rental';
      description = 'Rent a shuttle for your next trip. Comfort and space for your transportation needs.';
      imageUrl = '/Shuttle.webp',
      canonical = "/Service/Shuttle"
      break;
    case 'ATV':
      title = 'ATV Rental';
      description = 'Experience the adventure with our ATVs. Perfect for rough terrains and outdoor fun.';
      imageUrl = '/ATV-Tours.webp',
      canonical = "/Service/ATV"
      break;
    case 'GolfCart':
      title = 'Golf Cart Rental';
      description = 'Rent a golf cart for easy movement around the golf course or community.';
      imageUrl = '/golfCart.webp',
      canonical = "/Service/GolfCart"
      break;
    case 'Car':
      title = 'Car Rental';
      description = 'Rent a car for your daily transportation needs. A variety of models available.';
      imageUrl = '/Car.webp',
      canonical = "/Service/Car"
      break;
    default:
      title = 'Vehicle Rentals';
      description = 'Rent a vehicle from our wide range of options to meet your transportation needs.';
      imageUrl = '/Car.webp';
      break;
  }

  return {
    title,
    description,
    alternates:{
      canonical
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width:1200,
          heigth:630,
          alt: `${title} Image`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width:1200,
          heigth:630,
          alt: `${title} Image`,
        },
      ],
    },
  };
}

const validRentals = ["Shuttle", "ATV", "GolfCart", "Car"];

export default function RentalPage({ params }){

  if (!validRentals.includes(params.rent)) {
    return notFound();
  }

  return (
    <main className="container !mt-11">
      <section className="flex flex-col gap-5 w-full sm:rounded-2xl sm:border border-gray-200 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Book a {params.rent.replace(/([a-z])([A-Z])/g, "$1 $2")}
        </h2>
        <div className="border-b border-gray-200" />
        <Form rent={params.rent} />
      </section>
    </main>
  );
};

// NO TOCAR