import "./globals.css";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Dr. Serena Blake, Ph.D. - Clinical Psychologist",
  description:
    "Professional therapy services - Individual psychotherapy for adults via telehealth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${sourceSerif.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
