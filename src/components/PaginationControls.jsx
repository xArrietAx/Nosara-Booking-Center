"use client"

import { useRouter } from "next/navigation";

export function PaginationControls({ page, totalCount, perPage, Anchors }) {

  const router = useRouter();

  const buttons = Math.ceil(totalCount / perPage)

  if (buttons === 1) {
    return 
  }

  return (
    <div className="flex justify-center gap-2 mt-10">
        {[...Array(buttons).keys()].map((item, i) => {
          const active = item + 1 === Number(page);
          return (
            <button key={i + Date + Math.random()} className={`btn px-5 ${active ? "btn-primary text-white" : "bg-gray-50 hover:bg-gray-100" }`}  
                    onClick={() => {router.push(`?page=${item + 1}${Anchors ? Anchors : "" }`)}}>
              {item + 1}
            </button>
          );
        })}
      </div> 
  );
}