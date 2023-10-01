import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import {FiTwitter,FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineYoutube,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="download w-full  py-16 rounded-xl">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="textxl md:text-3xl font-bold">
            Download The RealEstate App
          </h1>
          <div className="flex space-x-5">
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <FaGooglePlay size={"1.5rem"} />
              <div>
                <p className="text-xs">Get ON</p>
                <h1 className="text-sm">Google Play</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <IoLogoAppleAppstore size={"1.5rem"} />
              <div>
                <p className="text-xs">Get ON</p>
                <h1 className="text-sm">App Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full py-10 bg-neutral-800 text-white">
        <div className="w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold">RealEstate</h1>
          <ul className="flex items-cener space-x-5 text-sm">
            <li>Features</li>
            <li>Trending</li>
            <li>About</li>
          </ul>
          <div className="icons flex items-center space-x-4">
                <FiTwitter size={"1.5rem"}/>
                <AiOutlineInstagram size={"2rem"}/>
                <AiOutlineYoutube size={"2rem"}/>
                <FiFacebook size={"2rem"}/>
                <AiFillGithub size={"1.5rem"}/>
          </div>
          <p className="text-sm text-gray-400 p-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, officiis. Aliquam suscipit atque nobis aliquid consectetur ea dignissimos similique dolorem!</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
