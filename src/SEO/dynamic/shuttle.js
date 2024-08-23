const title = "Shuttle Service to and from Nosara: Reliable and Convenient"

const description = "Book a shuttle to or from Nosara for reliable and convenient transportation. Reserve your ride today for a smooth journey between Nosara and your destination in Costa Rica."

const metadataShuttle = {
    title,
    description,
    alternates: {
      canonical: "/Service/Shuttle",
    },

    openGraph: {
      title,
      description,
      images: [
        {
          url: "/Shuttle.webp",
          width:1200,
          heigth:630,
          alt: title
        }
      ],
    },

    twitter: {
      title,
      description,
      images: [
        {
          url: "/Shuttle.webp",
          width:1200,
          heigth:630,
          alt: title
        }
      ],
    }

}

export { metadataShuttle }
