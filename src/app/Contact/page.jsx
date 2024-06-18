import { Heading2 } from "@/Shared/Headings/Heading2";
import { SocialsList } from "@/Shared/SocialList";
import { Form } from "@/components/contact/Form";

export const metadata = {
  title: 'Contact',
  alternates:{
    canonical:"/Contact"
  },
}

const info = [
  {
    title: "💌 EMAIL",
    desc: "nbc@nosarabookingcenter.com",
  },
  {
    title: "☎ PHONE",
    desc: "+506 8601 2266",
  },
];

export default function Contact() {
  return (
    <main className={`overflow-hidden`}>
      <section className="mb-24 lg:mb-32">
        <Heading2 title={"Contact"} />
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="max-w-sm space-y-7">
              {info.map((item, index) => (
                <div key={index}>
                  <span className="uppercase font-semibold text-sm tracking-wider">
                    {item.title}
                  </span>
                  <span className="block mt-2 text-gray-500">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="flex gap-1 mt-3" />
              </div>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </main>
  );
}

// NO TOCAR

