import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-md">
      <div className="flex container mx-auto justify-between items-center py-4">
        <Image height={50} width={50} src="/logo.png" alt="" />
        <div>
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
        <Button>Contact Us</Button>
      </div>
    </nav>
  );
};

export default Nav;
