import { getHouses, getTours } from "@/services"

export default async function sitemap() {

    const tours = await getTours()

    const houses = await getHouses()

    const Tours = tours.data.map(({name, id}) => {
        return {
            url: `https://www.nosarabookingcenter.com/Tours/${name.replace(/ /g, "-")}/${id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,   
        }
    })

    const Houses = houses.data.map(({name, id}) => {
        return {
            url: `https://www.nosarabookingcenter.com/Vacation_rentals/${name.replace(/ /g, "-")}/${id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,   
        }
    })

    return [
        {
            url: 'https://www.nosarabookingcenter.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: 'https://www.nosarabookingcenter.com/About',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.nosarabookingcenter.com/Contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://www.nosarabookingcenter.com/Vacation_rentals',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.nosarabookingcenter.com/Tours',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.nosarabookingcenter.com/Service/Shuttle',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://www.nosarabookingcenter.com/Service/ATV',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://www.nosarabookingcenter.com/Service/Golf_cart',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://www.nosarabookingcenter.com/Service/Car',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...Houses,
        ...Tours
    ];
}