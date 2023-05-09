import React from 'react';

import { IoMdCall } from 'react-icons/io';
import { AiOutlineMail, AiOutlineGooglePlus } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { BsWifi2 } from 'react-icons/bs';

const Info = () => {
  return (
    <section className="bg-primary-200 fixed w-full z-50">
      <div className="max-w-[1440px] mx-auto text-white flex justify-center items-center md:pl-12 md:justify-start gap-4">
        <div className="flex items-center justify-center gap-1">
          <IoMdCall />
          <p className="text-[20px] pb-[5px]">number</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <AiOutlineMail />
          <p className="text-[20px] pb-[5px]">email</p>
        </div>

        <div className="flex justify-center items-center gap-4">
          <FiFacebook className='text-xl'/>
          <AiOutlineGooglePlus className='text-xl'/>
          <BsWifi2 className=' rotate-45 text-2xl'/>
        </div>
      </div>
    </section>
  );
};

export default Info;
