const title = "Rent Your ATV in Nosara: Your Adventure Awaits"

const description = "Rent an ATV in Nosara for an exciting and memorable ride. Book now and experience the thrill of exploring Nosara, Costa Rica."

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
