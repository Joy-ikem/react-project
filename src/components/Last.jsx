import React from 'react';
import WORD from '../assets/images/WORD.png';

const Last = () => {
  return (
    <section className="m-8">
      <div className="h-[50vh] bg-blue-950 text-white flex justify-between items-center p-10 space-x-10">
        
        {/* Left Section - Zealiight Info */}
        <div className="p-3 w-1/2 text-left">
          <p className="flex space-x-3 text-2xl font-bold">
            <img className="w-12 h-12" src={WORD} alt="Logo" />
            <strong>ZEALIIGHT</strong>
          </p>
          <br />
          <p className="text-2xl font-light">We have the zeal to make and build</p>
        </div>

        {/* Right Section - Contact Info & Social Icons */}
        <div className="w-1/2 text-right px-5">
          <p className="text-gray-600 text-3xl">Contact Us</p>
          <br />
          <p className="text-2xl font-thin">Feel free to get in touch with us</p>
          <p className="text-2xl">ikemjoy57@gmail.com</p>
          <br />
          
          <div className="flex justify-end space-x-20 p-5 mt-4">
            <a href="https://www.linkedin.com/in/ikem-chinonso-454117249/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BadL5Pb0vTSa262MEUNQonA%3D%3D">
              <p className="hover:text-gray-300">
                <i className="fa fa-linkedin-square fa-2x"></i>
              </p>
            </a>
            <a href="https://wa.me/07037167239" target="_blank" rel="noopener noreferrer">
              <p className="hover:text-gray-300">
                <i className="fa fa-whatsapp fa-2x"></i>
              </p>
            </a>
            <a href="mailto:michtservicesatgmail.com">
              <p className="hover:text-gray-300">
                <i className="fa fa-envelope-o fa-2x"></i>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Last;
