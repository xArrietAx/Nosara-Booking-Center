import { Book } from "./Book";
import { ServiceYouNeed } from "../ServiceYouNeed";
import { Copy } from "./Copy";
import Image from "next/image";

export async function Info({ service, getData }) {

  const data = await getData(service);

  return (
    <section>
      <div className="container flex flex-col gap-5">
        <div className="flex justify-between gap-5">
          <div className="flex items-center justify-center w-full max-h-[600px] rounded-xl overflow-hidden">
        <Image
          src={`https:${data?.fields?.image?.fields?.file?.url}`}
          alt={`${data?.fields?.image?.fields?.title} image`}
          width={data?.fields?.image?.fields?.file?.details?.image?.width}
          height={data?.fields?.image?.fields?.file?.details?.image.height}
          priority
          className="w-full min-h-full object-cover"
        />
          </div>
          <Book firstCard={data?.fields?.data ? data?.fields?.data[0]?.Cards[0]?.Name : ""} />
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
                            <div className="flex items-center justify-between gap-3">
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
          </div> : <div className="w-full font-[600] text-lg text-center uppercase">Coming soon</div>
          }

        </div>

      </div>
        <ServiceYouNeed />
    </section>
  );
}

