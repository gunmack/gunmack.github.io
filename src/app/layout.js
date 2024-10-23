import React from "react";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Julkar' Website", 
  image: "favicon.ico",
  description: "My name is Julkar and welcome to my page :)",
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  const currentPage = "home";
  return (
    <html lang="en">
      <body>
        <Navbar page={currentPage} />
        <div className="wrap">
          <main className="main">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
