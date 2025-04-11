import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import React from 'react';
import {ThemeProvider} from "next-themes";
import {Analytics} from "@vercel/analytics/next"

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Halley's Portfolio",
  description: 'A digital portfolio :)',
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning={true}>


        <body className={inter.className + ' flex flex-col min-h-fit justify-center content-center items-center'}>
        <ThemeProvider>
        <div className={"lg:w-3xl max-w-full flex flex-col items-center justify-center"}>
          <NavBar/>
          {children}
        </div>
        <footer className={inter.className + ' flex flex-col items-center justify-center my-8'}>
          Made with ❤️ from Halley
        </footer>
        </ThemeProvider>
        <Analytics/>
        </body>


      </html>
  )
}
