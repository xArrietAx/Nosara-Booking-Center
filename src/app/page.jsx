import { CarrouselSkeleton } from "@/Shared/Skeletons/CarrouselSkeleton";
import { SearchBarPc } from "@/components/SearchBarFormPc/SearchBarPc";
import { BgGlassmorphism } from "@/Shared/BgGlassmorphism";
import { Heading } from "@/Shared/Headings/Heading";
import { StayCard } from "@/components/StayCard";
import { TourCard } from "@/components/TourCard";
import { Form } from "@/components/home/Form";
import { FaArrowRight } from "@/utils/Icons";
import supabase from "@/utils/Supabase";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Carrousel = dynamic(() => import("@/components/Carrousel"), {
  ssr: false,
  loading: () => <CarrouselSkeleton />,
});

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

async function getData(table, firstNumber, lastNumber) {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .range(firstNumber, lastNumber);
  return { data, error };
}

export default async function Home() {
  return (
    <main className="container">
      <BgGlassmorphism />
      <div className="space-y-36">
        <Hero />
        <FeaturedPlaces />
        <WhyChooseUs />
        <ExploreTours />
        {/* <HowWeWork /> */}
        <ForOwners />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-col relative pt-10 lg:pt-16 lg:pb-16">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-8 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
          <h1 className="font-medium text-5xl !leading-[114%] max-[355px]:text-4xl md:text-6xl xl:text-7xl">
            Houses, tours &amp; shuttles in Nosara
          </h1>
          <p className="body">
            We accompany you on a trip full of experiences in Nosara. We offer
            houses, shuttles, ATV rentals, golf cart rentals, and more in
            Nosara. Enjoy the best of Nosara with our services.
          </p>
          <Link href="#stays" className="custom-btn">
            Search your stay
          </Link>
        </div>
        <div className="flex-grow">
          <Image
            src={"/Hero-Home.webp"}
            width={740}
            height={760}
            alt="Hero Image"
            priority
          />
        </div>
      </div>
      <SearchBarPc />
    </section>
  );
}

function WhyChooseUs() {

  const data = [
    {
      title: "🏡 Our commission is only 5% from room rate",
      description:
        "At Nosara Booking Center, we only charge a 5% commission on the room rate. This means more profit for you!",
    },
    {
      title: "📅 Check-in and check-out included (no extra charge!)",
      description:
        "Check-in and check-out services are included at no extra charge. We take care of welcoming your guests and ensuring their stay is perfect.",
    },
    {
      title: "📣 Marketing of your property",
      description:
        "We handle the marketing of your property to ensure its visibility and attract more guests. We use effective strategies to make your property stand out.",
    },
    {
      title: "👥 Customer service",
      description:
        "We offer exceptional customer service, available to address all the questions and needs of your guests, ensuring an unparalleled accommodation experience.",
    }
  ];

  return (
    <section className={`flex flex-col items-center lg:flex-row lg:py-14`}>
      <div className="flex-grow">
        <Image
          src="/our-features.webp"
          width={1179}
          height={1032}
          alt="our-features"
          loading="lazy"
        />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pl-16`}
      >
        <span className="inline-block mb-5 uppercase text-sm text-gray-400 tracking-widest">
          Benefits
        </span>
        <h3 className="heading">Why choose us</h3>
        <ul className="space-y-10 mt-16">
          {data.map((item, i) => {
            return (
              <li key={i + Date + Math.random()} className="space-y-4">
                <span className="block text-xl font-semibold">
                  {item.title}
                </span>
                <span className="block mt-5 text-gray-600">
                  {item.description}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

async function ExploreTours() {
  const { data, error } = await getData("Tours", 0, 8);

  return (
    <section>
      <Heading
        tagName="h3"
        className="mb-10 text-center"
        title="Explore and book"
        paragraph="Variety of tours of our area, from  ATV tours to whale and dolphin watching."
      />
      <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {error ? (
          <div>
            An error has occurred, try reloading the page again or try again
            later.
          </div>
        ) : (
          data.map((item, i) => (
            <TourCard
              key={item.id}
              data={item}
              className="border rounded-2xl hover:shadow-xl transition-shadow"
            />
          ))
        )}
      </div>
      <div className="flex justify-end mt-5">
        <div className="flex items-center gap-1 font-[600] text-gray-600 uppercase hover:text-gray-900">
          <Link href="/Tours">Discover tours</Link>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
}

// function HowWeWork() {
//   const data = [
//     {
//       img: "/HIW1.webp",
//       width: 744,
//       heigth: 707,
//       title: "Book & relax",
//       desc: "Book your services in a few clicks and let us take care of the rest. It's that simple!",
//     },
//     {
//       img: "/HIW2.webp",
//       width: 806,
//       heigth: 689,
//       title: "Wait for email confirmation",
//       desc: "After booking, wait for our confirmation in your email inbox",
//     },
//     {
//       img: "/HIW3.webp",
//       width: 771,
//       heigth: 689,
//       title: "Enjoy",
//       desc: "Once your reservation is confirmed, relax and get ready to enjoy your experience",
//     },
//   ];

//   return (
//     <section>
//       <Heading
//         tagName="h4"
//         className="text-center"
//         title="How we work"
//         paragraph="Keep calm, we take care of it"
//       />
//       <div className="mt-20 relative grid md:grid-cols-3 gap-20">
//         {data.map((item, i) => (
//           <div
//             key={i + Date + Math.random()}
//             className="relative flex flex-col items-center max-w-xs mx-auto"
//           >
//             <Image
//               alt=""
//               className="mb-8 max-w-[180px] mx-auto"
//               src={item.img}
//               width={item.width}
//               height={item.heigth}
//               loading="lazy"
//             />
//             <div className="text-center mt-auto">
//               <h3 className="text-xl font-semibold">{item.title}</h3>
//               <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
//                 {item.desc}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

async function FeaturedPlaces() {
  const { data, error } = await getData("House", 0, 1);

  return (
    <section id="stays">
      <Heading
        tagName="h2"
        title="Featured places to stay"
        paragraph="Popular places to stay that Chisfis recommends for you"
      />
      {error ? (
        <div>
          An error has occurred, try reloading the page again or try again
          later.
        </div>
      ) : (
        <Carrousel
          data={data}
          Card={StayCard}
          classNameCard="rounded-xl hover:bg-gray-50"
        />
      )}
    </section>
  );
}

export function ForOwners() {
  return (
    <section>
      <Heading
        tagName="h4"
        className="mb-10 text-center"
        bodyClassName="max-w-[800px] mx-auto"
        title="Publish your property in our site"
        paragraph="Do you have a house you want to rent? Publish your property on our platform and reach hundreds of potential tenants. Fill the form below and we will contact you."
      />
      <Form />
    </section>
  );
}

// NO TOCAR
