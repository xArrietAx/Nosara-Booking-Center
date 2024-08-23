import { ServiceCard } from "@/components/Cards/ServiceCard";
import { BgGlassmorphism } from "@/shared/BgGlassmorphism";
import { metadataPropertyManagement } from "@/SEO/index";
import { Form } from "@/components/Forms/Contact/Form";
import { Property_management} from "@/content/Content";
import { Heading } from "@/shared/Heading/Heading";
import { Button } from "@/shared/Button";
import { Tabs } from "@/components/Tabs";
import Image from "next/image";
import Link from "next/link";

export const metadata = metadataPropertyManagement

export default function PropertyManagementPage() {
  return (
    <main className="container">
      <BgGlassmorphism />
      <div className="main-space">
        <Hero />
        <Mission />
        <Offer />
        <GetInTouch />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section>
      <div className="relative flex flex-col justify-between pt-10 lg:pt-16 lg:flex-row lg:items-center lg:pb-16">
        <div className="space-y-6 flex flex-col items-start pb-14 mb-auto lg:space-y-8 lg:mr-12 lg:w-[50%] xl:mr-0 xl:pr-14">
          <h1 className="hero_title">{Property_management.Hero.title}</h1>
          <p className="body">{Property_management.Hero.desc}</p>
          <Link href="#contact">
            <Button>{Property_management.Hero.btn}</Button>
          </Link>
        </div>
        <div className="flex-grow">
          <Image
            src={Property_management.Hero.image.src}
            width={Property_management.Hero.image.width}
            height={Property_management.Hero.image.height}
            alt={Property_management.Hero.image.alt}
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return <section>
    <div className="flex flex-col items-center lg:flex-row-reverse lg:py-14">
    <div className="space-y-6 w-screen max-w-full pb-14 lg:max-w-md lg:pl-16 lg:space-y-8 xl:max-w-xl">
          <h2 className="heading lg:text-5xl">{Property_management.Mission.title}</h2>
          <p className="body">{Property_management.Mission.desc}</p>
          <Link href="/About" className="inline-block">
            <Button>{Property_management.Mission.btn}</Button> 
          </Link>
        </div>
      <div className="flex-grow">
      <Image
          src={Property_management.Mission.image.src}
          alt={Property_management.Mission.image.alt}
          width={Property_management.Mission.image.width}
          height={Property_management.Mission.image.height}
        />
      </div>
    </div>
    </section>
}

function Offer() {
  return (
    <section>
      <Heading
        tagName="h3"
        title={Property_management.Offer.title}
        paragraph={Property_management.Offer.desc}
      />
      <Tabs data={Property_management.Offer.data} Content={ServiceCard} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" />
    </section>
  );  
}

function GetInTouch() {
  return <section id="contact">
    <Heading
        tagName="h4"
        className="text-center"
        title={Property_management.Contact.title}
        paragraph={Property_management.Contact.desc}
      />
      <div className="max-w-5xl mx-auto">
      <Form />
      </div>
  </section>
}