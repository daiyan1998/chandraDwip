import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <section className="container grid grid-cols-3 gap-9">
        <div>
          <Image src="/logo.png" width={100} height={100} className="mb-6" />
          <p className="text-gray-400">
            We are always exploring and studying International & National
            market/business methodically to meet the high standard of our valued
            Customers.
          </p>
        </div>

        <div>
          <p className="text-lg mb-4">
            Want to talk?
            <br />
            Please call us :
          </p>
          <p className="text-gray-400 mb-4">
            Tel: +88028392702 <br />
            Cell: +8801558015449
          </p>
          <p className="text-lg">Email us:</p>
          <p className="text-gray-400">info@chadradwip.com</p>
        </div>

        <div>
          <p className="text-lg mb-4">Company Address</p>
          <p className="text-gray-400">
            Room#13/1 Eastern Arzoo Complex,197 Shaheed Syed Nazrul Islam
            Sarani(61 Bijoy Nagar), Ramna, Dhaka-1000,Bangladesh
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
