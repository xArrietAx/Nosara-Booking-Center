import Image from "next/image";
import Link from "next/link";

function Page404() {
  return <main>
    <section className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <Image src={"/404.webp"} alt="not-found" width={1500} height={1000} priority />
        <span className="block text-sm text-gray-800 sm:text-base tracking-wider font-medium">
         {"THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST"}
        </span>
        <div className="pt-8">
          <Link href="/" className="custom-btn">Return Home Page</Link>
        </div>
      </div>
    </section>
  </main>

}

export default Page404;

// NO TOCAR