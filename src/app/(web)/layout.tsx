import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "@/components/themeProvider/ThemeProvider";
import { NextAuthProvider } from "@/components/authProvider/authProvider";
import Toast from "@/components/toast/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Elite Eden",
  description:
    "Discover luxury and comfort at Elite Eden, a premier hotel offering exquisite accommodations, impeccable service, and a tranquil ambiance. Indulge in a world-class experience where every detail is crafted to perfection. Whether you are here for business or leisure, Elite Eden is your oasis of sophistication and relaxation. Welcome to a haven of refined elegance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.className}`}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              <Header></Header>
              {children}
              <Footer></Footer>
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
