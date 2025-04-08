import React from 'react'
import WORD from '../assets/images/WORD.png'

const Begin = () => {
  return (
   <nav className=" sticky top-0 z-50 h[15vh] -webkit-sticky   bg-slate-200   sm:z-50">
           <div className="flex  justify-between items-center p-5   w-[80wv] ">
                   <p className=" flex space-x-5 p-5 text-3xl font-bold "><img className="w-12 h-12 " src={WORD} /><strong>ZEALIIGHT</strong></p>
                <div className="relative">
                    <input type="checkbox" id="hamburger-toggle" className="peer hidden" />
                
                    <label for="hamburger-toggle" className="lg:hidden p-4 cursor-pointer">
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </label>
                
                    <div className="absolute right-0 hidden mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 peer-checked:block">
                        <ul className="py-2 text-gray-700">
                          <li><a href="#" className="block px-4 py-2 text-sm">About</a></li>
                          <li><a href="#" className="block px-4 py-2 text-sm">Teams</a></li>
                          <li><a href="#" className="block px-4 py-2 text-sm">Service</a></li>
                          <li><a href="#" className="block px-4 py-2 text-sm">Contact Us</a></li>
                        </ul>
                      </div>
                  </div>            
               <div className=" space-x-32 font-bold text-2xl hidden lg:flex md:flex ">
                   <p>
                       About
                   </p>
                   <p>
                       Teams
                   </p>
                   <p>
                       Services
                   </p>
                   <p>
                       Products
                   </p>
                   <p>
                       Portfolio
                   </p>
                   <p>
                       Blog
                   </p>
                     <button className="rounded-full bg-blue-950 text-white p-3 font-bold text-2xl"> Contact Us</button> 
               </div>
           </div>
       </nav>
  )
}

export default Begin;
