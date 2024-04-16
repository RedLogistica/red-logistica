export default function sitemap() {
  return [
    {
      url: "https://redlogistica.github.io/red-logistica/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://redlogistica.github.io/red-logistica/team",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://redlogistica.github.io/red-logistica/media",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
