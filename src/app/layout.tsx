import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selvendran M - Professional IT Portfolio",
  description: "Personal portfolio website of Selvendran M, Final Year B.Tech IT student specializing in Java, Python, and Data Science.",
  keywords: [
    "Selvendran M",
    "IT Portfolio",
    "Software Engineer",
    "Data Science",
    "B.Tech Information Technology",
    "St. Peter's College of Engineering and Technology"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md text-body-md min-h-screen flex flex-col antialiased selection:bg-secondary-container selection:text-on-secondary-fixed">
        {children}
      </body>
    </html>
  );
}
