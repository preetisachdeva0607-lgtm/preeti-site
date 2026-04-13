import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PreetiMindLab | Parenting Coach & DMIT Practitioner - Greater Noida",
  description:
    "Certified Parenting Coach, DMIT Practitioner, Educator & NLP Coach with 15+ years of experience transforming lives through parenting coaching, multiple intelligence analysis, and NLP coaching in Greater Noida.",
  keywords: [
    "parenting coach",
    "DMIT practitioner",
    "NLP coach",
    "child psychology",
    "Greater Noida",
    "parenting workshops",
    "memory enhancement",
    "CogniPrint",
  ],
  openGraph: {
    title: "PreetiMindLab | Parenting Coach & DMIT Practitioner",
    description:
      "Empowering Minds, Transforming Lives. 15+ years of experience in parenting coaching and DMIT analysis.",
    type: "website",
    locale: "en_IN",
    url: "https://preeti.khattars.us",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PreetiMindLab",
  description:
    "Certified Parenting Coach, DMIT Practitioner, Educator & NLP Coach",
  url: "https://preeti.khattars.us",
  telephone: "+918920038298",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
