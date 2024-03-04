import Link from 'next/link'

export default function NotFound() {
    return <div className="container">
    <div className="flex flex-col items-center mt-44 md:mt-28">
        <h2 className="font-[600] font text-center text-7xl sm:text-5xl">404</h2>
        <p className="text-lg">Page Not Found</p>
        <Link href="/" className="mt-4 text-lg text-blue-600 hover:underline">Go back home</Link>
    </div>
    </div>
}