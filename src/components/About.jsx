import React from 'react'

const About = () => {
  return (
    <div className="py-[3%] min-h-screen h-fit">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-[3%] text-center hover:underline" >About Us</h1>
      <section className="flex flex-col md:flex-row gap-6 justify-evenly  items-center">
        <img className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 hover:scale-105 transition duration-300" />
        <img className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 hover:scale-105 transition duration-300" />
        <img className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 hover:scale-105 transition duration-300" />
      </section>
      <h3 className="text-3xl font-bold text-gray-800 pl-15 my-8" >
        <span className="hover:text-blue-800 mr-2">We</span> 
        <span className="hover:text-blue-800 mr-2">Are</span> 
        <span className="hover:text-blue-800">eSSL</span>
        </h3>
      <p className="text-lg text-gray-600 pl-15 my-4" >eSSL is India’s Pioneer and Most trusted Biometrics brand since inception. eSSL was started in 2002 with a vision to make Biometrics as a integral part of everyday life for all of us. Biometrics provides more security and at the same time it is easy to use and maintain. Our mission is to install Biometrics device on every door, it can be organization where we work or home where we stay.</p>

      <button className="bg-black text-white px-4 py-2 hover:bg-white border border-black border-2 hover:text-black ml-15 transition duration-300">
        Know More
      </button>
    </div>
  )
}

export default About
