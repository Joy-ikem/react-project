import React from 'react';

const Hero = () => {
  return (
    <section className="w-full mask-r-from-20%">
      <div className="bg-slate-200 h-[90vh] flex flex-col justify-center px-4 sm:px-10 lg:px-20 py-10">
        <p className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
          Services
        </p>
        <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 mb-4 sm:mb-6 leading-tight">
          FROM RESEARCH TO DELIVERY
        </p>
        <p className="text-xl sm:text-2xl lg:text-4xl font-bold ">
          Integrity and transparency always in the first place
        </p>
      </div>
    </section>
  );
};

export default Hero;
