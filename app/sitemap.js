export default async function sitemap() {

  const staticUrls = [
    {
      url: `https://vcs-alumni.vercel.app`,
      lastModified: new Date().toISOString(),
      priority: 1.0,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/about`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/alumni`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/gallery`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/guidance`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/contact`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/auth/login`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/developers`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/faqs`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/testimonial`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      frequency: "daily",
    },
    {
      url: `https://vcs-alumni.vercel.app/queries`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      frequency: "daily",
    },
  ];

  return [...staticUrls];
}
