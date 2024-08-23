const title = "Rent a Golf Cart in Nosara: Easy and Fun"

const description = "Rent a golf cart in Nosara for easy and enjoyable transportation. Book today and explore Nosara with comfort and style."

const metadataGolfCart = {
    title,
    description,
    alternates: {
      canonical: "/Service/Golf_cart",
    },

    openGraph: {
      title,
      description,
      images: [
        {
          url: "/GolfCart.webp",
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
          url: "/GolfCart.webp",
          width:1200,
          heigth:630,
          alt: title
        }
      ],
    }
  

}

export { metadataGolfCart }
