import React from "react";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[30rem] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/c588689b-4e92-4c3e-9449-d29f8e1fa75a/NG-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg)",
          backgroundPosition: "center",
          backgroundSize:"cover"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg mb-6">Watch anywhere. Cancel anytime.</p>
        <p className="text-md mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="w-72 p-3 rounded-l-md focus:outline-none text-black"
          />
          <button className="bg-gray-900 bg-opacity-70 text-white p-3 rounded-r-md hover:bg-gray-900">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
