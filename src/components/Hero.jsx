import React, { useEffect, useState } from 'react';

const Hero = () => {
  const sentence = "Integrity and transparency always in the first place";
  const words = sentence.split(" ");
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (index < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) =>
          prev ? prev + " " + words[index] : words[index]
        );
        setIndex((prev) => prev + 1);
      }, 500); // Delay between each word
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section className="w-full mask-r-from-20%">
      <div className="bg-slate-200 h-[90vh] flex flex-col justify-center px-4 sm:px-10 lg:px-20 py-10">
        <p className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
          Services
        </p>
        <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 mb-4 sm:mb-6 leading-tight">
          FROM RESEARCH TO DELIVERY
        </p>
        <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-700">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
