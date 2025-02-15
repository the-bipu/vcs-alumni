import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaishali Central School | 2025",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
