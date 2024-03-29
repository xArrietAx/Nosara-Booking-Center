import { ServiceYouNeed } from "../ServiceYouNeed";
import { Copy } from "./Copy";
import Image from "next/image";
import { Book } from "./Book";

export async function Info({ service, getData }) {

  const data = await getData(service);

  return (
    <section>
      <div className="container flex gap-5 lg:gap-0">
        <div className="flex flex-col gap-10 w-[100%] lg:w-full">
        <div className="w-full max-h-[600px]">
        <Image
src={`https:${data?.fields?.image?.fields?.file?.url}`}
alt={`${data?.fields?.image?.fields?.title} image`}
width={data?.fields?.image?.fields?.file?.details?.image?.width}
height={data?.fields?.image?.fields?.file?.details?.image.height}
priority
className="w-full h-full rounded-xl object-cover"
/>
        </div>
        <div className="flex flex-col gap-16">
<div className="space-y-2">
  <h2 className="font-[600] text-[2em] sm:text-2xl">
    {String(data?.fields?.name).toLocaleUpperCase()}
  </h2>
  <p className="font-[400] text-[1.1em] sm:text-[.95em]">
    {data?.fields?.description}
  </p>
</div>

{
  data?.fields?.data ? <div className="flex flex-col gap-24">
  {data.fields?.data?.map((ele, i) => {
    return (
      <div className="space-y-8 section" key={i + Date + Math.random()}>
        <h3 className="font-[600] text-2xl uppercase sm:text-xl lg:text-center">
          {ele.Name}
        </h3>

        <div className="grid_services">
          {ele.Cards.map((ele, i) => {
            return (
              <div className="flex flex-col gap-5 w-full max-w-3xl p-5 border rounded-3xl bg-[#fdfdfd] shadow" key={i + Date + Math.random()}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3 xs:flex-wrap">
                  <h4 className="font-[600] text-lg uppercase">
                    {ele.Name}
                  </h4>
                  <Copy str={ele.Name} />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: ele.Description,
                    }}
                  />
                </div>

                {ele.Prices ? (
                <div className="flex flex-col gap-1">
                  <span className="font-[600]">PRICES</span>
                  <ul className="space-y-1">
                    {ele.Prices.map((ele, i) => {
                      return <li dangerouslySetInnerHTML={{__html: ele.price }} key={i + Date + Math.random()} />
                    })}
                  </ul>
                </div>
                  ) : null}

                {ele.Include ? (
                 <div className="flex flex-col gap-1">
                 <span className="font-[600]">Include</span>
                 <ul className="space-y-1">
                   {ele.Include.map((ele, i) => {
                     return <li dangerouslySetInnerHTML={{__html: ele.include }} key={i + Date + Math.random()} />
                   })}
                 </ul>
               </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  })}
</div> : <div className="flex flex-col items-center justify-center gap-3 w-full">
<span className="font-[600] text-lg text-center uppercase">Coming soon</span>
<span  className="text-center">Don't worry if you don't see content to rent, you can also book {data?.fields?.name} using the form</span>
</div>
}

        </div>

        </div>

          <Book serviceName={data?.fields?.name} />
        

      </div>
        <ServiceYouNeed />
    </section>
  );
}








