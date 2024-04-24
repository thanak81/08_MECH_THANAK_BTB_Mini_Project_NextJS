"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavbarComponent() {
  const pathname = usePathname();
  return (
    <nav className={` relative w-full`}>
      <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
    </nav>
  );
}
