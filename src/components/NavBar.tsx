"use client"
import React from "react";
import Link from "next/link";
import {HomeOutlined, PhoneOutlined} from "@ant-design/icons";
import {Button} from "@/components/ui/button";

export default function NavBar(props: React.PropsWithChildren<{}>) {
   return (
      <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <Link href="#" className="flex items-center" prefetch={false}>
              <span className="text-black">Steven Bui</span>
            </Link>
            <nav className="hidden md:flex gap-4">
              <Link
                  href="#"
                  className="font-medium flex items-center text-sm transition-colors hover:underline"
                  prefetch={false}
              >
                Home
              </Link>
              <Link
                  href="#"
                  className="font-medium flex items-center text-sm transition-colors hover:underline"
                  prefetch={false}
              >
                About
              </Link>
              <Link
                  href="#"
                  className="font-medium flex items-center text-sm transition-colors hover:underline"
                  prefetch={false}
              >
                Projects
              </Link>
              <Link
                  href="#"
                  className="font-medium flex items-center text-sm transition-colors hover:underline"
                  prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>
  )

}