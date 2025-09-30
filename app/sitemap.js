export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://10sur10.net/",
      lastModified: now,
      changeFrequency: "daily", // page d'accueil -> mise à jour fréquente
      priority: 1.0,
    },
    {
      url: "https://10sur10.net/services",
      lastModified: now,
      changeFrequency: "weekly", // services mis à jour régulièrement
      priority: 0.9,
    },
    {
      url: "https://10sur10.net/a-propos",
      lastModified: now,
      changeFrequency: "monthly", // infos rarement modifiées
      priority: 0.6,
    },
    {
      url: "https://10sur10.net/contact",
      lastModified: now,
      changeFrequency: "yearly", // page statique
      priority: 0.4,
    },
  ];
}
