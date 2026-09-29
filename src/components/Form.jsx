import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Add your API call here

    reset();
  };

  return (
    <section className="w-full h-full overflow-hidden bg-white px-6 py-8 md:px-16">

      <div className="mx-auto max-w-[1080px]">

        {/* TITLE */}
        <h2 className="mb-4 text-3xl font-semibold tracking-wide text-[#08294d]">
          CONTACT FORM
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* INPUT GRID */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">

            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="h-[55px] w-full bg-[#ffffff] px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none transition focus:shadow-[0_8px_30px_rgba(30,50,90,0.15)]"
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>


            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="h-[55px] w-full bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none transition focus:shadow-[0_8px_30px_rgba(30,50,90,0.15)]"
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>


            {/* MOBILE */}
            <div>
              <input
                type="tel"
                placeholder="Mobile"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10 digit mobile number",
                  },
                })}
                className="h-[55px] w-full bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none transition focus:shadow-[0_8px_30px_rgba(30,50,90,0.15)]"
              />

              {errors.mobile && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.mobile.message}
                </p>
              )}
            </div>


            {/* ORGANIZATION */}
            <div>
              <input
                type="text"
                placeholder="Organization"
                {...register("organization")}
                className="h-[55px] w-full bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none transition focus:shadow-[0_8px_30px_rgba(30,50,90,0.15)]"
              />
            </div>


            {/* COUNTRY */}
            <div className="relative">
              <select
                {...register("country", {
                  required: "Please select a country",
                })}
                className="h-[55px] w-full appearance-none bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none"
                defaultValue="India"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
                ▾
              </span>
            </div>


            {/* STATE */}
            <div className="relative">
              <select
                {...register("state", {
                  required: "Please select a state",
                })}
                className="h-[55px] w-full appearance-none bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  State*
                </option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Delhi">Delhi</option>
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
                ▾
              </span>

              {errors.state && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.state.message}
                </p>
              )}
            </div>


            {/* CITY */}
            <div>
              <input
                type="text"
                placeholder="City"
                {...register("city", {
                  required: "City is required",
                })}
                className="h-[55px] w-full bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none transition focus:shadow-[0_8px_30px_rgba(30,50,90,0.15)]"
              />

              {errors.city && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.city.message}
                </p>
              )}
            </div>


            {/* PIN CODE */}
            <div>
              <input
                type="text"
                placeholder="Pin Code"
                {...register("pinCode", {
                  required: "Pin Code is required",
                })}
                className="h-[55px] w-full bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none transition focus:shadow-[0_8px_30px_rgba(30,50,90,0.15)]"
              />

              {errors.pinCode && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.pinCode.message}
                </p>
              )}
            </div>


            {/* SOURCE */}
            <div className="relative">
              <select
                {...register("source")}
                className="h-[55px] w-full appearance-none bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  - Select Source-
                </option>
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Reference">Reference</option>
                <option value="Website">Website</option>
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
                ▾
              </span>
            </div>


            {/* SUPPORT TYPE */}
            <div className="relative">
              <select
                {...register("supportType", {
                  required: "Please select support type",
                })}
                className="h-[55px] w-full appearance-none bg-white px-7 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none"
                defaultValue="Technical Support"
              >
                <option value="Technical Support">
                  Technical Support
                </option>
                <option value="Sales">Sales</option>
                <option value="Product Enquiry">
                  Product Enquiry
                </option>
                <option value="General Enquiry">
                  General Enquiry
                </option>
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600">
                ▾
              </span>
            </div>

          </div>


          {/* MESSAGE */}
          <div className="mt-6">
            <textarea
              rows="6"
              placeholder="Your Message"
              {...register("message", {
                required: "Message is required",
              })}
              className="h-15 w-full resize-y bg-white px-7 py-5 text-[16px] text-gray-700 shadow-[0_8px_30px_rgba(30,50,90,0.08)] outline-none transition focus:shadow-[0_8px_30px_rgba(30,50,90,0.15)]"
            />

            {errors.message && (
              <p className="mt-1 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>


          {/* NEWSLETTER CHECKBOX */}
          <div className="mt-7 flex items-start gap-2">

            <input
              type="checkbox"
              {...register("newsletter")}
              className="mt-1 h-4 w-4 cursor-pointer"
            />

            <label className="text-[14px] text-gray-600">
              I agree to receive your newsletter and accept the data privacy
              statement.
            </label>

          </div>


          {/* UNSUBSCRIBE TEXT */}
          <p className="mt-6 text-[12px] text-gray-500">
            You may unsubscribe at any time using the link in our newsletter.
          </p>


          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="mt-3 rounded-full bg-[#2da9e1] px-8 py-4 text-[14px] font-bold text-white transition hover:bg-[#168fc9]"
          >
            SEND MESSAGE
          </button>

        </form>

      </div>
    </section>
  );
};

export default ContactForm;