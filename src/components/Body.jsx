import React from 'react';
import daven from '../assets/images/daven.png';
import pete from '../assets/images/pete.png';
import bla from '../assets/images/bla.png';
import ikem from '../assets/images/ikem.png';
import ruth from '../assets/images/ruth.png';
import maydive from '../assets/images/maydive.png';

// Section component
const Section = ({ number, title, description, image, reverse }) => {
  return (
    <div className="border-0 rounded-lg px-4 sm:px-10 md:px-20 py-10 sm:container,mx-auto container mx-auto">
      <div className={`flex flex-col sm:flex-row ${reverse ? 'sm:flex-row-reverse' : ''} border-0 shadow-lg rounded-lg overflow-hidden `}>
        <div className="w-full sm:w-1/2 h-80 sm:h-96 border-0  ">
          <img src={image} alt={title} className="w-full  h-full object-cover rounded-2xl " />
        </div>
        <div className=''>
        <div className=" sm:w-1/2 bg-slate-100  flex flex-col justify-center relative h-auto sm:h-96 border-0 leading-7  w-full">
          <div className="relative">
            <p className="text-6xl sm:text-8xl text-gray-500 font-bold">{number}</p>
            <p className="absolute text-lg sm:text-2xl font-bold text-gray-900" style={{ top: '40px' }}>
              {title}
            </p>
          </div>
          <p className=" sm:mt-8 text-base sm:text-2xl">{description}</p>
          <p className="text-green-500 hover:text-red-500 transition-colors duration-300 text-base sm:text-lg font-mono  cursor-pointer">
            Learn More
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

// Body component
const Body = () => {
  return (
    <section className="w-full px-4 sm:px-16 py-10">
      <div className="grid gap-12">
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
          reverse
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
          reverse
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
          reverse
        />
      </div>
      <div className="bg-white h-[10vh] w-full"></div>
    </section>
  );
};

export default Body;
