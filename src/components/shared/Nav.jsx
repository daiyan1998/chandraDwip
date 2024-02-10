"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "../ui/separator";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navHandler = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <nav className="fixed w-full bg-white z-10 shadow-md">
      <div className="flex container mx-auto justify-between items-center py-4">
        <Image height={50} width={50} src="/logo.png" alt="" />
        <div className="hidden md:block">
          <ul className="flex gap-10 cursor-pointer font-semibold ">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"about-us"}>
              <li>About US</li>
            </Link>
            <Link href={"product-services"}>
              <li>Products & Services</li>
            </Link>
          </ul>
        </div>

        <Button className="hidden md:block">Contact Us</Button>
        {/* mobile menu */}
        <Image
          onClick={navHandler}
          className="block md:hidden"
          src="/icon/menu.png"
          height={30}
          width={30}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 sm:w-[40%]  w-[60%]  h-svh ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition ease-linear delay-75`}
        >
          <ul className="flex flex-col gap-5 cursor-pointer font-semibold px-4 pt-10 bg-white h-full">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Separator />
            <Link href={"about-us"}>
              <li>About US</li>
            </Link>
            <Separator />
            <Link href={"product-services"}>
              <li>Products & Services</li>
            </Link>
            <Separator />
            <Button>Contact Us</Button>
          </ul>
          <Image
            className="absolute top-1 right-1"
            src="/icon/close.svg"
            onClick={navHandler}
            height={30}
            width={30}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
