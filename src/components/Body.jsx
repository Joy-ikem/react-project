import React from 'react';
import daven from '../assets/images/daven.png';
import pete from '../assets/images/pete.png';
import bla from '../assets/images/bla.png';
import ikem from '../assets/images/ikem.png';
import ruth from '../assets/images/ruth.png';
import maydive from '../assets/images/maydive.png';

const Section = ({ number, title, description, image, reverse }) => {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-between w-full py-10 px-5 sm:px-16`}>
      <div className="w-full sm:w-1/2 h-[60vh]">
        <img src={image} alt={title} className="w-[100vw] h-full object-cover " />
      </div>
      <div className="w-full sm:w-1/2 bg-slate-100 p-6 flex flex-col justify-center relative h-[60vh]">
        <div className="relative">
          <p className="text-8xl sm:text-9xl text-gray-500 font-bold">{number}</p>
          <p className="absolute text-lg sm:text-3xl font-bold text-gray-900" style={{ top: '60px' }}>
            {title}
          </p>
        </div>
        <p className="mt-8 sm:mt-10 text-xl sm:text-2xl">{description}</p>
        <p className="text-green-500 hover:text-red-500 transition-colors duration-300 text-lg sm:text-xl font-mono mt-3">
          Learn More
        </p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <section className="w-full">
      <Section
        number="01"
        title="Product Development"
        description="We have over a decade of experience in Product Development."
        image={pete}
      />
      <Section
        number="02"
        title="UX Research"
        description="Our Product Design Unit focuses on in-depth UX research."
        image={bla}
        reverse
      />
      <Section
        number="03"
        title="I.T Consultancy"
        description="Leverage our experience in both business development and IT."
        image={ikem}
      />
      <Section
        number="04"
        title="Quality Assurance"
        description="Rethink your company's offering with a digital-first approach."
        image={ruth}
        reverse
      />
      <Section
        number="05"
        title="Mobile App Development"
        description="Create mobile apps with excellent usability."
        image={daven}
      />
      <Section
        number="06"
        title="Talent Outsourcing"
        description="Get well-trained and experienced Developers."
        image={maydive}
        reverse
      />
      <div className="bg-white h-[15vh] w-full"></div>
    </section>
  );
};

export default Body;
