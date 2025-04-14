import React from 'react';
import daven from '../assets/images/daven.png';
import pete from '../assets/images/pete.png';
import bla from '../assets/images/bla.png';
import ikem from '../assets/images/ikem.png';
import ruth from '../assets/images/ruth.png';
import maydive from '../assets/images/maydive.png';

const Section = ({ number, title, description, image }) => {
  return (
    <div className="border shadow-md p-4 sm:p-6 mb-8 mx-4 sm:mx-16">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <div className="w-full sm:w-1/2 sm:pl-6 flex flex-col justify-center">
          <p className="relative text-6xl sm:text-8xl text-gray-500 font-bold">{number}</p>
          <p className="mt-[-40px] text-lg sm:text-2xl font-bold text-gray-900">{title}</p>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl">{description}</p>
          <p className="text-green-500 hover:text-red-500 transition-colors duration-300 text-base sm:text-lg font-mono mt-3 cursor-pointer">
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <section className="py-10">
      <Section
        image={pete}
        number="01"
        title="Product Development"
        description="We have over a decade of experience in Product Development."
      />
      <Section
        image={bla}
        number="02"
        title="UX Research"
        description="Our Product Design Unit focuses on in-depth UX research."
      />
      <Section
        image={ikem}
        number="03"
        title="I.T Consultancy"
        description="Leverage our experience in both business development and IT."
      />
      <Section
        image={ruth}
        number="04"
        title="Quality Assurance"
        description="Rethink your company's offering with a digital-first approach."
      />
      <Section
        image={daven}
        number="05"
        title="Mobile App Development"
        description="Create mobile apps with excellent usability."
      />
      <Section
        image={maydive}
        number="06"
        title="Talent Outsourcing"
        description="Get well-trained and experienced Developers."
      />
    </section>
  );
};

export default Body;
