export const metadata = {
  title: "Nos Services - 10sur10",
  description:
    "Découvrez nos services de soutien scolaire : cours particuliers à domicile, aide aux devoirs, suivi scolaire personnalisé pour primaire, collège et lycée en Mauritanie.",
  keywords: [
    "cours particuliers Mauritanie",
    "soutien scolaire Nouakchott",
    "aide aux devoirs à domicile",
    "préparation bac Mauritanie",
    "tutorat scolaire",
  ],
  openGraph: {
    title: "Services - 10sur10",
    description:
      "Un accompagnement scolaire complet : maths, français, sciences, anglais, philosophie et plus encore.",
    url: "https://10sur10.net/services",
    siteName: "10sur10",
    images: [
      {
        url: "https://10sur10.net/assets/logo/logo.png",
        width: 800,
        height: 600,
        alt: "10sur10 Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};


export default function ServiceLayout({
  children,
}) {
  return (
    <div>
      {children}
    </div>
  )
}