import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Layout} from 'antd'
import {Header, Content} from "antd/es/layout/layout";
import NavBar from '@/components/NavBar'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven's Portfolio",
  description: "A digital portfolio :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Layout>
        <Header className={"flex flex-row justify-center"}>
          <NavBar/>
        </Header>
        <Content>
          {children}
      </Content>
      </Layout>
      </body>

</html>
)
  ;
}
