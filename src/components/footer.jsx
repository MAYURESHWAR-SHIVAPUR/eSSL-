import React from 'react'
import { footerData } from '../data'

const footer = () => {
    return (
        < footer className="bg-[#242d38] text-white" >
            <div className="mx-auto max-w-[1150px] px-6 py-12">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">

                    {/* LEFT SECTION */}
                    <div>
                        {/* Logo - Replace this div with your logo */}
                        <div className="mb-6 flex h-[55px] w-[110px] items-center">
                            {/* Add your logo here */}
                            <img
                                src={footerData.img}
                                alt="eSSL Logo"
                                className="max-h-[55px] max-w-[110px] object-contain"
                            />

                            {/* 
          If you don't have the logo path yet, you can temporarily use:

          <div className="text-4xl font-bold text-blue-500">
            eSSL
          </div>
          */}
                        </div>

                        <p className="max-w-[310px] text-[10px] leading-[1.8] text-gray-300">
                            {footerData.description1}
                        </p>

                        <p className="mt-4 max-w-[310px] text-[10px] leading-[1.8] text-gray-300">
                            {footerData.description2}
                        </p>

                        {/* SOCIAL MEDIA */}
                        <div className="mt-7">
                            <h3 className="mb-4 text-[12px] font-semibold tracking-wide">
                                FOLLOW US ON
                            </h3>

                            <div className="flex gap-2">
                                {/* Facebook */}
                                <a
                                    href="#"
                                    className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-gray-400 text-[10px] text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
                                >
                                    f
                                </a>

                                {/* Twitter */}
                                <a
                                    href="#"
                                    className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-gray-400 text-[10px] text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
                                >
                                    ♥
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="#"
                                    className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-gray-400 text-[9px] font-semibold text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
                                >
                                    in
                                </a>

                                {/* YouTube */}
                                <a
                                    href="#"
                                    className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-gray-400 text-[9px] text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
                                >
                                    ▶
                                </a>

                                {/* Instagram */}
                                <a
                                    href="#"
                                    className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-gray-400 text-[10px] text-gray-200 transition hover:border-blue-400 hover:text-blue-400"
                                >
                                    ◎
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* MIDDLE SECTION */}
                    <div>
                        <h3 className="mb-4 text-[12px] font-semibold tracking-wide">
                            SERVICES
                        </h3>

                        <ul className="space-y-3 text-[10px] text-gray-300">

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 transition hover:text-white"
                                >
                                    <span className="text-gray-400">›</span>
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 transition hover:text-white"
                                >
                                    <span className="text-gray-400">›</span>
                                    Products
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 transition hover:text-white"
                                >
                                    <span className="text-gray-400">›</span>
                                    Web Support
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 transition hover:text-white"
                                >
                                    <span className="text-gray-400">›</span>
                                    Repairs & Service Centre
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 transition hover:text-white"
                                >
                                    <span className="text-gray-400">›</span>
                                    CSR
                                </a>
                            </li>

                        </ul>
                    </div>


                    {/* RIGHT SECTION */}
                    <div>

                        {/* CONTACT INFO */}
                        <h3 className="mb-4 text-[12px] font-semibold tracking-wide">
                            CONTACT INFO
                        </h3>

                        <div className="text-[10px] leading-[1.8] text-gray-300">

                            <p>
                                {footerData.address.map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>

                            <div className="mt-3 space-y-1">
                                <p className="flex items-center gap-2">
                                    <span className="text-blue-400">☎</span>
                                    {footerData.phone}
                                </p>

                                <a
                                    href="mailto:sales@esslsecurity.com"
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                >
                                    <span>✉</span>
                                    {footerData.email}
                                </a>

                                <a
                                    href="mailto:support@esslsecurity.com"
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                >
                                    <span>✉</span>
                                    {footerData.email}
                                </a>
                            </div>

                        </div>


                        {/* NEWSLETTER */}
                        <div className="mt-9">
                            <h3 className="mb-4 text-[12px] font-semibold tracking-wide">
                                SUBSCRIBE NEWSLETTER
                            </h3>

                            <div className="flex h-[28px] w-full max-w-[265px] overflow-hidden rounded-full bg-[#3b4552]">

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="min-w-0 flex-1 bg-transparent px-4 text-[9px] text-white outline-none placeholder:text-gray-300"
                                />

                                <button
                                    type="button"
                                    className="bg-[#29a9e8] px-5 text-[8px] font-semibold text-white transition hover:bg-[#168fc9]"
                                >
                                    SUBSCRIBE
                                </button>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </footer >
    )
}

export default footer
