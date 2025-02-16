import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Vaishali Central School | 2025",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`antialiased`}
        >
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
