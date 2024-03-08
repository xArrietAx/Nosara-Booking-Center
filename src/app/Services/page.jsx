import { Suspense } from "react";
import { Providers } from "@/components/Services/Providers";
import { Skeleton } from "@/components/Skeletons/CatalogueSkeleton";
import { ServiceYouNeed } from "@/components/ServiceYouNeed";
import { AnotherService } from "@/components/AnotherService";

export const metadata = {
  title: 'Services',
}

export default function page() {
  return (
    <main className="mb-36">
      <section className="container">
        <div className="space-y-3 mt-10 mb-14">
          <h1 className="font-[600] font text-center text-[2.5em] sm:text-3xl">
            Services
          </h1>
          <p className="w-full max-w-3xl mx-auto text-center font-[400] text-xl sm:text-base">
            On our site you can discover and book exciting services to enjoy
              your stay in Nosara such as ATV tours, golf cart rentals,
              massages, yoga and much more
          </p>
        </div>
        <Suspense fallback={<Skeleton />}>
          <Providers />
        </Suspense>
      </section>
      <AnotherService />
      <ServiceYouNeed />
    </main>
  );
}
