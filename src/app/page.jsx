import { ServiceYouNeed } from "@/components/ServiceYouNeed";
import { Catalogue } from "@/components/MainPage/Catalogue";
import { ImagesCr } from "@/components/MainPage/ImagesCr";
import { Montserrat } from "next/font/google";
import { AnotherService } from "@/components/MainPage/AnotherService";

const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="mb-36">
      <section className="container">
        <div className="h-[340px] mt-24 md:h-[400px] md:mt-14">
          <div className="flex flex-col items-center gap-5">
            <h1
              className={`${montserrat.className} text-[max(48px,min(5vw,76px))] text-center`}
            >
              Nosara Booking Center
            </h1>

            <p className="max-w-[750px] font-[400] text-[max(15px,min(2vw,20px))] text-center ">
              On our site you can discover and book exciting services to enjoy
              your stay in Nosara such as ATV tours, golf cart rentals,
              massages, yoga and much more.
            </p>
          </div>
        </div>
      </section>
      <Catalogue />
      {/* <AnotherService /> */}
      <ServiceYouNeed />
      <ImagesCr />
    </main>
  );
}