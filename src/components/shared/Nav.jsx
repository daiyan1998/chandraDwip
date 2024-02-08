import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Nav = () => {
  return (
    // <nav className="fixed w-full bg-white z-10 shadow-md">
    //   <div className="flex container mx-auto justify-between items-center py-4">
    //     <Image height={50} width={50} src="/logo.png" alt="" />
    //     <div>
    //       <ul className="flex gap-10 cursor-pointer font-semibold ">
    //         <Link href={"/"}>
    //           <li>Home</li>
    //         </Link>
    //         <Link href={"about-us"}>
    //           <li>About US</li>
    //         </Link>
    //         <Link href={"product-services"}>
    //           <li>Products & Services</li>
    //         </Link>
    //       </ul>
    //     </div>
    //     <Button>Contact Us</Button>
    //   </div>
    // </nav>

    <nav className="fixed w-full bg-white z-10 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link href={"/"}>
            <Image height={50} width={50} src="/logo.png" alt="" />
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-10 cursor-pointer font-semibold">
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
    <Link  href={"contact-us"}>     <Button>Contact Us</Button></Link> 
        </div>
      </div>
      <div className="md:hidden">
        <ul className="flex flex-col gap-4 py-4">
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
    </nav>
  );
};

export default Nav;
