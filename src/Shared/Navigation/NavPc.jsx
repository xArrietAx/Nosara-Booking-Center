import { NavItemDropDown } from "./NavItemDropDown";
import link from "@/config/links";
import Link from "next/link";

export function Nav() {
    return (
      <nav className="z-50 hidden h-full text-gray-600 lg:block">
        <ul className="flex h-full">
          <li className="flex items-center hover:text-gray-900">
            <Link href={link.Home} className="px-4 py-2 rounded-3xl hover:bg-gray-50">
              Home
            </Link>
          </li>
          <li className="flex items-center hover:text-gray-900">
            <Link href={link.About} className="px-4 py-2 rounded-3xl hover:bg-gray-50">
              About
            </Link>
          </li>
          <li className="flex items-center hover:text-gray-900">
            <Link href={link.Contact} className="px-4 py-2 rounded-3xl hover:bg-gray-50">
              Contact us
            </Link>
          </li>
          <li className="flex items-center hover:text-gray-900">
            <Link href={link.VacationRentals} className="px-4 py-2 rounded-3xl hover:bg-gray-50">
              Vacation rentals
            </Link>
          </li>
          <li className="flex items-center hover:text-gray-900">
            <Link href={link.Tours} className="px-4 py-2 rounded-3xl hover:bg-gray-50">
              Tours
            </Link>
          </li>
          <li className="flex items-center hover:text-gray-900">
            <Link href={link.ShuttleRental} className="px-4 py-2 rounded-3xl hover:bg-gray-50">
              Shuttle
            </Link>
          </li>
  
          <NavItemDropDown title="Rental" childs={[{name:"ATV", href: link.AtvRental}, {name:"Golf cart", href: link.GolfCartRental}, {name:"Car", href: link.CarRental}]} />

        </ul>
      </nav>
    );
  }
  