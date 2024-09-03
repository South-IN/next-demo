"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCookies } from "next-client-cookies";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  const cookies = useCookies();
  const theme = cookies.get("theme");
  const toggleTheme = () => {
    if (theme == "dark") {
      cookies.set("theme", "light");
    } else {
      cookies.set("theme", "dark");
    }
    window.location.reload();
  };

  return (
    <div
      className={cn(
        "fixed flex gap-7 justify-center items-center top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-5 text-sm">
            <HoveredLink href={"/courses"}>All courses</HoveredLink>
            <HoveredLink href={"#"}>Classical Guitar Mastery</HoveredLink>
            <HoveredLink href={"#"}>Flamenco Guitar Techniques</HoveredLink>
            <HoveredLink href={"#"}>Orchestral Conducting Basics</HoveredLink>
            <HoveredLink href={"#"}>Blues Harmonica for Beginners</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
      <button
        onClick={toggleTheme}
        className="backdrop-invert dark:bg-white dark:text-black flex justify-center hover:scale-125 transition-all items-center h-10 w-10 rounded-full"
      >
        {theme == "dark" ? <IconSun /> : <IconMoonStars />}
      </button>
    </div>
  );
};

export default Navbar;
