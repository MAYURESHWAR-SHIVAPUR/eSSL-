import {AboutData} from "../data/index.js"


const About = () => {
  return (
    <div className="py-[3%] min-h-screen h-fit">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-[3%] text-center hover:underline" >{AboutData.about}</h1>
      <section className="flex flex-col md:flex-row gap-6 justify-evenly  items-center">
        <img className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 hover:scale-105 transition duration-300" />
        <img className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 hover:scale-105 transition duration-300" />
        <img className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 hover:scale-105 transition duration-300" />
      </section>
      <h3 className="text-3xl font-bold text-gray-800 pl-15 my-8" >
        {AboutData.title.map((word, index) => (
          <span key={index} className="hover:text-blue-800 mr-2">{word}</span>
        ))}
        </h3>
      <p className="text-lg text-gray-600 pl-15 my-4" >{AboutData.description}</p>

      <button className="bg-black text-white px-4 py-2 hover:bg-white border border-black border-2 hover:text-black ml-15 transition duration-300">
        Know More
      </button>
    </div>
  )
}

export default About
