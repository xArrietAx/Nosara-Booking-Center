import { BgGlassmorphism } from "@/shared/BgGlassmorphism";
import { Heading2 } from "@/shared/Heading/Heading2";
import { Heading } from "@/shared/Heading/Heading";
import { BgSection } from "@/shared/BgSection";
import { metadataAbout } from "@/SEO/index";
import { About } from "@/content/Content";
import Image from "next/image";

export const metadata = metadataAbout

export default function AboutPage() {
  return (
    <main className="container">
      <BgGlassmorphism />
      <div className="main-space">
        <Hero />
        <Service />
        <BgSection>
        <OurPromise />
        </BgSection>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section>
      <div className="space-y-14 relative flex flex-col items-center pt-10 lg:pt-28 text-center lg:flex-row lg:space-y-0 lg:space-x-10 lg:text-left">
        <div className="w-screen max-w-full lg:max-w-md xl:max-w-xl space-y-5 lg:space-y-7">
          <h1 className="heading lg:text-5xl">{About.Hero.title}</h1>
          <p className="body">{About.Hero.desc}</p>
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={About.Hero.image.src} width={About.Hero.image.width} height={About.Hero.image.height} alt={About.Hero.image.alt} priority />
        </div>
      </div>
    </section>
  );
}

function Service() {
  return (
    <section>
      <Heading
        tagName="h2"
        title={About.Service.title}
        paragraph={About.Service.desc}
      />
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {About.Service.data.map((item, i) => (

          <div className="space-y-2" key={i + Date.now() + Math.random()}>
          <div className="rounded-xl overflow-hidden">
            <Image src={item.img} width={item.width} height={item.height} alt={item.title} className="w-full h-full bg-secondary object-cover min-h-[220px] sm:h-[280px]"></Image>
          </div>
          <div>
            <span className="heading2">{item.title}</span>
            <p className="body2">{item.desc}</p>
          </div>
          </div>

        ))}
      </div>
    </section>
  );
}

function OurPromise() {
  return (
    <div className={`relative flex flex-col lg:flex-row items-center`}>
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:pl-16">
          <Heading2 tagName="h3" id={About.Promise.id} title={About.Promise.title} />
          <ul className="space-y-10 mt-16">
            {About.Promise.data.map((item, i) => {
              return (
                <li key={i + Date + Math.random()}>
                  <span className="heading2">
                    {item.title}
                  </span>
                  <p className="body2">{item.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex-grow">
        <Image
          src={About.Promise.image.src}
          alt={About.Promise.image.alt}
          width={About.Promise.image.width}
          height={About.Promise.image.height}
        />
      </div>
    </div>
  );
}