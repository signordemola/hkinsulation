import React, { useState } from 'react';

import about from '../assets/images/about/20160921_110956.jpg';
import team from '../assets/images/about/hollidayinn-2.jpg';

import { IoIosHome } from 'react-icons/io';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { ImOffice } from 'react-icons/im';
import { TbBadge } from 'react-icons/tb';
import ProgressBar from '../components/ProgressBar';

const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    if (name === '' && email === '' && text === '') {
      console.log('error');
    } else {
      console.log('success');
      setMessage('Thank you for contacting us, we will get back to you!!!');
    }
  };
  return (
    <section>
      <div className="bg-fixed" style={{ backgroundImage: `url(${about})` }}>
        <div className="  h-[78vh] text-white flex flex-col justify-center items-center">
          <h1 className="w-[70vh] text-[26px] text-center lg:text-[40px] py-4 uppercase">
            Our Company
          </h1>
          <p className="w-[70vh] text-center text-[18px] lg:text-[24px]">
            Since 2004, H&amp;K Insulation has been providing the best products
            and services to our clients.
          </p>

          <div className="py-8">
            <button className="border-white border-[2px] text-2xl rounded px-[14px] py-[6px]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 container mx-auto py-12">
        <div className="px-4">
          <div className="flex justify-center py-4">
            <IoIosHome size={60} />
          </div>
          <h1 className="text-center font-semibold text-[28px] pb-2">
            Special Service
          </h1>
          <p className="text-center text-[22px] font-light">
            Our group specializes in delivering state-of-the-art insulation
            services to apartments, hotels, commercial establishments as well as
            nursing homes.
          </p>
        </div>

        <div>
          <div className="flex justify-center py-4">
            <AiOutlineCheckSquare size={60} />
          </div>
          <h1 className="text-center font-semibold text-[28px] pb-2">
            Full Service Guarantee
          </h1>
          <p className="text-center text-[22px] font-light">
            Our team of professional staffs is able to provide 100% satisfaction
            to our valued customers.
          </p>
        </div>

        <div>
          <div className="flex justify-center py-4">
            <ImOffice size={60} />
          </div>
          <h1 className="text-center font-semibold text-[28px] pb-2">
            Problem Solvers
          </h1>
          <p className="text-center text-[22px] font-light">
            We offer the highest standard insulation services and amenities to
            homeowners and property owners.
          </p>
        </div>

        <div>
          <div className="flex justify-center py-4">
            <TbBadge size={60} />
          </div>
          <h1 className="text-center font-semibold text-[28px] pb-2">
            Professionalism
          </h1>
          <p className="text-center text-[22px] font-light">
            Our crews are highly qualified and trained in the field.
          </p>
        </div>
      </div>

      <div className="bg-[#f7f7f7]">
        <div className="lg:flex gap-4 container mx-auto py-12">
          <div className="lg:w-5/12 p-2">
            <h1 className="text-2xl font-semibold">More About Us</h1>
            <p className=" leading-8 py-4">
              We are here to provide you with the best services that meet your
              requirements. Our team is prepared and ready at all times to
              deliver credible, honest, quality and affordable installation
              solutions wherever you are within Texas and Oklahoma region. You
              can trust us at all times to offer you with the best amenities
              that we can to give you comfort and convenience of your insulation
              needs.
            </p>
            <p className=" leading-8">
              Remember, for all your insulation needs, you can call our team
              anytime of the day for a quality and professional insulation
              service. Get the best service at the lowest possible quote from
              us. Make the most of your investment with H&amp;K Insulation
              today. Your partnership is definitely worth your money do grab
              your chance to be with the best insulation team in Texas.
            </p>
          </div>

          <div className="lg:w-8/12 p-2">
            <h1 className="text-[28px] font-semibold">
              Our most requested services
            </h1>
            <div className="font-light mt-6 grid gap-4">
              <div>
                <p className="pb-1">FIBERGLASS INSULATION</p>
                <ProgressBar bgcolor="#2ea3f2" progress="80" height={30} />
              </div>

              <div>
                <p className="pb-1">THERMAL INSULATION</p>
                <ProgressBar bgcolor="#2ea3f2" progress="60" height={30} />
              </div>

              <div>
                <p className="pb-1">BLOWN INSULATION</p>
                <ProgressBar bgcolor="#2ea3f2" progress="50" height={30} />
              </div>

              <div>
                <p className="pb-1">BATTS INSULATION</p>
                <ProgressBar bgcolor="#2ea3f2" progress="90" height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 my-12">
        <h1 className="text-center text-2xl font-semibold">OUR TEAM</h1>

        <div className="lg:flex gap-8 container mx-auto py-12">
          <div className=" lg:w-5/12">
            <img src={team} alt="logo" />
          </div>
          <div className=" lg:w-7/12">
            <h1 className="text-lg">HK Insulation</h1>
            <p className="text-gray-400 py-2">The Insulation Experts</p>
            <p className=" leading-8">
              HK insulation provide insulation&nbsp;services for home
              owners&nbsp;and multifamilies&nbsp;on Dallas Texas for more than
              20 years. Call for more or contact us using this form:
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-center">
            Get Free Estimate!
          </h1>
          <div className="w-1/2 mx-auto">
            <form>
              <p className="text-primary-200 font-semibold text-lg">
                {message}
              </p>
              <div className="grid lg:grid-cols-2 gap-6 py-6">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(event) => setName(event.target.value)}
                  className="w-full bg-gray-200 rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-gray-200 rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <textarea
                placeholder="Message"
                required
                onChange={(event) => setText(event.target.value)}
                className="w-full bg-gray-200 rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>

              <div className="flex justify-end my-5 px-1">
                <button
                  onClick={submitForm}
                  type="button"
                  className="border-2 px-[16px] py-[8px] text-[20px] text-primary-200 border-primary-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
