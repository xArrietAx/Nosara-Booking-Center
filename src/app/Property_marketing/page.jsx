import { ServiceCard } from "@/components/Cards/ServiceCard";
import { BgGlassmorphism } from "@/shared/BgGlassmorphism";
import { metadataPropertyMarketing } from "@/SEO/index";
import { Form } from "@/components/Forms/Contact/Form";
import { Property_marketing } from "@/content/Content";
import { Heading } from "@/shared/Heading/Heading";
import { Button } from "@/shared/Button";
import Image from "next/image";
import Link from "next/link";

export const metadata = metadataPropertyMarketing


export default function PropertyMarketingPage() {
  return (
    <main className="container">
    <BgGlassmorphism />
    <div className="main-space">
      <Hero />
      <Services />
      <GetInTouch />
    </div>
  </main>
  );
}

function Hero() {
  return (
    <section>
      <div className="relative flex flex-col justify-between pt-10 lg:pt-16 lg:pb-16 lg:flex-row lg:items-center">
        <div className="space-y-6 flex flex-col items-start pb-14 mb-auto lg:space-y-8 lg:mr-12 lg:w-[50%] xl:mr-0 xl:pr-14">
          <h1 className="hero_title">{Property_marketing.Hero.title}</h1>
          <p className="body">{Property_marketing.Hero.desc}</p>
          <Link href="#contact">
            <Button>{Property_marketing.Hero.btn}</Button>
          </Link>
        </div>
        <div className="flex-grow">
          <Image
            src={Property_marketing.Hero.image.src}
            width={Property_marketing.Hero.image.width}
            height={Property_marketing.Hero.image.height}
            alt={Property_marketing.Hero.image.alt}
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return <section>
  <Heading
    tagName="h2"
    title={Property_marketing.Services.title}
    paragraph={Property_marketing.Services.desc}
  />
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {Property_marketing.Services.data.map((item, i) => {
        return <ServiceCard data={item} key={i + Date.now() + Math.random()} />
    })}
  </div>
</section>
}

function GetInTouch() {
  return <section id="contact">
    <Heading
        tagName="h3"
        className="text-center"
        title={Property_marketing.Contact.title}
        paragraph={Property_marketing.Contact.desc}
      />
      <div className="max-w-5xl mx-auto">
      <Form />
      </div>
  </section>
}