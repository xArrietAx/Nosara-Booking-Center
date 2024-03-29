import { Suspense } from "react";
import { client } from "@/libs/contenful";
import { notFound } from "next/navigation";
import { Info } from "@/components/Service/Info";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Skeleton } from "@/components/Skeletons/ServiceInfoSkeleton";

async function getData(service) {
  try {
    return await client.getEntry(service);
  } catch (err) {
    return notFound();
  }
}

export async function generateMetadata({ params }) {

  const data = await getData(params.service);

  return {
    title: `${data.fields.name} in Nosara`,
    description: data.fields.description,
    keywords: [
      data.fields.name,
      `${data.fields.name} in Nosara`,
      "Nosara Booking Center",
      "NBC",
      "nbc",
      `${data.fields.name} in Guiones`,
      "Booking Nosara"
    ],
    openGraph:{
      title: data.fields.ogTitle,
      description: data.fields.ogDescription,
      url: `/Service/${params.service}`,
      siteName:"Nosara Booking Center",
      images:[
        {
          url:`https:${data?.fields?.ogImage?.fields?.file?.url}`,
          width:"1200",
          height:"630"
        }
      ],
      type:"website"
    },
    twitter: {
      card: 'summary_large_image',
      title: data.fields.ogTitle,
      description: data.fields.ogDescription,
      creator: 'Arrieta Family',
      images: [`https:${data?.fields?.ogImage?.fields?.file?.url}`],
    }
  };
}

export default function page({ params }) {
  return (
    <main className="mb-36">
      <div className="container">
        <Link href={"/"} className="inline-block w-fit">
          <Icon className={"p-2 mb-3"}>
            <IoIosArrowBack fontSize={"22px"} />
          </Icon>
        </Link>
      </div>

      <Suspense fallback={<Skeleton />}>
        <Info service={params.service} getData={getData} />
      </Suspense>
    </main>
  );
}
