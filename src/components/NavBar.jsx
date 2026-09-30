import React from 'react'
import logo from "../assets/logo/logo.png"
import { useEffect } from 'react'
import { NavData } from '../data/index'
import { fadeIn } from "../animation/Nav";

const NavBar = ({ changeBackground }) => {
  const [hide, setHidden] = React.useState(true);


  useEffect(() => {
    fadeIn()
  }, [])

  return (
    <div className="relative px-4 flex items-center justify-between">
      <img id="nav1" className="xl:h-16 lg:h-12 md:h-8 hover:scale-105 transition duration-300" src={logo} alt="Logo" />
      <article className="flex items-center justify-center h-10 border border-black">
        <input id="nav2" type="text" placeholder="Search..." className="h-full  focus:outline-none px-5" />
        <button id="nav2" className=" h-full bg-black text-white px-4 py-1 rounded hover:bg-white hover:text-black border-2 hover:border-black">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </article>

      <div id='nav3' className="flex items-center justify-between   w-2/3 space-x-4 hidden lg:flex">
        {NavData[0].map((item, index) => (
          <a key={index} href={item.link} className="lg:text-sm xl:text-md  text-black ">{item.name}</a>
        ))}

        <a href="#" className="text-black hover:text-gray-700"></a>

        {/* dark and light mode toggle */}
        <button
          type="button"
          onClick={() => changeBackground()}
          className="text-black hover:text-gray-700 text-xl"
        >
          <i class="fa-solid fa-circle-half-stroke"></i>
        </button>

        <button
          type="button"
          onClick={() => setHidden(!hide)}
          className="text-black hover:text-gray-700 text-xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div hidden={hide} id="menu" className=" flex flex-col justify-evenly gap-4 text-xl font-bold space-x-4 h-[90vh] w-1/8 bg-white absolute top-16 right-0 border border-black px-4 py-2 z-99 bg-white bg-emerald-500/15 backdrop-blur-lg border border-emerald-300/30 rounded-xl p-6 shadow-xl">
        {NavData[1].map((item, index) => (
          <a key={index} href={item.link} className="hover:text-black text-gray-700 hover:underline bigger">
            {item.name}
          </a>
        ))}

      </div>
    </div>
  )
}

export default NavBar