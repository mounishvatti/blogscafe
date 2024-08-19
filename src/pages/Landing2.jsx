import React from "react";

function Landing2() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <div>
          <img
            className="rounded-md"
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp"
            alt=""
            width={800}
          />
        </div>
        <div>
          <p className="text-2xl font-bold font-serif mt-10">
            No posts yet. Be the first to write one!
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing2;
