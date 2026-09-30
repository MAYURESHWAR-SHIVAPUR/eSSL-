import React from 'react'
import hero from "../../public/hero.png"
import { useEffect } from 'react'
import { H } from "../animation/Hero.js";
import {HeroData} from "../data/index.js"

const Hero = () => {

  useEffect(() => {
    H()
  }, [])

  return (
    <div className="relative w-full h-[120vh]">
      <div className="md:w-3/4 w-screen   h-fit md:p-8 p-2 bg-[#252d39] mt-5 relative md:left-1/2 md:transform md:-translate-x-1/2 rounded-xl overflow-hidden ">

      <img id="hero" src={hero} alt="Hero " className="w-full rounded-lg object-cover " />
      </div>

      <section id="hero-notice1" className="md:flex items-center justify-evenly mt-5 py-5">
        <article className="h-full md:w-1/3 text-justify border-l-8 border-l-blue-500 bg-gray-100 hover:scale-105 transition duration-300">
          <h2 className="text-lg font-bold text-black px-5 my-0 py-5">
            <i class="fa-solid fa-circle-info mr-2"></i>
            Notice 1
          </h2>
          <h3 className="text-md font-semibold text-gray-600 px-5 py-0">{HeroData.notice1}</h3>
        </article>

        <article className="h-full md:w-1/3 text-justify border-l-8 border-l-blue-500 bg-gray-100 hover:scale-105 transition duration-300">
          <h2 className="text-lg font-bold text-black px-5 py-5">
            <i class="fa-solid fa-circle-info mr-2"></i>
            Notice 2
          </h2>
          <h3 className="text-md font-semibold text-gray-600 px-5 py-2">{HeroData.notice2}</h3>
        </article>

      </section>

    </div>

  )
}

export default Hero