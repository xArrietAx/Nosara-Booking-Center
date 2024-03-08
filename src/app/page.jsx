import { ServiceYouNeed } from "@/components/ServiceYouNeed";
import { Catalogue } from "@/components/MainPage/Catalogue";
import { ImagesCr } from "@/components/MainPage/ImagesCr";
import { Montserrat } from "next/font/google";
import { AnotherService } from "@/components/AnotherService";

const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'Nosara Booking Center: Your best choice for booking tours and activities in Nosara',
}

export default function Home() {
  return (
    <main className="mb-36">
      <section className="container">
        <div className="h-[340px] mt-24 md:h-[400px] md:mt-14">
          <div className="flex flex-col items-center gap-3">
            <h1
              className={`${montserrat.className} text-[max(48px,min(5vw,76px))] text-center`}
            >
              Nosara Booking Center
            </h1>

            <p className="max-w-[850px] font-[400] text-[max(15px,min(2vw,20px))] text-center">
            Looking for an exciting adventure? Want to relax and rejuvenate? Need help with cleaning or childcare? No matter what you are looking for, Nosara Booking Center has what you need.
            </p>
          </div>
        </div>
      </section>
      <Catalogue />
      <AnotherService />
      <ServiceYouNeed />
      <ImagesCr />
    </main>
  );
}