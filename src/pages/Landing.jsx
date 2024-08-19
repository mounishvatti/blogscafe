import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
  return (
    <>
      <div className="w-full">
        <div className="relative w-full bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                Please login to view the posts
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Go through blogs related to your interests and discover new
                content. Share your thoughts and ideas with the community.
              </p>
              <button className="mt-8 flex justify-items-start bg-black text-white font-semibold text-md px-4 py-2 rounded-md w-max"
                onClick={() => navigate("/login")}
              >
                    Login
              </button>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
              <img
                className="aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                src="https://c7edd99d51e0e6080d067050a03dc2c3.cdn.bubble.io/f1688736280400x613270418449146200/Illustration2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
