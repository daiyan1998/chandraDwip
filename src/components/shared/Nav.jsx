"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "../ui/separator";

const listItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/products-and-services", label: "Products & Services" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <nav className="sticky top-0 w-full bg-white z-10 shadow-md">
      <div className="flex container mx-auto justify-between items-center py-4">
        <Image height={50} width={50} src="/logo.png" alt="" />
        <div className="hidden md:block">
          <ul className="flex gap-10 cursor-pointer font-semibold ">
            {listItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href={"/contact-us"}>
          {" "}
          <Button className="hidden md:block">Contact Us</Button>
        </Link>
        {/* mobile menu */}
        <Image
          onClick={closeMenu}
          className="block md:hidden"
          src="/icon/menu.png"
          alt=""
          height={30}
          width={30}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 sm:w-[40%] w-[60%]  h-svh ${
            isOpen ? "" : "scale-x-0"
          } transition-all origin-right ease-linear delay-75`}
        >
          <ul className="flex flex-col gap-5 cursor-pointer font-semibold px-4 pt-10 bg-white h-full">
            {listItems.map((item) => (
              <div key={item.label}>
                <li onClick={closeMenu} key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
                <Separator />
              </div>
            ))}
            <Button>Contact Us</Button>
          </ul>
          <Image
            className="absolute top-1 right-1"
            src="/icon/close.svg"
            onClick={closeMenu}
            alt=""
            height={30}
            width={30}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
