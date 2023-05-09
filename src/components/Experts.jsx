import React from 'react';

const Experts = () => {
  return (
    <section className="bg-[#27323a] text-white p-4">
      <div className="container mx-auto py-10">
        <div>
          <h1 className="text-center text-[28px] py-2">
            HK The Insulation Experts
          </h1>
          <p className="text-center text-[18px] py-1 leading-7">
            H &amp; K Insulation has been a contractor in the insulation
            industry since 2004,&nbsp;successfully fulfilling the needs of major
            construction projects within the states of Texas and
            Oklahoma.&nbsp;Specialized in&nbsp;Multi-Family, Commercial,
            Lodging, Residential and Nursing Homes, H &amp; K has grown
            tremendously&nbsp;thanks to our quality services, guarantee
            products&nbsp;and unfailing clients.
          </p>
        </div>

        <div className="pt-12 grid lg:grid-cols-3 gap-4">
          <div>
            <h1 className="text-[20px]">HOW IT WORKS</h1>
            <p className="leading-8 py-2">
              Most common insulation materials work by slowing conductive heat
              flow and — to a lesser extent — convective heat flow. Contact us
              now for a fiberglass insulation service. (507) 601-0153
            </p>
          </div>

          <div>
            <h1 className="text-[20px]">YOU ARE IN THE RIGHT PLACE</h1>
            <p className="leading-8 py-2">
              Properly insulating your home will decrease this heat flow by
              providing an effective resistance to the flow of heat.
            </p>
          </div>

          <div>
            <h1 className="text-[20px]">HOW TO MAINTAIN COMFORT</h1>
            <p className="leading-8 py-2">
              To maintain comfort, the heat lost in the winter must be replaced
              by your heating system and the heat gained in the summer must be
              removed by your cooling system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
