import { Category } from "./Category";
import { client } from "@/libs/contenful";

async function getData() {
    try {
      return await client.getEntries({content_type:"product"}) 
    } catch (err) {
      return {
        items: []
      }
    }
}
  
export async function Categories() {

  const data = await getData();

    return <div className="flex flex-col gap-14">
        {data?.items?.map((category, i) => {
           return <Category key={i + Date + Math.random()} data={category} />
        })}
    </div>
}