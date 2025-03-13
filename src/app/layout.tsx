import type { Metadata, Viewport } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";

// STYLE SHEETS SOURCE
import "../styles/globals.css";

// FONT CONFIGURATIONS
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// WEBSITE METADATA AND VIEWPORT
export const metadata: Metadata = {
  title: "Zevitech",
  description: "Always do your best. Somebody is watching you.",
  creator: "Sag3 Tech",
  applicationName: "Zevitech",

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-192x192.png",
        sizes: "192x192",
      },

      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-512x512.png",
        sizes: "512x512",
      },

      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/favicons/logo.svg",
      },

      {
        rel: "icon",
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },

      {
        rel: "shortcut icon",
        type: "image/png",
        url: "/favicons/logo.png",
      },
    ],

    apple: [
      {
        rel: "apple-touch-icon",
        type: "image/png",
        url: "/favicons/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${poppins.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
