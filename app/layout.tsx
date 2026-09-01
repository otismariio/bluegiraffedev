import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";

export const metadata: Metadata = {
  title: "Blue Giraffe Development Ltd",
  description: "Thoughtful digital products, web development and Smart School solutions.",
  robots: "index, follow",
  openGraph: { title: "Blue Giraffe Development Ltd", description: "Thoughtful digital products, web development and Smart School solutions.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
