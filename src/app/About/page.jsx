import { BackgroundSection } from "@/Shared/BackgroundSection"; 
import { BgGlassmorphism } from "@/Shared/BgGlassmorphism";
import { Heading } from "@/Shared/Headings/Heading";
import Image from "next/image";

export const metadata = {
  title: 'About',
  alternates:{
    canonical:"/About"
  },
}

export default function PageAbout() {
  return (
    <main>
      <BgGlassmorphism />
      <div className="container space-y-36 py-16 lg:py-28">
        <section>
    <div className="space-y-14 relative flex flex-col items-center text-center lg:flex-row lg:space-y-0 lg:space-x-10 lg:text-left">
      <div className="w-screen max-w-full lg:max-w-md xl:max-w-xl space-y-5 lg:space-y-7">
        <h1 className="heading xl:text-5xl">
          👋 About Us
        </h1>
        <span className="body">
        At Nosara Booking Center, we focus on providing tourists with a complete and convenient experience during their visit to Nosara, Costa Rica. Since our launch in 2024, we simplify travel planning by offering various booking services in one place, such as stays, tours, ATV rentals, golf cart rentals, car rentals and shuttle service.
        </span>
      </div>
      <div className="flex-grow">
       <Image className="w-full" src={"/about-hero-right.webp"} width={1450} height={638} alt="About image" priority />
      </div>
    </div>
        </section> 
        <Service />
        <div className="relative py-16">
        <BackgroundSection />
        <OurPromise />
        </div>
      </div>
    </main>
  );
}

function Service() {

  const data = [
      {
        name: `Tours`,
        desc: "Discover exciting adventures",
        img:"/ATV-Tours.webp",
        width:1920,
        height:1280
      },
      {
        name: `Stays`,
        desc: "Find your ideal home",
        img: "/Stay.webp",
        width:1920,
        height:1280
      },
      {
          name: `Shuttle`,
          desc: "Travel with ease and tranquility",
          img:"/Shuttle.webp",
          width:1920,
          height:1280
      }
  ];

  return <section className="relative">
    <Heading tagName="h2" title={"Our Service"} paragraph={"Popular places to stay and popular tours for fun"} />
  <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item, i) => (
        <div key={i + Date + Math.random()} className="flex flex-col items-center justify-center">
          <Image className="w-full h-full min-h-[220px] rounded-3xl bg-gray-100 object-cover" src={item.img} alt={`${item.name} service`} width={item.width} height={item.height} priority />
          <h3 className="text-lg font-semibold text-gray-900 mt-4 md:text-xl">
            {item.name}
          </h3>
          <span className="block text-sm text-gray-500 sm:text-base">
            {item.desc}
          </span>
        </div>
      ))}
    </div>
  </section>
}

function OurPromise() {

 const data = [
    {
      title: `Convenience`,
      desc: "We offer you the convenience of booking all your tourist services in one place, from accommodation to activities.",
    },
    {
      title: `Quality Guaranteed`,
      desc: "We work with trusted local providers to offer you authentic and high-quality experiences.",
    },
    {
        title: `Personalized Attention`,
        desc: "Our team is committed to providing personalized assistance and local recommendations to enhance your experience in Nosara.",
    }
];

  return (
    <section className={`relative flex flex-col lg:flex-row items-center`}>
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:pl-16">
          <span className="inline-block mb-5 uppercase text-sm text-gray-400 tracking-widest">
            Promise
          </span>
          <h3 className="heading">Our promise</h3>
          <ul className="space-y-10 mt-16">
            {data.map((item, i) => {
                return <li key={i + Date + Math.random()} className="space-y-4">
                <span className="block text-xl font-semibold">
                {item.title}
                </span>
                <span className="block mt-5 text-gray-500">
                  {item.desc}
                </span>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className="flex-grow">
        <Image alt="About-service" src={"/About-service-right.webp"} width={890} height={694} />
      </div>
    </section>
  );
}


// NO TOCAR