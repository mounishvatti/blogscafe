// https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg

import React from 'react'

function NoPosts() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
    <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
      <div className="lg:flex lg:items-center lg:space-x-10">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg"
          alt="question-mark"
          className="h-[300px] w-auto"
        />
        <div>
          <p className="mt-6 text-5xl font-semibold text-black">Oopsie!</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          Sorry, No posts have been added yet. 
          </h1>
          <p className='mt-4 text-gray-500'>
          You can add one by clicking on the Add post button on the top right corner.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NoPosts