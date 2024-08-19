import React from "react";

function Error() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
      <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <img
            src="https://illustrations.popsy.co/white/resistance-band.svg"
            alt="question-mark"
            className="h-[300px] w-auto"
          />
          <div>
            <p className="mt-6 text-sm font-semibold text-black">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              We can&#x27;t find that page
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&#x27;t exist or has been
              moved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
