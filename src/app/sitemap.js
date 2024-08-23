import { getHouses, getTours } from "@/services"

export default async function sitemap() {

    const tours = await getTours()

    const houses = await getHouses()

    const Tours = tours.data.map(item => {
        return {
            url: `https://nosarabookingcenter.com/Tours/${item.name}/${item.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,   
        }
    })

    const Houses = houses.data.map(item => {
        return {
            url: `https://nosarabookingcenter.com/Vacation_rentals/${item.name}/${item.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,   
        }
    })

    return [
        {
            url: 'https://nosarabookingcenter.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: 'https://nosarabookingcenter.com/About',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://nosarabookingcenter.com/Contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://nosarabookingcenter.com/Vacation_rentals',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://nosarabookingcenter.com/Tours',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://nosarabookingcenter.com/Property_management',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://nosarabookingcenter.com/Property_marketing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://nosarabookingcenter.com/Service/Shuttle',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://nosarabookingcenter.com/Service/ATV',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://nosarabookingcenter.com/Service/Golf_cart',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: 'https://nosarabookingcenter.com/Service/Car',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...Houses,
        ...Tours
    ];
}