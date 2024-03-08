import { Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from "@/Context/useContext";
import 'react-international-phone/style.css';
import "./globals.css";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display:"swap" });

export const metadata = {
  title: "Nosara Booking Center",
  description: "On our site you can discover and book exciting services to enjoy your stay in Nosara such as ATV tours, golf cart rentals, massages, yoga and much more",
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