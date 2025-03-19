import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import React from 'react';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Steven's Portfolio",
  description: 'A digital portfolio :)',
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en" data-theme={"cupcake"}>

      <body className={inter.className + ' flex flex-col min-h-fit justify-center content-center items-center'}>

      <div className={"lg:w-3xl max-w-full flex flex-col items-center justify-center"}>
        <NavBar/>
        {children}
      </div>
      <footer className={inter.className + ' flex flex-col items-center justify-center my-8'}>
        Made with ❤️from Steven
      </footer>
      </body>
      </html>
  )
}
