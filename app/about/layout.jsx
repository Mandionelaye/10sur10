export const metadata = {
  title: "À propos - 10sur10",
  description:
    "10sur10.net est une plateforme dédiée au soutien scolaire en Mauritanie : des enseignants expérimentés pour accompagner les élèves du primaire au lycée.",
  keywords: [
    "à propos 10sur10",
    "soutien scolaire Nouakchott",
    "cours particuliers Mauritanie",
    "aide scolaire primaire collège lycée",
  ],
  openGraph: {
    title: "À propos - 10sur10",
    description:
      "Notre mission est d’assurer la réussite scolaire en offrant des cours adaptés et personnalisés.",
    url: "https://10sur10.net/about",
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




export default function AboutLayout({
  children,
}) {
  return (
    <div>
      {children}
    </div>
  )
}