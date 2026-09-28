import React from 'react'

const achive = () => {
    return (
        <section className="w-full bg-[#293a62] border border-[#159bd7] hover:bg-black transition-all duration-300">
            <div className="mx-auto flex min-h-[100px] max-w-[1150px] items-center px-6">
                {/* STATS */}
                <div className="flex flex-1 items-center justify-around">

                    {/* PROJECTS */}
                    <div className="flex items-center gap-3">
                        <div className="text-7xl leading-none text-[#18a9eb]">
                            ◎
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold leading-none text-white">
                                80000+
                            </h3>

                            <p className="mt-1 text-sm text-white">
                                Projects Done
                            </p>
                        </div>
                    </div>


                    {/* EXPERIENCE */}
                    <div className="flex items-center gap-3">
                        <div className="text-7xl leading-none text-[#18a9eb]">
                            ▦
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold leading-none text-white">
                                24+
                            </h3>

                            <p className="mt-1 text-sm text-white">
                                Years Experience
                            </p>
                        </div>
                    </div>


                    {/* CUSTOMERS */}
                    <div className="flex items-center gap-3">
                        <div className="text-7xl     leading-none text-[#18a9eb]">
                            ☺
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold leading-none text-white">
                                4000000+
                            </h3>

                            <p className="mt-1 text-sm text-white">
                                Happy Customers
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default achive
