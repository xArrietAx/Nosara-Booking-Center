import { ContextProvider } from "@/Context/useContext";
import { metadataDefault } from "@/SEO/index"; 
import "react-international-phone/style.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Header2 } from "@/shared/Header2";
import { Footer } from "@/shared/Footer";
import "@splidejs/react-splide/css";
import "react-day-picker/style.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import "../styles/main.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = metadataDefault;

const Whatsapp = dynamic(() =>
  import('@/components/Whatsapp/Whatsapp').then((mod) => mod.Whatsapp),
{ssr: false}
)

export default function RootLayout({ children }) {
  return (
    <html className={poppins.className} lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CF7S1DCT2D"
        ></Script>
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
          <Header2 />
          {children}
          <Footer />
        </ContextProvider>
        <Toaster />
        <Whatsapp />
      </body>
    </html>
  );
}