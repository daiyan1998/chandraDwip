import Image from "next/image";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <div className="flex container mx-auto justify-between items-center py-4">
      <Image height={50} width={50} src="/logo.png" alt="" />
      <div>
        <ul className="flex gap-10 cursor-pointer font-semibold">
          <li>Home</li>
          <li>About US</li>
          <li>Products & Services</li>
        </ul>
      </div>
      <Button>Contact Us</Button>
    </div>
  );
};

export default Nav;
