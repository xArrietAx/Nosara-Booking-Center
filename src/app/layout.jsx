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
  description: "Looking for an exciting adventure? Want to relax and rejuvenate? Need help with cleaning or childcare? No matter what you're looking for, Nosara Booking Center has what you need.",
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
    noimageindex: true,
  },
},
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