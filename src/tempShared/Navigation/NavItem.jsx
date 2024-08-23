"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavItem({item}) {

  const pathname = usePathname()

  const active = pathname === item.url

    return <li className="flex items-center hover:text-dark" >
    <Link href={item.url} className={`bg-hover px-5 py-2 rounded whitespace-nowrap ${ active ? "text-primary" : null } `}>
      {item.name}
    </Link>
  </li>
}