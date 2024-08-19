import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Landing3() {
    const navigate = useNavigate();
  return (
    <>
      <div className="w-full">
        <div className="relative w-full bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                Click on all posts to view them
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Go through blogs related to your interests and discover new
                content. Share your thoughts and ideas with the community.
              </p>
              <button className="mt-8 flex justify-items-start bg-black text-white font-semibold text-md px-4 py-2 rounded-md w-max"
                onClick={() => navigate("/all-posts")}
              >
                    All Posts
              </button>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
              <img
                className="aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                src="https://framerusercontent.com/images/rDZxsULbjfu26b3CAd1izoZCQes.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing3;
