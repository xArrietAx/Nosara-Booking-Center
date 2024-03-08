import { Form } from "@/components/ContactUs/Form";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function page() {
  return (
    <main className="mb-28">
      <section className="container">
        <div className="flex justify-between gap-12 mt-14 lg:flex-col">
          <div className="space-y-6 w-[60%] lg:w-full">
          <div className="space-y-3">
          <h1 className="font-[600] text-[2.5em] sm:text-3xl lg:text-center">
            Contact us
          </h1>
          <p className="font-[400] text-xl sm:text-base lg:text-center">
          Book a variety of additional services, such as childcare, chef and cleaning , which may not be available directly on our website. Contact us for reservations or questions. We are here to help you.
          </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:nbc@nosarabookingcenter.com"  className="flex items-center gap-2 w-fit p-2 rounded-xl hover:bg-gray-100">
              <BiLogoGmail fontSize={"22px"} color="red" />
              <span>nbc@nosarabookingcenter.com</span>
            </a>
            <a href="https://wa.me/50686012266?text=Hello, Nosara Booking Center. I need you to book me [Your next reservation]" target="_blank" className="flex items-center gap-2 w-fit p-2 rounded-xl hover:bg-gray-100">
              <IoLogoWhatsapp fontSize={"22px"} color="#25D366" />
              <span>+506 8601 2266</span>
            </a>
          </div>
          </div>
          <Form />
        </div>
      </section>
    </main>
  );
}


