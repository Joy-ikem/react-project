import React from 'react'
import Lottie from 'lottie-react'
import Callanimation from '../Myanimation/Callanimation.json'

const End = () => {
  return (
    <section>
      <div className="flex flex-col justify-evenly items-center bg-slate-200 h-[30vh] sm:h-[30vh]">
        <div className="text-2xl text-center sm:text-left">
          <p>Have a project?  <br/><br className="font-light" />Let’s talk about it</p>
        </div>
        <a href="tel:08109038457"  className="flex items-center gap-2 hover:text-green-500 transition duration-300">
          <Lottie animationData={Callanimation} className='w-10 h-10'/>
          <spam className=" font-semibold">CONTACT US </spam>
        </a>
      </div>
    </section>
  )
}

export default End
