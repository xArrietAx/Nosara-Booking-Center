import { BgGlassmorphism } from "@/shared/BgGlassmorphism";
import { HouseCard } from "@/components/Cards/HouseCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import { TourCard } from "@/components/Cards/TourCard";
import { Heading2 } from "@/shared/Heading/Heading2";
import { Heading } from "@/shared/Heading/Heading";
import { MdArrowForwardIos } from "@/icons/index";
import { getHouses, getTours } from "@/services";
import Carrousel from "@/components/Carrousel";
import { Button } from "@/shared/Button";
import { Home } from "@/content/Content";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <BgGlassmorphism />
      <div className="main-space">
        <Hero />
        <Featured />
        <Why />
        <Explore />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-col relative pt-10 lg:pt-16 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-8 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
            <h1 className="hero_title">{Home.Hero.title}</h1>
            <p className="body">{Home.Hero.desc}</p>
            <Link href="#stays">
              <Button>
              {Home.Hero.btn}
              </Button>
            </Link>
          </div>
          <div className="flex-grow">
            <Image
              src={Home.Hero.image.src}
              width={Home.Hero.image.width}
              height={Home.Hero.image.height}
              alt={Home.Hero.image.alt}
              priority
            />
          </div>
        </div>
        <SearchBar />
      </div>
    </section>
  );
}

async function Featured() {

  const { data } = await getHouses()

  return <section id="stays">
  <Heading
    tagName="h2"
    title={Home.Featured.title}
    paragraph={Home.Featured.desc}
  />
  <Carrousel data={data} Card={HouseCard} />
</section>
}

function Why() {
  return (
    <section>
      <div className={`flex flex-col items-center lg:flex-row lg:py-14`}>
      <div className="flex-grow">
        <Image
          src={Home.Why.image.src}
          width={Home.Why.image.width}
          height={Home.Why.image.height}
          alt={Home.Why.image.alt}
        />
      </div>
      <div className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pl-16`} >
        <Heading2 id={Home.Why.id} tagName="h3" title={Home.Why.title} />
        <ul className="space-y-10 mt-16">
          {Home.Why.data.map((item, i) => {
            return (
              <li key={i + Date + Math.random()}>
                <span className="heading2">
                  {item.title}
                </span>
                <span className="body2">
                  {item.desc}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    </section>
  );
}

async function Explore() {

  const { data } = await getTours()

  return <section>
  <Heading tagName="h4" title={Home.Explore.title} paragraph={Home.Explore.desc} />
  <div className="card_grid">
    {data.map((item, i) => (
        <TourCard
          key={item.id}
          data={item}
          type={2}
        />
      ))}
  </div>
  <div className="flex justify-end mt-5">
    <div className="flex items-center gap-1 font-medium uppercase hover:text-dark">
      <Link href="/Tours">{Home.Explore.link}</Link>
      <MdArrowForwardIos />
    </div>
  </div>
</section>
}