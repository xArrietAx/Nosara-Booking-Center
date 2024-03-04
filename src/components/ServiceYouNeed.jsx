import Link from "next/link";

export function ServiceYouNeed() {
    return <section className="py-32 mt-28 bg-gray-50">
        <div className="container">
            <div className="flex flex-col items-center gap-6">
                <h2 className="font-[600] text-center text-4xl sm:text-2xl">Can not find the service you need?</h2>
                <p className="max-w-[900px] text-center sm:text-sm">We are here to help you find the best option to enjoy your trip in Nosara. Please leave us a message with the details of what you are looking for, and we will get in touch with you as soon as possible to provide the personalized assistance you need.</p>
               <Link href={"/ContactUs"} className="btn btn-outline rounded-none">Tell us what you want</Link>
            </div>
        </div>
    </section>
}