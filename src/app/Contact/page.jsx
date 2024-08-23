import { Form } from "@/components/Forms/Contact/Form";
import { SocialsList } from "@/components/SocialList";
import { PageHeader } from "@/shared/PageHeader";
import { metadataContact } from "@/SEO/contact";
import { Info } from "@/content/Content";

export const metadata = metadataContact

export default function ContactPage() {
  return (
    <main className={`overflow-hidden`}>
        <PageHeader>
          {Info.PageHeader.title}
        </PageHeader>
        <div className="container main-space">
        <section>
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="max-w-sm space-y-7">
              {Info.data.map((item, index) => (
                <div key={index}>
                  <span className="uppercase font-semibold text-dark text-sm tracking-wider">
                    {item.title}
                  </span>
                  <p className="block mt-2">{item.info}</p>
                </div>
              ))}
              <div>
                <span className="uppercase font-semibold text-dark text-sm tracking-wider">
                  {Info.Socials.title}
                </span>
                <SocialsList className="flex gap-1 mt-3" />
              </div>
            </div>
            <Form />
          </div>
        </section>
        </div>
    </main>
  );
}

// NO TOCAR
