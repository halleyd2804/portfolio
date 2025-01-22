"use client";
import React, {ReactNode} from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import {Button, ButtonProps} from "@/components/ui/button";
import {CiDark} from "react-icons/ci";
import {useTheme} from "next-themes";

type LinkType = {
  name: string,
  link: string
}
const links: Array<LinkType> = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "#"
  },
  {
    name: "Projects",
    link: "/projects"
  },
  {
    name: "Contact",
    link: "#"
  },
]
export default function NavBar(props: React.PropsWithChildren) {
  const {theme, setTheme} = useTheme();
  return (

      <nav className="fixed inset-x-0 top-0 z-50 bg-nav-primary text-primary">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <span className="">Steven Bui</span>
            </Link>
            <div className={"flex flex-row justify-center items-center"}>
              {/*Normal Hyper Links*/}
              <nav className="hidden md:flex gap-4">
                {links.map((link: LinkType) => (
                    <Link
                        href={link.link}
                        className="font-medium flex items-center text-sm transition-colors hover:underline"
                        prefetch={false}
                        key={link.link}
                    >
                      {link.name}
                    </Link>
                ))}
              </nav>
              <nav className={"visible px-2"}>
                <Button onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
                  <CiDark/>
                </Button>
              </nav>
              {/*Hamburger Menu*/}
              <nav className={"visible md:hidden"}>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Hamburger size={20}/>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {
                      links.map((link: LinkType) => (
                          <DropdownMenuItem key={link.link}>
                            <Link
                                href={link.link}
                                className="font-medium flex items-center text-sm transition-colors hover:underline"
                                prefetch={false}

                            >
                              {link.name}
                            </Link>
                          </DropdownMenuItem>
                      ))
                    }
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>

            </div>
          </div>

        </div>
      </nav>
  );
}
