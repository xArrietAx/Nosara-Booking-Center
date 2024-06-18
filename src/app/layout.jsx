import { ContextProvider } from "@/context/useContext";
import "react-international-phone/style.css";
import { Poppins } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import { Footer } from "@/Shared/Footer";
import { Header } from "@/Shared/Header";
import "@/styles/ReactDatePicker.css";
import '@splidejs/react-splide/css';
import Script from "next/script";
import "@/styles/Form.css";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display:"swap" });

export const metadata = {
  
  metadataBase: new URL('https://www.nosarabookingcenter.com'),

  title: {
    default: 'Nosara Booking Center | Vacation rentals, tours & shuttle',
    template: '%s | Nosara Booking Center'
  },
  
  description: "We accompany you on a trip full of experiences in Nosara. We offer houses, shuttles, ATV rentals, golf cart rentals, and more in Nosara. Enjoy the best of Nosara with our services.",
  
  keywords: [
  "Nosara vacation home rentals",
  "Nosara holiday home reservations",
  "Nosara vacation rentals",
  "ATV rentals Nosara",
  "All-terrain vehicle rentals Nosara",,
  "Nosara shuttle service",
  "Nosara private transportation",
  "Nosara car rentals",
  "Nosara auto rentals",
  "Nosara vehicle rentals",
  "Nosara golf cart rentals",
  "Nosara golf buggy rentals",
  "Adventure tours Nosara",
  "ATV excursions Nosara",
  "Nosara shuttle transfers"
  ],
  
  openGraph: {
    title: 'Nosara Booking Center | Vacation rentals, tours & shuttle',
    description: "We accompany you on a trip full of experiences in Nosara. We offer houses, shuttles, ATV rentals, golf cart rentals, and more in Nosara. Enjoy the best of Nosara with our services.",
    images:[
      {
        url:"/opengraph-image.png",
        alt:"Nosara Booking Center | Vacation rentals, tours & shuttle",
        width:"1200",
        height:"630",
      }
    ],
    url: 'www.nosarabookingcenter.com/',
    siteName:"Nosara Booking Center",
    type:"website"
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nosara Booking Center | Vacation rentals, tours & shuttle',
    description: 'Accompanying us, you have a trip full of experiences. With houses, shuttles, ATV rental, golf carts rental and much more',
    images:[
      {
        url:"/twitter-image.png",
        alt:"Nosara Booking Center | Vacation rentals, tours & shuttle",
        width:"1200",
        height:"630"
      }
    ],
    creator: 'Andrés Arrieta',
    url: 'www.nosarabookingcenter.com/',
    siteName:"Nosara Booking Center",
    type:"website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-image-preview': 'large',
    },
  },

  siteName: 'Nosara Booking Center',
  creator: 'Andrés Arrieta',
  url: 'https://www.nosarabookingcenter.com/',
  category: 'Vacations',

};

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className} lang="en">
          <head>
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CF7S1DCT2D"></Script>
    <Script id="google-analytics">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-CF7S1DCT2D');
    `}
    </Script>

      </head>
      <body>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ContextProvider>
      </body>
    </html>
  );
}


// NO TOCAR HASTA HACER SEO