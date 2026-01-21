import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Baloo_Bhai_2, Saira } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const baloo = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-baloo",
});

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Carpool - Share Rides, Split Costs, Work Together",
  description:
    "Find trusted carpool partners within your organization. Save big on commuting, strengthen bonds with colleagues, and ride greener together.",
  keywords: [
    "carpool",
    "ride sharing",
    "corporate carpooling",
    "commute",
    "save money",
    "eco-friendly travel",
  ],
  openGraph: {
    title: "Carpool - Share Rides, Split Costs, Work Together",
    description:
      "Find trusted carpool partners within your organization. Save big on commuting and ride greener together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${baloo.variable} ${saira.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
