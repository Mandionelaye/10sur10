export const metadata = {
  title: "Contact - 10sur10",
  description:
    "Contactez 10sur10.net pour toute demande de soutien scolaire, cours particuliers ou aide aux devoirs en Mauritanie.",
  keywords: [
    "contact soutien scolaire Mauritanie",
    "contact cours particuliers Nouakchott",
    "professeur à domicile Mauritanie",
    "cours soutien scolaire contact",
  ],
  openGraph: {
    title: "Contact - 10sur10",
    description:
      "Envoyez-nous vos questions sur nos services de soutien scolaire en Mauritanie.",
    url: "https://10sur10.net/contact",
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

export default function ContactLayout({
  children,
}) {
  return (
    <div>
      {children}
    </div>
  )
}
