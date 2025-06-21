import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth";

import { SessionProvider } from "next-auth/react";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const space_Grotesk = Space_Grotesk({
  variable: "--font-Space-Grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log("asuth", session)
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
      </head>
      <SessionProvider session={session}>
        <body
          className={`${inter.variable} ${space_Grotesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar/> */}

            {children}
          </ThemeProvider>
        </body>
        <Toaster />
      </SessionProvider>
    </html>
  );
}
