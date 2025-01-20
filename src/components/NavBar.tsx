"use client";
import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";

export default function NavBar(props: React.PropsWithChildren<{}>) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = (toggle: boolean) => {
    alert(toggle)
  };
  return (

    <nav className="fixed inset-x-0 top-0 z-50 bg-white text-black">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="/" className="flex items-center" prefetch={false}>
            <span className="text-black">Steven Bui</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="/"
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
              href="/projects"
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
          <nav className={"visible md:hidden"}>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Hamburger size={20} onToggle={toggle => handleMenuOpen(toggle)} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
              <DropdownMenuItem>
                  <Link
                    href="/"
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                    prefetch={false}
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                    prefetch={false}
                  >
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/projects"
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                    prefetch={false}
                  >
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="#"
                    className="font-medium flex items-center text-sm transition-colors hover:underline"
                    prefetch={false}
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </nav>
  );
}
