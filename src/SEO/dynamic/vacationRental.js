import { getHouse } from "@/services/index";
import { notFound } from "next/navigation";

async function metadataVacationRental(id){

  const { data, error } = await getHouse(id);

  if (!data || error || data?.length === 0) {
    return notFound();
  }

  const { name, information, galleryImages } = data[0];

   return { 
    title: name, 
    description: information,

    alternates: {
      canonical: `/Vacation_rentals/${name.replace(/ /g, "-")}/${id}`,
    },

    openGraph: {
      title: name,
      description: information,
      images: [
        {
          url: galleryImages[0],
          width:1200,
          heigth:630,
          alt: name,
        },
      ],
    },

    twitter: {
      title: name,
      description: information,
      images: [
        {
          url: galleryImages[0],
          width:1200,
          heigth:630,
          alt: name,
        },
      ],
    }

    }
}

export { metadataVacationRental }