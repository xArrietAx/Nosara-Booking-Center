const title = "Discover Nosara: Vacation Homes, Tours, and Rentals"

const description = "We specialize in providing vacation homes, exciting tours, and property management services in Nosara. Discover the best of Nosara with our wide range of rental options and activities. Experience Nosara like never before with our expert services and local insights for an unforgettable Nosara, Costa Rican getaway."

const url = "https://www.nosarabookingcenter.com"

const metadataDefault = {
  metadataBase: new URL(url),

  title: {
    template: `%s | Nosara Booking Center`,
    default: title,
  },
  description,

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Nosara vacation rentals",
    "Alquileres vacacionales en Nosara",
    "Nosara tours",
    "Tours en Nosara",
    "Property management Nosara",
    "Gestión de propiedades en Nosara",
    "Nosara beach rentals",
    "Luxury rentals Nosara",
    "Casas de alquiler Nosara",
    "Nosara real estate",
    "Nosara actividades",
    "Costa Rica vacation rentals",
    "Nosara surfing tours",
    "Eco-tours Nosara",
    "Alquileres frente a la playa Nosara",
  ],

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },

  siteName: "Nosara Booking Center",
  creator: "Andrés Arrieta",
  url: url,
  category: "Real state",
};

export { metadataDefault };
