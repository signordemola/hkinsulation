import React from 'react';

import image1 from '../assets/images/cert/texas.jpeg';
import image2 from '../assets/images/cert/national.png';
import image3 from '../assets/images/cert/dallas.png';

const Certifications = () => {
  return (
    <section className="shadow-lg">
      <div className="container mx-auto pb-10">
        <div className="py-10">
          <h1 className=" uppercase text-center font-semibold text-[40px] py-4">
            Certifications
          </h1>
          <div className="grid lg:grid-cols-3 gap-6 pt-6">
            <div>
              <img className="mx-auto" src={image1} alt="" />
              <p className=" uppercase text-center text-[20px] pt-4">
                (HUB) Certificate
              </p>
            </div>

            <div>
              <img className="mx-auto" src={image2} alt="" />
              <p className=" uppercase text-center text-[20px] pt-4">
                NMSDC Certificate
              </p>
            </div>

            <div>
              <img className="mx-auto" src={image3} alt="" />
              <p className=" uppercase text-center text-[20px] pt-4">
                SBE CERTIFICATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
