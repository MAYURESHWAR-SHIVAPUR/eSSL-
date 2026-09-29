import {ExploreData} from "../data/index.js"

const Explore = () => {
    return (
        <div class="h-[120vh] w-full bg-gradient-to-b from-white from-50% to-[#252D39] to-50%">
            <h1 className='text-center font-extrabold text-5xl hover:underline'>{ExploreData.title}</h1>
            <p className="text-center text-md text-gray-600 px-4 py-2 mb-[5%]">
                {ExploreData.description}
            </p>
            {/* <img className="w-full object-cover" src={explore} alt="Explore" /> */}
            {/* Image Showcase */}
            <section className="relative w-full overflow-hidden py-8 md:py-10">

                <div className="relative mx-auto h-[380px] max-w-[1120px] md:h-[465px]">

                    {/* CENTER IMAGE */}
                    <div className="absolute rounded-2xl left-1/2 top-0 z-20 w-[52%] -translate-x-1/2 border-[38px] border-[#8a8a8a] md:border-[38px] box-shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 hover:rotate-3 hover:z-99 transition duration-300">
                        <img
                            src={ExploreData.img1}
                            alt="eSSL"
                            className="block h-full w-full object-cover"
                        />
                    </div>


                    {/* LEFT IMAGE */}
                    <div className="absolute left-0 top-[103px] z-30 w-[34%] rounded-xl border-[25px] border-[#a8a8a8] md:border-[26px] box-shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 rotate-355 hover:z-99 transition duration-300">
                        <img
                            src={ExploreData.img2}
                            alt="eSSL"
                            className="block aspect-[1.5/1] w-full object-cover"
                        />
                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="absolute right-0 top-[103px] z-30 w-[34%] rounded-xl border-[25px] border-[#a8a8a8] md:border-[26px] box-shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 rotate-3 hover:z-99 transition duration-300">
                        <img
                            src={ExploreData.img3}
                            alt="eSSL"
                            className="block aspect-[1.5/1] w-full object-cover"
                        />
                    </div>

                </div>

            </section>

            <h3 className="text-center text-4xl font-bold text-white">Explore More <i class="fa-solid fa-forward ml-2 hover:text-blue-500"></i></h3>
        </div>
    )
}

export default Explore
