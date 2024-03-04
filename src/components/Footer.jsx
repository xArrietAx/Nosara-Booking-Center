import Link from "next/link";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="py-10 mt-auto bg-gray-50">
      <div className="container flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Logo />

          <ul className="flex flex-wrap items-center mb-6 text-[15px] font-medium text-gray-700 sm:mb-0">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>

            <li>
              <Link href="Services" className="hover:underline me-4 md:me-6">
                Services
              </Link>
            </li>
            <li>
              <Link href="ContactUs" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-8 h-px border-0 bg-gray-300" />

        <p className="text-gray-700 text-sm text-center">
          © 2024 Nosara Booking Center. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
