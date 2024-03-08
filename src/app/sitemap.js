export default function sitemap() {
    return [
      {
        url: 'https://www.nosarabookingcenter.com/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.nosarabookingcenter.com/Services',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.nosarabookingcenter.com/ContactUs',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      }
    ]
  }