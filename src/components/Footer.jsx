import React from 'react';

import { IoMdCall } from 'react-icons/io';
import { AiOutlineMail, AiOutlineGooglePlus } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { BsWifi2 } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="">
      <section className="bg-[#222222] text-white">
        <div className="container mx-auto py-10">
          <input type="text" className="w-[80px]" />
          <span className="bg-[#dddddd] cursor-pointer text-neutral-400 px-3 py-[1.1px]">
            Search
          </span>
        </div>
      </section>

      <section className="bg-[#171717] text-white text-xl">
        <div className="container mx-auto flex justify-between items-center">
          <h1>HK Insulation Inc © {new Date().getFullYear()}</h1>

          <div className="flex justify-between items-center h-16">
            <FiFacebook className="text-3xl hover:text-primary-200 cursor-pointer" />
            <AiOutlineGooglePlus className="text-3xl hover:text-primary-200 cursor-pointer" />
            <BsWifi2 className=" rotate-45 text-4xl hover:text-primary-200 cursor-pointer" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
