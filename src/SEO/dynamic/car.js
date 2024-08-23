const title = "Rent a Car in Nosara: Convenience and Freedom"

const description = "Rent a car in Nosara and explore the area with ease. Book now for a hassle-free experience in Nosara, Costa Rica."

const metadataCar = {
    title,
    description,
    alternates: {
      canonical: "/Service/Car",
    },

    openGraph: {
      title,
      description,
      images: [
        {
          url: "/Car.webp",
          width:1200,
          heigth:630,
          alt: title,
        },
      ],
    },

    twitter: {
      title,
      description,
      images: [
        {
          url: "/Car.webp",
          width:1200,
          heigth:630,
          alt: title,
        },
      ],
    }

}

export { metadataCar }
