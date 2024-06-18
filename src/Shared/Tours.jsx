import { PaginationControls } from "../components/PaginationControls";
import { TourCard } from "@/components/TourCard";
import supabase from "@/utils/Supabase";

export async function getPaginationData(page, table, perPage) {

    const offset = (page - 1) * perPage;
  
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .range(offset, offset + perPage - 1);
  
    return { data, error };
}

export default async function Tours({ page, totalCount }) {

  const perPage = 8

  const { data, error } = await getPaginationData(page, "Tours", perPage);

  if (error) {
    return <div>Error an ocurred, try again later</div>
  }

  return (
    <>
    <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item, i) => (
        <TourCard key={item.id} data={item} className="border rounded-2xl hover:shadow-xl transition-shadow" />
      ))}
    </div>
    <PaginationControls page={page} totalCount={totalCount} perPage={perPage} Anchors="#Tours" />
    </>
  );
}
