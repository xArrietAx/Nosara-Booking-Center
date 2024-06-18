import supabase from "@/utils/Supabase"

async function getTours() {
    const { data } = await supabase.from('Tours').select("*")

    const tours = data

    return {tours}
}

async function getHouses() {
    const { data } = await supabase.from('House').select("*")

    const houses = data

    return {houses}
}

export default async function sitemap() {

    const { tours } = await getTours()

    const { houses } = await getHouses()

    const Tours = tours.map((item, i) => {
        return {
            url: `https://nosarabookingcenter.com/Tours/${item.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,   
        }
    })

    const Houses = houses.map((item, i) => {
        return {
            url: `https://nosarabookingcenter.com/Vacation-rentals/${item.id}`,
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
            url: 'https://nosarabookingcenter.com/Vacation-rentals',
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
            url: 'https://nosarabookingcenter.com/Service/GolfCart',
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



