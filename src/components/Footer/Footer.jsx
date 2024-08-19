import React from "react";


function Footer() {
  return (
    <>
    <footer className="w-full mt-16">
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <img src='https://cdn.iconscout.com/icon/free/png-256/free-blog-logo-icon-download-in-svg-png-gif-file-formats--blogger-blogspot-post-web-social-media-pack-logos-icons-1596827.png' alt="logo" className="w-10 h-10" />
          <span className="ml-4 text-lg font-bold">BlogsCafe</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2024 BlogsCafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
