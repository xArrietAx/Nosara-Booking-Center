const title = "ATV Rentals in Nosara, Costa Rica"

const description = "Nosara Booking Center provides reliable ATV rentals in Nosara, Costa Rica. Rent an ATV for easy and efficient transportation around the area."

const metadataAtv = {
    title,
    description,

    alternates: {
      canonical: "/Service/ATV",
    },

    openGraph: {
      title,
      description,
      images: [
        {
          url: "/ATV.webp",
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
          url: "/ATV.webp",
          width:1200,
          heigth:630,
          alt: title
        }
      ],
    }
}

export { metadataAtv }
