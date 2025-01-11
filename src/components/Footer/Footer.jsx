import React from "react";
import ItemsContainer from "./ItemsContainer";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { IoLogoWechat } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-fourth text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="text-gray-200 lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-white">Subscribe</span> to stay updated with us!
        </h1>
        <div>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-pink-300 hover:bg-pink-400 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-black md:w-auto w-full font-playfair"
          >
            Subscribe
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div className="flex justify-between items-center pt-2 text-gray-200 text-sm pb-8 px-4 sm:px-12">
        {/* Centered "Made by Single & Blooming" */}
        <div className="flex-1 text-center">
          <span>© Made by Single & Blooming</span>
        </div>

        {/* Social Icons at Bottom Right */}
        <div className="flex space-x-2 text-black">
          <span className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-white text-xl hover:text-gray-100 hover:bg-fifth
            duration-300 "><CiFacebook /></span>
          <span className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-white text-xl hover:text-gray-100 hover:bg-fifth
            duration-300 "><CiInstagram /></span>
          <span className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-white text-xl hover:text-gray-100 hover:bg-fifth
            duration-300 "><CiTwitter /></span>
          <span className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-white text-xl hover:text-gray-100 hover:bg-fifth
            duration-300 "><CiYoutube /></span>
          <span className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-white text-xl hover:text-gray-100 hover:bg-fifth
            duration-300 "><IoLogoWechat /></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;