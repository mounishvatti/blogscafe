import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function Postcard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="flex flex-col items-center justify-center w-full h-full rounded-lg bg-white shadow-md hover:shadow-lg duration-200 cursor-pointer">
        <img src={appwriteService.filePreview(featuredImage)} alt="featuredImage" className="w-full h-full object-cover" />
        <div className="p-3 text-center">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Postcard