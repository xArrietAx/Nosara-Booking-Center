import { SearchBarPc } from "@/components/SearchBarFormPc/SearchBarPc";
import { CardSkeleton } from "@/Shared/Skeletons/CardSkeleton";
import { IoLocationOutline, LuMountain } from "@/utils/Icons";
import { BgGlassmorphism } from "@/Shared/BgGlassmorphism";
import { Heading } from "@/Shared/Headings/Heading";
import supabase from "@/utils/Supabase";
import { Suspense, cache } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Tours = dynamic(() => import('@/Shared/Tours'), { loading: () => <CardSkeleton /> })

export const metadata = {
  title: 'Tours',
  alternates:{
    canonical:"/Tours"
  },
}

const getData = cache(async () => {
  const { count } = await supabase.from("Tours").select("*", { count: "exact" });

  const totalCount = count

  return { totalCount };
});

export const revalidate = 60;

export async function ListingToursPage({ searchParams }) {

  const { totalCount } = await getData();

  const page = searchParams["page"] ?? 1;

  return (
    <main className="container">
      <BgGlassmorphism />
      <div className="space-y-36">
      <Hero totalCount={totalCount} />
      <section id="Tours">
        <Heading title="Great variety of tours" paragraph="Discover populars tours to enjoy Nosara" tagName={"h2"} />
        <Suspense fallback={<CardSkeleton />}>
          <Tours page={page} totalCount={totalCount} />
        </Suspense>
      </section>
      </div>
    </main>
  );
}

function Hero({ totalCount }) {
  return <section className={`flex flex-col relative`}>
  <div className="flex flex-col lg:flex-row lg:items-center  pt-10 lg:pt-16 lg:pb-16">
    <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
      <h1 className="font-medium text-5xl !leading-[114%] max-[355px]:text-4xl md:text-6xl xl:text-7xl">
        Discover best experiences in Nosara
      </h1>
      <div className="flex items-center text-base md:text-lg text-gray-500">
        <IoLocationOutline className="text-[1.5rem]" />
        <span className="ml-2.5">Costa Rica</span>
        <span className="mx-5"></span>
        <LuMountain className="text-[1.5rem]" />
        <span className="ml-2.5">{totalCount} Tours</span>
      </div>
    </div>
    <div className="flex-grow">
      <Image
        src={"/Hero-Tours.webp"}
        width={1001}
        height={1031}
        alt="Hero Image"
        priority
      />
    </div>
  </div>

  <div className="hidden lg:flow-root w-full">
    <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
      <SearchBarPc />
    </div>
  </div>
</section>
}

export default ListingToursPage;