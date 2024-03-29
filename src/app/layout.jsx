import { Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from "@/Context/useContext";
import 'react-international-phone/style.css';
import "./globals.css";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display:"swap" });

export const metadata = {
  title: {
    template: '%s | Nosara Booking Center',
    default: 'Nosara Booking Center',
  },
  description: "Your gateway to adventure in Nosara starts here! Plan your trip now and discover a world of exciting experiences. From exploring mountain trails by ATV to touring Nosara in golf carts, we have everything you need to make your visit unforgettable. Plus, immerse yourself in the serenity of yoga, experience the thrill of catamaran excursions, explore the mountains on horseback, and indulge your taste buds at the area's finest restaurants. Book today and start planning an unforgettable trip to Nosara.",
  metadataBase: new URL('https://www.nosarabookingcenter.com'),
  alternates: {
    canonical: '/',
  },
  creator: 'Arrieta Family',
  url: 'https://www.nosarabookingcenter.com/',
  siteName: 'Nosara Booking Center',
  keywords: [
    "Nosara Booking Center",
    "Reserva de servicios en Nosara",
    "Tours y actividades en Nosara",
    "Alquiler de carritos de golf en Nosara",
    "Servicio de transporte en Nosara",
    "Alquiler de coches en Nosara",
    "Aventuras en el mar en Nosara",
    "Niñera en Nosara",
    "Servicio de limpieza en Nosara",
    "Chef en Nosara",
    "Book services in Nosara",
    "Nosara tours and activities",
    "Golf cart rentals Nosara",
    "Shuttle service Nosara",
    "Car rentals Nosara",
    "Sea adventures Nosara",
    "Nanny Nosara",
    "Cleaning service Nosara",
    "Chef Nosara"
],
robots: {
  index: true,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: true
  }
},
openGraph: {
  title: 'Nosara Booking Center: Book and Discover Better Experiences',
  description: "Your gateway to adventure in Nosara starts here! Plan your trip now and discover a world of exciting experiences. From exploring mountain trails by ATV to touring Nosara in golf carts, we have everything you need to make your visit unforgettable. Plus, immerse yourself in the serenity of yoga, experience the thrill of catamaran excursions, explore the mountains on horseback, and indulge your taste buds at the area's finest restaurants. Book today and start planning an unforgettable trip to Nosara.",
  images:[
    {
      url: "/opengraph-image.jpg",
      width:"1200",
      height:"630"
    }
  ],
  url: 'www.nosarabookingcenter.com/',
  siteName:"Nosara Booking Center",
  type:"website"
},
twitter: {
  card: 'summary_large_image',
  title: 'Nosara Booking Center: Book and Discover Better Experiences',
  description: 'Unlock adventure in Nosara! Plan now for thrilling ATV rides, golf cart tours, yoga serenity, catamaran excursions, horseback exploration, and fine dining. Book today!',
  creator: 'Arrieta Family'
}
};

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className} lang="en">
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