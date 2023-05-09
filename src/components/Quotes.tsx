import React from 'react';

const Quotes = () => {
  return (
    <section className="bg-projects bg-cover bg-center bg-no-repeat">
      <div className="mx-auto container py-24">
        <div className="flex flex-col text-white justify-center items-center">
          <h1 className="text-[30px] text-center">
            We are the leader for Multifamily Insulation, with it’s proven track
            record in the multifamily building industry for Home Enhancement and
            Energy Efficiency
          </h1>
          <a href='tel:(507) 601-0153' className="pt-8">
            <button className="border-white border-[2px] text-2xl rounded px-[14px] py-[6px]">
              Free Quote at (507) 601-0153
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
