import { ReviewsData } from "../data/index"

const Reviews = () => {
    return (
        <section className="relative overflow-hidden h-[120vh] w-screen flex flex-col items-center justify-center py-12">
            <article className="z-10">
                <h1 className="text-5xl font-extrabold ">eSSL Security at Your Fingertips</h1>
                <p className="text-lg text-center text-gray-600 mt-4">Discover the power of secure access control</p>
                <article className="flex items-center justify-center w-full gap-4 mt-8">
                    <button className="w-1/5 bg-black text-white px-4 py-2 rounded-md hover:scale-105  transition duration-300 ">Reviews </button>
                    <button className="w-1/5 bg-white text-black border border-black px-4 py-2 rounded-md hover:scale-105  transition duration-300">Chart with {ReviewsData[0].title}</button>
                </article>
            </article>

            <section className="xl:opacity-[1] md:opacity-[0.5] absolute top-0 left-0 z-0 w-screen h-screen">

                {ReviewsData[1].map((review) => (
                    <article style={{ top: review.top, left: review.left }}  className={`absolute  shadow-[0_0_15px_#80808073] hover:scale-105  transition duration-300 flex flex-col  w-1/4 items-center justify-center gap-4 mt-8 bg-gray-100 p-4 rounded-md z-0`}>
                        <aside className=" h-full w-full flex items-center justify-start gap-4">
                            <i class="fa-regular fa-circle-user text-2xl"></i>
                            <h4 className="text-lg font-bold">{review.name}</h4>
                        </aside>
                        <p className="text-gray-600 w-full text-justify text-xs">{review.description}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default Reviews
