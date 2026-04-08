import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "Ezysantz Solution — Web & Mobile App Development Agency Pakistan",
    template: "%s | Ezysantz Solution",
  },
  description:
    "Ezysantz Solution is a Pakistan-based software agency specializing in Full Stack Web Development, Mobile App Development, WordPress, and Cloud Solutions. Serving clients globally from Islamabad, Pakistan.",
  keywords: [
    "web development company Pakistan",
    "software agency Pakistan",
    "full stack developer Pakistan",
    "mobile app development Pakistan",
    "WordPress developer Pakistan",
    "web developer Islamabad",
    "React Next.js developer Pakistan",
    "hire web developer Pakistan",
    "WooCommerce developer Pakistan",
    "cloud solutions Pakistan",
    "affordable web development",
    "Ezysantz Solution",
    "best web developer Pakistan",
    "website design Pakistan",
    "app developer Islamabad",
  ],
  authors: [{ name: "Ezysantz Solution", url: "https://ezysantz-solution.vercel.app" }],
  creator: "Ezysantz Solution",
  metadataBase: new URL("https://ezysantz-solution.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ezysantz Solution — Web & Mobile App Development Agency Pakistan",
    description:
      "Pakistan-based software agency delivering Full Stack, Mobile, Cloud & WordPress solutions for startups and businesses worldwide.",
    url: "https://ezysantz-solution.vercel.app",
    siteName: "Ezysantz Solution",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Ezysantz Solution" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezysantz Solution — Web & Mobile App Development Agency Pakistan",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Ezysantz Solution",
  "url": "https://ezysantz-solution.vercel.app",
  "logo": "https://ezysantz-solution.vercel.app/logo.png",
  "image": "https://ezysantz-solution.vercel.app/logo.png",
  "description": "Pakistan-based software agency specializing in Full Stack Development, Mobile Apps, WordPress, and Cloud Solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Islamabad",
    "addressCountry": "PK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "umarfreelancerweb@gmail.com",
    "contactType": "customer service",
    "availableLanguage": ["English", "Urdu"]
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61573226697539",
    "https://www.instagram.com/ezsynatz.dev",
    "https://github.com/umar2334"
  ],
  "serviceType": [
    "Full Stack Web Development",
    "Mobile App Development",
    "WordPress Development",
    "BaaS & Cloud Solutions",
    "Responsive Web Design",
    "WooCommerce Development"
  ],
  "areaServed": "Worldwide",
  "priceRange": "$$"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#08080a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
