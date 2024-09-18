import { getTour } from "@/services/index";
import { notFound } from "next/navigation";

async function metadataTour(id){

  const { data, error } = await getTour(id);

  if (!data || error || data?.length === 0) {
    return notFound();
  }

  const { name, info, image: { src } } = data[0];

  return { 
    title: name, 
    description: info,

    alternates: {
      canonical: `/Tours/${name.replace(/ /g, "-")}/${id}`,
    },

    openGraph: {
      title: name,
      description: info,
      images: [
        {
          url: src,
          width:1200,
          heigth:630,
          alt: name,
        },
      ],
    },

    twitter: {
      title: name,
      description: info,
      images: [
        {
          url: src,
          width:1200,
          heigth:630,
          alt: name,
        },
      ],
    }

    }
}

export { metadataTour }