import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section className="h-auto lg:h-[35vh] bg-white text-gray-400">
      <div className="flex flex-col items-center justify-center p-5 space-y-8 lg:space-y-10 text-center">
        <p className="text-2xl text-black font-bold lg:text-4xl">
          Our Zeal to build the better way
        </p>
        <p className="text-base font-light lg:text-3xl leading-relaxed text-black  italic">
          <Typewriter
            words={[
              'Our method arose from the need to create custom solutions for each situation we have made a conscious effort to be agile in our operations We create solutions that work.'
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={0}    
            delaySpeed={2500}  
          />
        </p>
      </div>
    </section>
  );
};

export default Home;
