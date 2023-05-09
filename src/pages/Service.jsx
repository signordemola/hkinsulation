import React from 'react';

import team from '../assets/images/about/hollidayinn-2.jpg';
import service from '../assets/images/services/a32345076fe80c0237b929576927d377.png';
import tap from '../assets/images/services/tap-insulation-installer-california.jpg';

const Service = () => {
  return (
    <section className="">
      <div>
        <div className="bg-[#0c253c] text-white">
          <div className="mx-auto container p-12">
            <h1 className="text-center text-3xl py-6 font-semibold">
              Product Features
            </h1>
            <img src={team} alt="logo" />
            <div className="grid lg:grid-cols-2 p-6 gap-6">
              <div>
                <p className="text-xl uppercase pb-2 ">Why Fiberglass?</p>
                <h1 className="leading-8 px-3">
                  Fiberglass is a type of fiber primarily composed of glass that
                  is used in a wide variety of applications, and is
                  predominantly employed as a residential and commercial thermal
                  insulator.
                </h1>
              </div>
              <div>
                <p className="text-xl uppercase pb-2 ">
                  Fiberglass Alternative
                </p>
                <h1 className="leading-8 px-3">
                  Fiberglass is an attractive choice for home insulation because
                  it poses no fire hazard.
                </h1>
              </div>

              <div>
                <p className="text-xl uppercase pb-2 ">Thermal insulation</p>
                <h1 className="leading-8 px-3">
                  This thermal insulation (made from fiberglass and its
                  alternatives) conserves 12 times as much energy as is lost in
                  its production, and it may reduce residential energy costs by
                  up to 40%.
                </h1>
              </div>

              <div>
                <p className="text-xl uppercase pb-2 ">Fiberglass Batts</p>
                <h1 className="leading-8 px-3">
                  Commonly found in blanket form, called batts, it is available
                  in bags containing standard pre-cut lengths and widths.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto container p-12">
          <div>
            <h1 className="text-center text-2xl pb-4 capitalize font-semibold">
              Batts are available in different thicknesses
            </h1>
            <p className="text-center px-6 text-lg">
              With the thicker batts offering a higher resistance to heat flow.
              This resistance is known as R-value, with common R-values for
              walls being R11 to R19, and R30 to R38 for ceilings.
            </p>

            <div className="p-6">
              <img src={service} alt="logo" />
            </div>
          </div>
        </div>

        <div className="bg-projects bg-cover bg-center text-white">
          <div className="mx-auto container py-20 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold leading-loose p-4">
              An Alternative – Cellulose
            </h1>
            <p className="text-center px-6 text-xl leading-8">
              Cellulose, a plant-based insulator, is the oldest form of home
              insulation and, at times, has been produced from sawdust, cotton,
              straw, hemp, and other plant materials with low
              thermal-conductivity.
            </p>
          </div>
        </div>

        <div className="bg-[#283139] text-white">
          <div className="mx-auto container">
            <h1 className="text-4xl text-center font-semibold leading-loose p-4">
              Hazards
            </h1>
            <p className="text-center px-6 text-xl leading-8">
              When inhaled, particles can cause coughing, nosebleeds, and other
              respiratory ailments. Very fine airborne particles are capable of
              becoming deeply lodged in the lungs and are believed by many to
              cause cancer and other serious afflictions. OSHA considers this
              threat to be serious enough that it requires fiberglass insulation
              to carry a cancer warning label.
            </p>
            <div className="w-10/12 mx-auto py-8">
              <img src={tap} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-[#f74b47] text-white">
          <div className=" w-10/12 mx-auto py-12">
            <h1 className="text-3xl text-center font-semibold leading-loose p-2">
              Call Now for a Free Quote
            </h1>
            <p className="text-center px-6 text-lg">
              We Specialize in&nbsp;Fiberglass Insulation,&nbsp;Batts
              Insullation,&nbsp;Blown Insulation&nbsp;and&nbsp;Thermal
              Insulation. Contact Us Now for more:
            </p>
            <div className="flex justify-center py-6">
              <button className="border-2 px-[16px] py-[8px] text-[20px] border-white">
                at (507) 601-0153
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
