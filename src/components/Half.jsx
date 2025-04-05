import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Half = () => {
  // Initialize AOS inside useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      offset: 120,     // Start animation when element is 120px from the top
    });
  }, []);  // Empty array ensures it runs once on mount

  return (
    <section>
      <div 
        className="relative bg-[url('https://d2csxpduxe849s.cloudfront.net/media/65648996-5F4D-4D8F-9652A9EBF332D07B/00566C18-97D6-468D-94DC229C840006FB/407B2AFD-2623-4F2A-89E8EDD68049A750/Large-GettyImages-1342421368.jpg')] bg-no-repeat bg-cover h-[90vh] w-full"
      >
        <div 
          className="border bg-white flex flex-col justify-center items-center text-blue-950 absolute top-28 left-1/2 transform -translate-x-1/2 sm:top-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 h-[40vh] w-[75%] space-y-10 sm:h-[30vh] sm:w-[50%] px-4 sm:px-6 md:px-8 lg:px-10"
          data-aos="zoom-in"  // Correctly applying the AOS animation
          data-aos-delay="300"
        >
          <p className="text-4xl font-sans sm:text-3xl md:text-4xl">It's a collaboration</p>
          <p className="text-2xl p-3 sm:text-xl sm:font-light sm:text-center">
            Our goal is a full partnership. Prior to developing a single line of code, we examine problems, business models.
          </p>  
        </div>
      </div>

      {/* Optional Space Below the Section */}
      <section>
        <div className="bg-white h-[15vh]"></div>
      </section>
    </section>
  );
};

export default Half;
