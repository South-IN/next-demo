"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
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
            <HoveredLink href={"#"}>All courses</HoveredLink>
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
    </div>
  );
};

export default Navbar;
