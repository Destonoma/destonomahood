import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://destonomahood.vercel.app"),

  title: "Destonoma Hood",
  description: "Join the Early Supporter Campaign built on Robinhood Chain.",

  openGraph: {
    title: "Destonoma Hood",
    description: "Join the Early Supporter Campaign built on Robinhood Chain.",
    url: "https://destonomahood.vercel.app",
    siteName: "Destonoma Hood",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1536,
        height: 864,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Destonoma Hood",
    description: "Join the Early Supporter Campaign built on Robinhood Chain.",
    images: ["/images/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}