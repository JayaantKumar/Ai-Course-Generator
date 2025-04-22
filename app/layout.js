// app/layout.tsx or app/layout.js
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import { Geist, Geist_Mono,Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your App Title",
  description: "Your description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          <GoogleOneTap />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
