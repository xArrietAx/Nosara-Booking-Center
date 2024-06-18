import { PaginationControls } from "../components/PaginationControls";
import { StayCard } from "@/components/StayCard";
import supabase from "@/utils/Supabase";

export async function getPaginationData(page, table, perPage) {

    const offset = (page - 1) * perPage;
  
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .range(offset, offset + perPage - 1);
  
    return { data, error };
}

export default async function Stays({ page, totalCount }) {

  const perPage = 7

  const { data, error } = await getPaginationData(page, "House", perPage);

  if (error) {
    return <div>Error an ocurred, try again later</div>
  }

  return (
    <>
    <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((stay, i) => (
        <StayCard key={i + Date + Math.random()} data={stay} className="border rounded-2xl hover:shadow-xl transition-shadow" />
      ))}
    </div>
    <PaginationControls page={page} totalCount={totalCount} perPage={perPage} Anchors="#Stays" />
    </>
  );
}
