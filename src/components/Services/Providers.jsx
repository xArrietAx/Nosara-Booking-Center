import Link from "next/link";
import { DynamicIcon } from "../DynamicIcon";
import { client } from "@/libs/contenful";

async function getData() {
  try {
    return await client.getEntries({content_type:"providers"}) 
  } catch (err) {
    return {
      items: []
    }
  }
}

export const Providers = async () => {
  
  const data = await getData()

  return (
    <div className="grid">
      {
        data.items.length === 0 ? <div className="text-center text-red-500">An error has occurred</div> : data?.items?.map((ele, i) => {
          return <Provider key={i + Date() + Math.random()} ele={ele} />;
        })
      }
    </div>
  );
};


function Provider({ ele }) {
  return (
        <Link href={{ pathname: `/Service/${ele.sys.id}` }}>
    <div className="h-[273px]">
      <div className="card">
        <div className="icon">
          <DynamicIcon iconName={ele.fields.icon} />
        </div>
        <span className="title">
          {ele.fields.name}
        </span>
          <p className="text">
          Touch me to see more information.
          </p>
      </div>
    </div>
        </Link>
  );
}