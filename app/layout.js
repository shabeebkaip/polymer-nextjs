import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer";
import { GlobalStyles } from "@mui/material";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Corrected 'weights' to 'weight'
  subsets: ["latin"],
});

export const metadata = {
  title: "Polymers Hub",
  description: "The easiest way to source ingredients, polymers, and chemistry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Ensure global font is loaded */}
        <style>{`body { font-family: var(${montserrat.variable}); }`}</style>
      </head>
      <body className={`${montserrat.variable} antialiased font-montserrat`}>
        {/* Apply MUI GlobalStyles */}
        <GlobalStyles
          styles={{
            html: {
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              boxSizing: "border-box",
            },
            "*, *::before, *::after": {
              boxSizing: "inherit",
            },
            body: {
              margin: 0,
              fontFamily: `Montserrat, `,
              backgroundColor: "#fff",
              color: "rgba(0, 0, 0, 0.87)",
              lineHeight: 1.5,
            },
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
