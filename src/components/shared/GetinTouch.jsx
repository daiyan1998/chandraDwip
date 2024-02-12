import React from 'react'
// import { IoLogoWhatsapp } from "react-icons/io";
import { TiDevicePhone, TiMail, TiMessages, TiPhone, TiPhoneOutline } from "react-icons/ti";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import ReactWhatsapp from 'react-whatsapp';

const GetinTouch = () => {
  return (
    <div>  <div className="text-2xl  p-14 ">
    <p className="text-3xl font-bold text-center text-orange-500">Get in touch</p>

    <div className="flex flex-col gap-5 mt-8">
      <div className="flex items-center gap-4">
        <span>
          <FaMapMarkerAlt className="text-skin-tertiary text-4xl" />
        </span>
        <span>Shaheed Syed Nazrul Islam Sarani(61 Bijoy Nagar), Ramna, Dhaka-1000,Bangladesh</span>
      </div>
      <div className="flex items-center gap-4 " >
        <span>
          <TiPhoneOutline className="text-skin-tertiary text-4xl rotate-90 " />
        </span>
     <span className="lg:text-2xl text-[15px] lg:font-normal font-bold">
   +8801558015449
        </span> 

      </div>
      <div className="flex items-center gap-4 ">
        <span>
          <TiMail className="text-skin-tertiary text-4xl" />
        </span>
   <a href="mailto:info@chadradwip.com">     <span className="lg:text-2xl text-[15px] lg:font-normal font-bold">
   info@chadradwip.com
        </span> 
        </a>
      </div>
      <div className="flex items-center gap-4 mb-5 ">
       

      </div>
    </div>

    <div className="grid grid-cols-1 items-center gap-4 mb-5">
      <span className="text-3xl font-bold  text-orange-500 pb-2">
        Follow us
      </span>

      <span className="flex gap-10 items-center">
        <span className="social-icon-anim">
          <a
            href="#"
            target="_blank"
          >
            {" "}
            <FaFacebook className="text-blue-500 text-4xl" />
          </a>
        </span>
        <span className="social-icon-anim">
          <a
            href="#"
            target="_blank"
          >
            {" "}
            <FaInstagram className="text-rose-500 text-4xl" />
          </a>
        </span>
   
        <span className="social-icon-anim">
          {" "}
          <a href="#" target="_blank">
            {" "}
            <FaXTwitter className=" text-4xl" />
          </a>{" "}
        </span>
      </span>
    </div>
  </div></div>
  )
}

export default GetinTouch