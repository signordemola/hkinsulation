import React from 'react';

import image from '../assets/images/hero/bg3.jpg';

const Today = () => {
  return (
    <section style={{ backgroundImage: `url(${image})` }}>
      <div className="flex flex-col justify-center items-center py-12">
        <h1 className='font-semibold text-2xl pb-3'>Lets&nbsp;Start Your Project Today</h1>
        <a href="tel:(972)3656906">
          <button className="border-2 text-primary-200 px-6 py-2 text-lg border-primary-200">
            Call Now! (507) 601-0153
          </button>
        </a>
      </div>
    </section>
  );
};

export default Today;
