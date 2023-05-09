import React from 'react';

const Customers = () => {
  return (
    <section className="container mx-auto pt-12">
      <div className="p-20">
        <h1 className="text-center text-4xl font-semibold pt-6">
          We have built our reputation on Honesty. Integrity, and 100% Customer
          Satisfaction
        </h1>
        <p className="text-center text-[18px] py-5 px-8 font-medium">
          We have taken great pride over the years to ensure quality
          workmanship, and consistent customer service that has earned us the
          reputation as an industry leader.
        </p>
        <a href='/about' className='flex justify-center'>
          <button className='border-2 rounded-sm text-[19px] px-5 py-2 border-primary-200 text-primary-200'>Our Work</button>
        </a>
      </div>
    </section>
  );
};

export default Customers;
