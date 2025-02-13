import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer";
import PageProgressBar from "./shared/PageProgressBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weights: [100, 200, 300, 400, 500, 600, 700],
  subsets: ["latin"],
});

export const metadata = {
  title: "Polymers Hub",
  description: "The easiest way to source ingredients, polymers, and chemistry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased font-montserrat`}
      >
        <PageProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
