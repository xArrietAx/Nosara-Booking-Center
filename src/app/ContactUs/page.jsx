import { Form } from "@/components/ContactUs/Form";
import { BiLogoGmail } from "react-icons/bi";

export default function page() {
  return (
    <main className="mb-28">
      <section className="container">
        <div className="flex justify-between gap-12 mt-14 lg:flex-col">
          <div className="space-y-6 w-[60%] lg:w-full">
          <div className="space-y-2">
          <h1 className="font-[600] text-[2.5em] sm:text-3xl lg:text-center">
            Contact us
          </h1>
          <p className="font-[400] text-xl sm:text-base lg:text-center">
          Tell us! Your questions, comments and greetings are welcome. We are here to support you in everything you need.
          </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:nbc@nosarabookingcenter.com"  className="flex items-center gap-2 w-fit p-2 rounded-xl hover:bg-gray-100">
              <BiLogoGmail fontSize={"22px"} color="red" />
              <span>nbc@nosarabookingcenter.com</span>
            </a>
          </div>
          </div>
          <Form />
        </div>
      </section>
    </main>
  );
}


// Book a variety of additional services, such as childcare, shopping, cleaning and zip line adventures, which may not be available directly on our website. Contact us for reservations or questions. We are here to help you.