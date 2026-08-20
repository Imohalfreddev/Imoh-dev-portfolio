import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alfred Imoh: Full Stack Developer | React, Next.js & Node.js",
  description:
    "Alfred Imoh is a full-stack software engineer who builds modern, end-to-end web applications with a focus on clean code and real-world impact. He works across React, Node.js, FastAPI, and PostgreSQL.",
  keywords: [
    "Alfred Imoh",
    "Alfred Imoh developer",
    "Alfred Imoh portfolio",
    "Alfred Imoh Nigeria",
    "Full Stack Developer Nigeria",
    "React Developer Nigeria",
    "Next.js Developer",
    "Node.js Developer",
    "FastAPI Developer",
    "PostgreSQL Developer",
    "JavaScript Developer",
    "Full Stack Software Engineer",
    "SaaS Developer",
    "eCommerce Developer",
  ],
  authors: [
    { name: "Alfred Imoh" },
    { name: "Alfred Imoh", url: "https://imoh-portfolio.vercel.app" },
  ],
  creator: "Alfred Imoh",
  publisher: "Alfred Imoh",
  category: "Technology",
  metadataBase: new URL("https://imoh-portfolio.vercel.app"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Alfred Imoh: Full Stack Developer | React, Next.js & Node.js",
    description:
      "Full-stack software engineer building modern web apps with React, Node.js, FastAPI, and PostgreSQL. Shipped products across SaaS, eCommerce, and lead generation.",
    url: "https://imoh-portfolio.vercel.app",
    siteName: "Alfred Imoh",
    images: [
      {
        url: "/hero/bg.png",
        width: 1200,
        height: 630,
        alt: "Alfred Imoh: Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfred Imoh: Full Stack Developer | React & Node.js",
    description:
      "Full-stack software engineer building modern web apps with React, Node.js, FastAPI, and PostgreSQL. Clean code. Real-world impact.",
    siteId: "",
    creator: "@Alfred_Imoh",
    creatorId: "@Alfred_Imoh",
    images: ["/hero/bg.png"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center min-h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}