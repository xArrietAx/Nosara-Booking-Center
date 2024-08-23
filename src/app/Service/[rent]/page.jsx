import { metadataShuttle, metadataAtv, metadataCar, metadataGolfCart } from "@/SEO";
import { RentalCard } from "@/components/Cards/RentalCard";
import Form from "@/components/Forms/Rentals/Form";
import { Heading } from "@/shared/Heading/Heading";
import { PageHeader } from "@/shared/PageHeader";
import Carrousel from "@/components/Carrousel";
import { Services } from "@/content/Content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const data = ["Shuttle", "ATV", "Golf_cart", "Car"]
  return data.map(rent => ({ rent }))
}

export async function generateMetadata({ params: { rent } }) {
  switch (rent) {

    case 'Shuttle': return metadataShuttle
    case 'ATV': return metadataAtv
    case 'Golf_cart': return metadataGolfCart
    case 'Car': return metadataCar

    default:
      return notFound()
  }
}

export default function ServicePage({ params: { rent } }) {
  return (
    <main className="overflow-hidden">
      <PageHeader>
        {Services.PageHeader.title}{" "}
        {rent === "Golf_cart" ? rent.replace("_", " ") : rent}
      </PageHeader>

      <div className="container main-space">
        <section>
          <div className="max-w-4xl mx-auto">
          <Form rent={rent} />
          </div>
        </section>

        <Suggestion />
      </div>
    </main>
  );
}

function Suggestion() {
  return <section>
  <Heading
    tagName="h2"
    className="text-center"
    title={Services.Suggestion.title}
    paragraph={Services.Suggestion.desc}
  />
  <Carrousel data={Services.Suggestion.data} Card={RentalCard} />
</section>
}