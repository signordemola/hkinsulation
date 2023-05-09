import React from 'react';

import { FiCheckSquare } from 'react-icons/fi';

const Services = () => {
  return (
    <section className="text-[22px]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="space-y-6 lg:space-y-0 lg:flex lg:gap-4 py-10 px-12 lg:px-0">
          <div className="flex">
            <FiCheckSquare className="text-[#7c4dd5] text-4xl mx-2" />
            <div>
              <h1>Fiberglass Insulation</h1>
              <div>
                We are experts on the installation of fiberglass insulation
                techniques and products that will enhance your home energy
                saving and efficiency.
              </div>
            </div>
          </div>

          <div className="flex">
            <FiCheckSquare className="text-[#7c4dd5] text-4xl mx-2" />
            <div>
              <h1>Infra Red Thermal Imaging</h1>
              <div>
                Not sure whether or not you have an insulation or adequate
                insulation in your existing home. We can help by looking at your
                walls with our Infra Red thermal cameras.
              </div>
            </div>
          </div>

          <div className="flex">
            <FiCheckSquare className="text-[#7c4dd5] text-4xl mx-2" />
            <div>
              <h1>20 Years Of Experience </h1>
              <div className="px-2">
                We have the ability to analyze the situation and suggest the
                right type of insulation. We have the ability to do it
                all.&nbsp;Call now for more information (507) 601-0153
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
