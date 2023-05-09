import React, { useState } from 'react';

import { IoMdSearch } from 'react-icons/io';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

import logo from '../assets/images/H-K-LOGO-new.jpg';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className='pt-8'>
      <div className=" border-b pb-4 z-30 transition-all duration-300">
        <div className="lg:hidden">
          <img src={logo} alt="logo" className="h-16 my-4 mx-auto" />
        </div>

        <nav className="hidden lg:flex justify-center items-center">
          <ul className="flex gap-x-8  uppercase">
            <li className="flex justify-center items-center">
              <a href="/" className="hover:text-primary-200 transition">
                Home
              </a>
            </li>

            <li className="flex justify-center items-center">
              <a href="/about" className="hover:text-primary-200 transition">
                About Us
              </a>
            </li>

            <li className="flex justify-center items-center">
              <a href="/service" className="hover:text-primary-200 transition">
                Services
              </a>
            </li>

            <div className="">
              <img src={logo} alt="logo" className="h-32 my-4 mx-auto" />
            </div>

            <li className="flex justify-center items-center">
              <a href="/projects" className="hover:text-primary-200 transition">
                Recent Projects
              </a>
            </li>

            <li className="flex justify-center items-center">
              <a href="/quote" className="hover:text-primary-200 transition">
                Free Quote
              </a>
            </li>

            <li className="flex justify-center items-center pt-1">
              <a href="/">
                <IoMdSearch className="rotate-90" />
              </a>
            </li>
          </ul>
        </nav>

        {/* nav menu button - hide on desktop */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden flex justify-between items-center bg-neutral-100 mx-10 pt-1 px-2"
        >
          <div>Select Page</div>
          {navMobile ? (
            <RiCloseFill className="text-3xl text-primary-200 cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-3xl text-primary-200 cursor-pointer" />
          )}
        </div>

        {/* nav mobile - hide on desktop */}
        <nav
          className={`${
            navMobile
              ? 'min-h-[65vh] z-50 border-t-2 border-t-primary-200 p-8'
              : 'min-h-0'
          }  top-[130px] left-0 right-0 w-11/12 mx-auto shadow-md -bottom-12 lg:hidden overflow-hidden transition-all h-0`}
        >
          <ul className="w-full top-0 left-0 h-full flex flex-col mx-10 gap-y-1">
            <li className="border-b py-2">
              <a href="/" className="hover:text-primary-200 transition px-6">
                Home
              </a>
            </li>

            <li className="border-b py-2">
              <a
                href="/about"
                className="hover:text-primary-200 transition px-6"
              >
                About Us
              </a>
            </li>

            <li className=" py-2 ">
              <div
                href="/service"
                className="hover:text-primary-200 transition bg-[#f7f7f7] w-full px-6 py-1"
              >
                Services
              </div>
              <ul>
                <li className="px-9 ml-6  border-b py-2">
                  <a href="/">FIBERGLASS INSULATION</a>
                </li>
                <li className="px-9 ml-6  border-b py-2">
                  <a href="/">BLOWN INSULATION</a>
                </li>
                <li className="px-9 ml-6  border-b py-2">
                  <a href="/">BATTS INSULATION</a>
                </li>
                <li className="px-9 ml-6 pt-2">
                  <a href="/">THERMAL INSULATION</a>
                </li>
              </ul>
            </li>

            <li className="border-b py-2">
              <div
                href="/projects"
                className="hover:text-primary-200 transition bg-[#f7f7f7] w-full py-1 px-6"
              >
                Recent Projects
              </div>
              <ul>
                <li className="px-9 ml-6  border-b py-2">
                  <a href="/">Multifamily</a>
                </li>
                <li className="px-9 ml-6  border-b py-2">
                  <a href="/">Hotels</a>
                </li>
                <li className="px-9 ml-6 py-2">
                  <a href="/">Residential</a>
                </li>
              </ul>
            </li>

            <li className="border-b py-2">
              <a
                href="/quote"
                className="hover:text-primary-200 transition px-6"
              >
                Free Quote
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
