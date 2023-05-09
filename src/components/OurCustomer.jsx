import React from 'react';

import cbg from '../assets/images/customer/CBG.png';
import jor from '../assets/images/customer/JORDAN_FOSTER.png';
import pra from '../assets/images/customer/PRA.png';
import kwa from '../assets/images/customer/KWA.png';
import bil from '../assets/images/customer/BILLINGSLEY.png';
import lin from '../assets/images/customer/LINCOLN.png';
import txm from '../assets/images/customer/TXMC.png';
import str from '../assets/images/customer/STREET_LIGHTS.png';

const OurCustomer = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <img src={cbg} alt="cbg" />
          <p className="py-2">CBG</p>
        </div>

        <div>
          <img src={jor} alt="jor" />
          <p className="py-2">JORDAN_FOSTER</p>
        </div>

        <div>
          <img src={pra} alt="" />
          <p className="py-2">PRA</p>
        </div>

        <div>
          <img src={kwa} alt="" />
          <p className="py-2">KWA</p>
        </div>

        <div>
          <img src={bil} alt="" />
          <p className="py-2">BILLINGSLEY</p>
        </div>

        <div>
          <img src={lin} alt="" />
          <p className="py-2">LINCOLN</p>
        </div>

        <div>
          <img src={txm} alt="" />
          <p className="py-2">TXMC</p>
        </div>

        <div>
          <img src={str} alt="" />
          <p className="py-2">STREET_LIGHTS</p>
        </div>
      </div>
    </section>
  );
};

export default OurCustomer;
