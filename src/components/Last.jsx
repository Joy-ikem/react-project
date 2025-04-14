import React from 'react';
import WORD from '../assets/images/WORD.png';
import Lottie from 'lottie-react';
import Myanimation from '../Myanimation/Myanimation.json'
import Animationfirst from '../Myanimation/Animationfirst.json'
import Animation2 from '../Myanimation/Animation2.json'

const Last = () => {
  return (
    <section className="">
      <div className="h-[50vh] bg-white/10  text-black flex flex-col justify-center items-center  space-y-10">
        
        {/* Left Section - Zealiight Info */}
        <div className="p-3 w-1/2 ">
          <p className="flex space-x-5 text-2xl font-bold">
            <img className="w-12 h-12" src={WORD} alt="Logo" />
            <strong>ZEALIIGHT</strong>
          </p>
          <br />
        </div>

        {/* Right Section - Contact Info & Social Icons */}
        <div className="">
          <p className=" text-3xl font-serif text-shadow-black text-center">Contact Us</p>
          <br />
          <br />
          <div className="flex items-center justify-around ">
            <a href="https://www.linkedin.com/in/ikem-chinonso-454117249/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BadL5Pb0vTSa262MEUNQonA%3D%3D" className='w-25'>
             <Lottie animationData={Animationfirst}/>
            </a>
            <a href="https://wa.me/07037167239" target="_blank" rel="noopener noreferrer" className='w-25 '>
              <Lottie animationData={Myanimation} />
            </a>
            <a href="mailto:michtservicesatgmail.com" className='w-20'>
             <Lottie animationData={Animation2}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Last;
