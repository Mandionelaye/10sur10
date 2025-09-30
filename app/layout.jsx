import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headers from "@/libs/components/headers";
import Footer from "@/libs/components/Footer";
import Script from "next/script";
import Head from "next/head";
import { NextSeo } from "next-seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://10sur10.net"),
  keywords: [
    "10sur10",
    "10sur10.net",
    "cours à domicile",
    "cours particuliers à domicile",
    "soutien scolaire",
    "soutien scolaire Nouakchott",
    "soutien scolaire Mauritanie",
    "soutien scolaire à domicile",
    "soutien scolaire primaire",
    "soutien scolaire collège",
    "soutien scolaire lycée",
    "soutien scolaire en ligne",
    "aide aux devoirs",
    "aide aux devoirs primaire",
    "aide aux devoirs collège",
    "aide aux devoirs lycée",
    "cours particuliers Nouakchott",
    "cours particuliers Mauritanie",
    "cours particuliers toutes matières",
    "cours particuliers mathématiques",
    "cours particuliers français",
    "cours particuliers anglais",
    "cours particuliers sciences physiques",
    "cours particuliers SVT",
    "cours particuliers histoire géographie",
    "cours particuliers philosophie",
    "suivi scolaire personnalisé",
    "tutorat lycée Mauritanie",
    "préparation brevet Mauritanie",
    "préparation bac Nouakchott",
    "professeur à domicile Mauritanie",
    "professeur à domicile Nouakchott",
    "aide scolaire près de chez moi",
    "réussir le brevet en Mauritanie",
    "réussir le bac en Mauritanie",
    "soutien scolaire en Afrique",
    "cours en ligne Afrique francophone",
  ],
  title: {
    default:
      "10sur10 - Soutien scolaire et cours particuliers à domicile en Mauritanie et Afrique",
    template: "%s | 10sur10",
  },
  description:
    "10sur10.net propose un accompagnement scolaire personnalisé en Mauritanie : soutien scolaire, aide aux devoirs et cours particuliers à domicile pour élèves du primaire, collège et lycée. Professeurs qualifiés pour toutes les matières (maths, français, sciences, anglais, etc.) afin d’assurer la réussite scolaire.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://10sur10.net",
    title:
      "10sur10 - Soutien scolaire et cours particuliers à domicile en Mauritanie et Afrique",
    description:
      "Cours particuliers et soutien scolaire à domicile à Nouakchott et partout en Mauritanie. Aide aux devoirs et accompagnement personnalisé du primaire au lycée par des professeurs qualifiés.",
    siteName: "10sur10",
    images: [
      {
        url: "https://10sur10.net/assets/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "10sur10 Soutien scolaire Mauritanie",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
       <Head>
        {/* Script Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-N4CX8X97LP`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4CX8X97LP');
          `}
        </Script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        
      <NextSeo
        title="10sur10 – Soutien scolaire et cours particuliers à domicile en Mauritanie"
        description="10sur10.net propose des cours particuliers et du soutien scolaire à domicile pour le primaire, collège et lycée. Professeurs qualifiés pour toutes les matières."
        canonical="https://10sur10.net/"
        openGraph={{
          url: "https://10sur10.net/",
          title: "10sur10 – Soutien scolaire en Mauritanie",
          description:
            "Cours particuliers à domicile et aide aux devoirs pour élèves du primaire, collège et lycée.",
          images: [
            {
              url: "https://10sur10.net/assets/logo/logo.png",
              width: 1200,
              height: 630,
              alt: "10sur10 Soutien scolaire Mauritanie",
            },
          ],
          site_name: "10sur10",
        }}
      />


        <Headers />
        <div id="google_translate_element" style={{ display: "none" }}></div>
          <div className="min-h-screen bg-white">
            {children}
          </div>
        <Footer />

        <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
