import { BgGlassmorphism } from "@/shared/BgGlassmorphism";
import { Tours as ToursContent } from "@/content/Content";
import { TourCard } from "@/components/Cards/TourCard";
import { Heading } from "@/shared/Heading/Heading";
import { metadataTours } from "@/SEO";
import { getTours } from "@/services";
import { Hero } from "@/shared/Hero";

export const metadata = metadataTours

export default async function ToursPage() {

  const { data } = await getTours()

  return (
    <main className="container">
      <BgGlassmorphism />
      <div className="main-space">
      <Hero totalCount={data.length} title={ToursContent.Hero.title} location={ToursContent.Hero.location} category={ToursContent.Hero.category} image={{ src: ToursContent.Hero.image.src, width:ToursContent.Hero.image.width, height:ToursContent.Hero.image.height, alt: ToursContent.Hero.image.alt}} />
      <Tours data={data} />
      </div>
    </main>
  );
}

function Tours({ data = [] }) {
  return <section>
  <Heading
    tagName="h2"
    title={ToursContent.Tours.title}
    paragraph={ToursContent.Tours.desc}
  />
  <div className="card_grid" > 
  {data.map(item => (
        <TourCard
          key={item.id}
          data={item}
          type={2}
        />
      ))}
  </div>
</section>
}