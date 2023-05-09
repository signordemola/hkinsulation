import React from 'react';

import { AiOutlineCheckCircle } from 'react-icons/ai';

const Overview = () => {
  return (
    <section className="bg-[#283139] text-white">
      <div className="container mx-auto py-12">
        <div>
          <h1 className="text-center text-[30px] font-semibold">
            Product Overview
          </h1>
          <p className="text-center py-3">
            For a complete technical data specifications sheet of
            our&nbsp;products please{' '}
            <a
              className=" text-primary-200"
              title="Contact"
              href="tel:(507) 601-0153"
            >
              contact us
            </a>
            &nbsp;
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-2 py-6">
          <div className="flex">
            <div className="p-[5px]">
              <AiOutlineCheckCircle className="text-red-500" />
            </div>
            <div>
              <h1>WHY FIBERGLASS?</h1>
              <p>
                Fiberglass is an economical, yet high-performing material that
                is non-corrosive, non-combustible and easy-to-install. It
                resists moisture build up and mold growth, reduces unwanted
                noise, does not require wet adhesives and does not settle, rot
                or deteriorate with age. In short, it’s the whole package at a
                very reasonable price.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="p-[5px]">
              <AiOutlineCheckCircle className="text-green-500" />
            </div>
            <div>
              <h1>PINK FIBERGLASS LOOSEFILL/BLOWN-IN</h1>
              <p>
                Appropriate for both new build and remodeling projects, loose
                fill insulation molds into the shape of your wall cavity with
                complete compression and gap-free insulation coverage.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="p-[5px]">
              <AiOutlineCheckCircle className="text-green-500" />
            </div>
            <div>
              <h1>PINK FIBERGLASS BATT</h1>
              <p>
                Made-to-fit, pre-cut fiberglass batt insulation comes in a
                variety of sizes and R-values. It can be used on its own or in
                conjunction with other insulation solutions for even greater
                energy efficiency. Batts can be customized to fit your
                particular walls, floors and ceilings.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 py-6">
          <div>
            <h1 className="text-center text-lg text-gray-400">EcoTouch</h1>
            <ul className="list-disc">
              <li>
                Owens Corning’s EcoTouch batts are certified to include over 50%
                total recycled content, consist of over 99% natural ingredients
                and are Greenguard verified to be formaldehyde free. You can be
                confident that safe products that save energy are insulating
                your home or business.
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-center text-lg text-gray-400">QuietZone</h1>
            <ul className="list-disc">
              <li>
                Quiet Zone Noise Control System is a complete sound management
                solution for sound-sensitive rooms. It decreases noise by up to
                85% and is acoustically engineered to absorb sound vibrations
                and control noise, leaving your home more peaceful and quiet day
                in and day out.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
