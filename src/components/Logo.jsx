import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
  const navigate = useNavigate()
  return (
    <img src='https://cdn.iconscout.com/icon/free/png-256/free-blog-logo-icon-download-in-svg-png-gif-file-formats--blogger-blogspot-post-web-social-media-pack-logos-icons-1596827.png'
    alt='logo' width={50}
    onClick={()=>navigate('/')}
    />
  )
}

export default Logo