import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Half = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <section>
      <div 
        className="relative bg-[url('https://d2csxpduxe849s.cloudfront.net/media/65648996-5F4D-4D8F-9652A9EBF332D07B/00566C18-97D6-468D-94DC229C840006FB/407B2AFD-2623-4F2A-89E8EDD68049A750/Large-GettyImages-1342421368.jpg')] bg-no-repeat bg-cover h-[90vh] w-full"
      >
        <div 
          className="border bg-white flex flex-col justify-center items-center text-blue-950 absolute top-28 left-1/2 transform -translate-x-1/2 h-[40vh] w-[75%] space-y-6 sm:h-auto sm:w-[85%] sm:p-4 md:w-[70%] lg:w-[50%]"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <p className="text-3xl sm:text-2xl md:text-3xl font-sans text-center">It's a collaboration</p>
          <p className="text-xl sm:text-base md:text-xl font-light text-center">
            Our goal is a full partnership. Prior to developing a single line of code, we examine problems, business models.
          </p>  
        </div>
      </div>

      <section>
        <div className="bg-white h-[15vh]"></div>
      </section>
    </section>
  );
};

export default Half;
