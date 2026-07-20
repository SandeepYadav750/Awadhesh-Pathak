import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Awadhesh Pathak | Official Website",
  description:
    "Welcome to the official website of Awadhesh Pathak. Learn about his vision, mission, public initiatives, achievements, latest news, gallery, and connect with him to build a stronger and more prosperous future.",
  keywords: [
    "Awadhesh Pathak",
    "Awadhesh Pathak Official",
    "Politician",
    "Leader",
    "Uttar Pradesh",
    "Public Service",
    "Development",
    "Politics",
    "Gallery",
    "Contact",
  ],
  authors: [{ name: "Awadhesh Pathak Team" }],
  creator: "Awadhesh Pathak",
  publisher: "Awadhesh Pathak",
  openGraph: {
    title: "Awadhesh Pathak | Official Website",
    description:
      "Discover the vision, mission, achievements, and public initiatives of Awadhesh Pathak. Stay updated with the latest news, events, gallery, and contact information.",
    url: "https://awadheshpathak.com",
    siteName: "Awadhesh Pathak",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Awadhesh Pathak",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awadhesh Pathak | Official Website",
    description:
      "Official website of Awadhesh Pathak. Explore his vision, public service, initiatives, and latest updates.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <ToastContainer />
        <main className="SandeepYadav flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
