const title = "Golf Cart Rentals in Nosara, Costa Rica"

const description = "Nosara Booking Center offers convenient golf cart rentals in Nosara, Costa Rica. Explore the area with ease using our well-maintained and reliable golf carts."

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
