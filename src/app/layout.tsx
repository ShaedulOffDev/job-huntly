import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.className} max-md:pb-10`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
