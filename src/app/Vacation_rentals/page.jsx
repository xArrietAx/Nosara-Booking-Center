import { BgGlassmorphism } from "@/shared/BgGlassmorphism";
import { HouseCard } from "@/components/Cards/HouseCard";
import { VacationRentals } from "@/content/Content";
import { Heading } from "@/shared/Heading/Heading";
import { getHouses } from "@/services";
import { Hero } from "@/shared/Hero";
import { metadataVacationRentals } from "@/SEO";

export const metadata = metadataVacationRentals

export default async function VacationRentalsPage() {

  const { data } = await getHouses()

  return (
    <main className="container">
      <BgGlassmorphism />
      <div className="main-space">
        <Hero totalCount={data.length} title={VacationRentals.Hero.title} location={VacationRentals.Hero.location} category={VacationRentals.Hero.category} image={{ src: VacationRentals.Hero.image.src, width:VacationRentals.Hero.image.width, height:VacationRentals.Hero.image.height, alt: VacationRentals.Hero.image.alt}} />
        <Stays data={data} />
      </div>
    </main>
  );
}

async function Stays({ data = [] }) {
  return <section>
  <Heading
    tagName="h2"
    title={VacationRentals.Stays.title}
    paragraph={VacationRentals.Stays.desc}
  />
  <div className="card_grid" > 
  {data.map(item => (
        <HouseCard
          key={item.id}
          data={item}
          type={2}
        />
      ))}
  </div>
</section>
}