export default function sitemap() {
  return [
    { url: "https://ezysantz-solution.vercel.app", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://ezysantz-solution.vercel.app/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://ezysantz-solution.vercel.app/cases", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://ezysantz-solution.vercel.app/about-us", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://ezysantz-solution.vercel.app/contact-us", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
