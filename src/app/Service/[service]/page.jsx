import { Suspense } from "react";
import { Info } from "@/components/Service/Info"
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Skeleton } from "@/components/Skeletons/ServiceInfoSkeleton";

export default function page({params}) {
    return <main className="mb-36">

      <div className="container">
      <Link href={"/"} className="inline-block w-fit">
        <Icon className={"p-2 mb-3"}>
          <IoIosArrowBack fontSize={"22px"} />
        </Icon>
      </Link>
      </div>

      <Suspense fallback={<Skeleton />}>
      <Info service={params.service} />
      </Suspense>

    </main>
}
