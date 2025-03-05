  import type { Metadata } from "next";
  import { Inter,Space_Grotesk } from "next/font/google";
  import "./globals.css";
import ThemeProvider from "@/context/Theme";




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
  

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${space_Grotesk.variable} antialiased`}
        >
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >

          {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }
