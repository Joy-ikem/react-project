import React from 'react';
import daven from '../assets/images/daven.png';
import pete from '../assets/images/pete.png';
import bla from '../assets/images/bla.png';
import ikem from '../assets/images/ikem.png';
import ruth from '../assets/images/ruth.png';
import maydive from '../assets/images/maydive.png';

const Body = () => {
  return (
    <section className="w-full">
      {/* Product Development Section */}
      <div className="flex items-center justify-between py-10 space-x-10 px-5 sm:px-16">
        <div className="relative w-[50%] p-10 bg-zinc-200 flex flex-col justify-between h-[60vh]">
          <p className="text-9xl text-gray-500 font-bold">01</p>
          <p className="absolute top-24 text-3xl lg:text-6xl font-bold text-gray-900">Product <br /> Development</p>
          <p className="text-2xl mt-5">We have over a decade of experience in Product Development.</p>
          <p className="text-2xl font-mono text-green-500 mt-3">Learn More</p>
        </div>
        <div className="w-[50%] h-[60vh]">
          <img className="w-full h-full object-cover" src={pete} alt="Product Development" />
        </div>
      </div>

      {/* UX Research Section */}
      <div className="flex items-center justify-between py-10 space-x-10 px-5 sm:px-16">
        <div className="w-[50%] h-[60vh]">
          <img className="w-full h-full object-cover" src={bla} alt="UX Research" />
        </div>
        <div className="relative w-[50%] p-10 bg-slate-100 flex flex-col justify-between h-[60vh]">
          <p className="text-9xl text-gray-500 font-bold">02</p>
          <p className="absolute top-24 text-3xl lg:text-6xl font-bold text-gray-900">UX Research</p>
          <p className="text-2xl mt-5">Our Product Design Unit focuses on in-depth UX research.</p>
          <p className="text-green-500 text-2xl font-mono mt-3">Learn More</p>
        </div>
      </div>

      {/* IT Consultancy Section */}
      <div className="flex items-center justify-between py-10 space-x-10 px-5 sm:px-16">
        <div className="relative w-[50%] p-10 bg-slate-100 flex flex-col justify-between h-[60vh]">
          <p className="text-9xl text-gray-500 font-bold">03</p>
          <p className="absolute top-24 text-3xl lg:text-6xl font-bold text-gray-900">I.T Consultancy</p>
          <p className="text-3xl mt-5">Leverage our experience in both business development and IT.</p>
          <p className="text-green-500 text-2xl font-mono mt-3">Learn More</p>
        </div>
        <div className="w-[50%] h-[60vh]">
          <img className="w-full h-full object-cover" src={ikem} alt="IT Consultancy" />
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="flex items-center justify-between py-10 space-x-10 px-5 sm:px-16">
        <div className="w-[50%] h-[60vh]">
          <img className="w-full h-full object-cover" src={ruth} alt="Quality Assurance" />
        </div>
        <div className="relative w-[50%] p-10 bg-slate-100 flex flex-col justify-between h-[60vh]">
          <p className="text-9xl text-gray-500 font-bold">04</p>
          <p className="absolute top-24 text-3xl lg:text-6xl font-bold text-gray-900">Quality Assurance</p>
          <p className="text-3xl mt-5">Rethink your company's offering with a digital-first approach.</p>
          <p className="text-green-500 text-2xl font-mono mt-3">Learn More</p>
        </div>
      </div>

      {/* Mobile App Development Section */}
      <div className="flex items-center justify-between py-10 space-x-10 px-5 sm:px-16">
        <div className="relative w-[50%] p-10 bg-slate-100 flex flex-col justify-between h-[60vh]">
          <p className="text-9xl text-gray-500 font-bold">05</p>
          <p className="absolute top-24 text-3xl lg:text-6xl font-bold text-gray-900">Mobile App Development</p>
          <p className="text-3xl mt-5">Create mobile apps with excellent usability.</p>
          <p className="text-green-500 text-2xl font-mono mt-3">Learn More</p>
        </div>
        <div className="w-[50%] h-[60vh]">
          <img className="w-full h-full object-cover" src={daven} alt="Mobile App Development" />
        </div>
      </div>

      {/* Talent Outsourcing Section */}
      <div className="flex items-center justify-between py-10 space-x-10 px-5 sm:px-16">
        <div className="w-[50%] h-[60vh]">
          <img className="w-full h-full object-cover" src={maydive} alt="Talent Outsourcing" />
        </div>
        <div className="relative w-[50%] p-10 bg-slate-100 flex flex-col justify-between h-[60vh]">
          <p className="text-9xl text-gray-500 font-bold">06</p>
          <p className="absolute top-24 text-2xl lg:text-6xl font-bold text-gray-900">Talent Outsourcing</p>
          <p className="lg:text-3xl text-2xl mt-5">Get well-trained and experienced Developers.</p>
          <p className="text-green-500 text-2xl font-mono mt-3">Learn More</p>
        </div>
      </div>

      {/* Spacer Section */}
      <div className="bg-white h-[15vh] w-full"></div>
    </section>
  );
};

export default Body;
