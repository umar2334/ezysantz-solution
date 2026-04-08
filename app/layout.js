import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "Ezysantz Solution",
    template: "%s | Ezysantz Solution",
  },
  description:
    "Ezysantz Solution is a Pakistan-based software agency offering Full Stack Development, Mobile App Development, BaaS & Cloud Solutions, Responsive Web Design, WordPress Development, and Plugin Customization.",
  keywords: [
    "full stack development",
    "mobile app development",
    "WordPress development",
    "web design Pakistan",
    "software agency Pakistan",
    "React Next.js developer",
    "BaaS cloud solutions",
    "WooCommerce development",
    "Ezysantz Solution",
    "hire developer Pakistan",
    "freelance web developer",
    "responsive web design",
  ],
  authors: [{ name: "Ezysantz Solution", url: "https://ezysantz.vercel.app" }],
  creator: "Ezysantz Solution",
  metadataBase: new URL("https://ezysantz.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ezysantz Solution — Full Stack, Mobile & WordPress Development",
    description:
      "Pakistan-based software agency delivering Full Stack, Mobile, Cloud & WordPress solutions for startups and businesses worldwide.",
    url: "https://ezysantz.vercel.app",
    siteName: "Ezysantz Solution",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Ezysantz Solution" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezysantz Solution — Full Stack, Mobile & WordPress Development",
    description:
      "Pakistan-based software agency delivering Full Stack, Mobile, Cloud & WordPress solutions.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#08080a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
