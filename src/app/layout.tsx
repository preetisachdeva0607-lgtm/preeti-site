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
  title: "Student Success Academy | CogniPrint Analysis & Coaching - Greater Noida",
  description:
    "Certified CogniPrint Analyst, Parenting Coach, Educator & NLP Coach with 15+ years of experience transforming lives through psychometric assessment, parenting coaching, and NLP coaching in Greater Noida.",
  keywords: [
    "CogniPrint analysis",
    "parenting coach",
    "psychometric assessment",
    "NLP coach",
    "child psychology",
    "Greater Noida",
    "parenting workshops",
    "memory enhancement",
    "Student Success Academy",
  ],
  openGraph: {
    title: "Student Success Academy | CogniPrint Analysis & Coaching",
    description:
      "Empower • Educate • Evolve. 15+ years of experience in psychometric assessment and parenting coaching.",
    type: "website",
    locale: "en_IN",
    url: "https://preeti.khattars.us",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Student Success Academy",
  description:
    "Certified CogniPrint Analyst, Parenting Coach, Educator & NLP Coach",
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
