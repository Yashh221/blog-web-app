// "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {
  ThemeContext,
  ThemeContextProvider,
} from "@/contexts/ThemeContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import React from "react";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoogieBlogs",
  description: "Write your own story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const theme = useTheme();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="max-w-full">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
