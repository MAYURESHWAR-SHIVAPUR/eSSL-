import finger from "../../public/finger.png"
import { useEffect } from "react"
import { animateIntro } from "../animation/intro"
import { introData } from "../data"

const Intro = () => {

    useEffect(() => {
        animateIntro()
    }, [])

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#02070d] text-white">

            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
        linear-gradient(rgba(0, 180, 220, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 180, 220, 0.08) 1px, transparent 1px)
      `,
                    backgroundSize: "55px 55px",
                }}
            />

            {/* Subtle Center Glow */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />

            {/* Corner Lines */}
            <div className="absolute left-5 top-5 h-5 w-5 border-l border-t border-cyan-500/20" />
            <div className="absolute right-5 top-5 h-5 w-5 border-r border-t border-cyan-500/20" />
            <div className="absolute bottom-5 left-5 h-5 w-5 border-b border-l border-cyan-500/20" />
            <div className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-cyan-500/20" />


            {/* MAIN CONTENT */}
            <div className="relative z-10 flex flex-col items-center text-center">

                {/* Fingerprint Icon */}
                <div id="finger" className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_25px_rgba(0,200,255,0.08)] overflow-hidden">

                    <img
                        src={finger}
                        alt="Fingerprint"
                        className="h-7 w-7 object-cover overflow-hidden rounded-full scale-450"
                    />

                </div>


                {/* INITIALIZING TEXT */}
                <p id="intro-notice1" className="mb-4 text-[8px] font-semibold tracking-[0.35em] text-cyan-400/70">
                    {introData["small-title"]}
                </p>


                {/* LOGO / NAME */}
                <h1 id="intro-name" className="text-[70px] font-black leading-none tracking-[0.04em] text-white drop-shadow-[0_0_32px_rgba(0,200,255,1)] md:text-[82px]">
                    <span className="inline-block">{introData["title-one"]}</span>
                    <span className="text-cyan-400 inline-block">{introData["title-two"]}</span>
                    <span className="inline-block">{introData["title-three"]}</span>
                    <span className="text-cyan-400 inline-block">{introData["title-four"]}</span>
                </h1>


                {/* TAGLINE */}
                <h2 id="intro-notice2" className="mt-4 text-[13px] font-bold tracking-[0.25em] text-cyan-400 md:text-[14px]">
                    <span className="inline-block text-cyan-400 mr-2">{introData["tagline-one"]}</span>
                    <span className="inline-block text-cyan-400 mr-2">{introData["tagline-two"]}</span>
                    <span className="inline-block text-cyan-400 mr-2">{introData["tagline-three"]}</span>
                    <span className="inline-block text-cyan-400 mr-2">{introData["tagline-four"]}</span>
                </h2>


                {/* DESCRIPTION */}
                <p id="intro-description" className="mt-3 text-[8px] text-gray-400">
                    {introData["description"]}
                </p>


                {/* SMALL LOADING LINE */}
                <div id="intro-loading" className="mt-6 flex items-center">
                    <div className={`h-[1px] w-[150px] bg-cyan-400`} />
                </div>


                {/* ENTER */}
                <div id="intro-enter" className="mt-16 flex flex-col items-center">

                    <p className="mb-2 text-[7px] font-medium tracking-[0.3em] text-cyan-400/50">
                        ENTER
                    </p>

                    <button
                        type="button"
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/20 text-cyan-400/60 transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                        <span className="mt-[-2px] text-[10px]">
                            ↓
                        </span>
                    </button>

                </div>

            </div>

        </section>
    )
}

export default Intro
