import React from "react";
import banner from "../../public/banner.jpg";
const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-8 relative">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 w-full mt-12 md:mt-32 ">
          <div className="flex-flex-col w-full space-y-6">
            <h1 className="text-2xl md:text-4xl">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-400">new everyday!!</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              ullam, harum qui facere dolorem modi earum cum corrupti dolor
              praesentium inventore? Voluptatem harum suscipit vero tempora
              aperiam obcaecati iure nam.
            </p>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            <button className="btn btn-secondary">Secondary</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-24 flex justify-center">
          <img src={banner} alt="bannerimg" className="h-92 w-92 " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
