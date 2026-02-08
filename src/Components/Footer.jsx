import React from "react";
import share from "../assets/share.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-black">
      
      {/* Main Footer */}
      <div className="footer sm:footer-horizontal max-w-7xl mx-auto px-6 py-6 justify-between">

        {/* Left Side */}
        <aside className="flex flex-col gap-3">
          <div className="flex items-center">
            <img
              src={share}
              alt="PlateShare Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold">
          Plate<span className=" text-orange-600">Share</span>
        </span>
          </div>

          <p className="text-sm text-black max-w-xs">
            Sharing food, spreading care.
          </p>
        </aside>

        {/* Right Side */}
        <nav>
          <h6 className="footer-title text-black pl-4">Social</h6>
          <div className="flex items-center gap-4">

            {/* X (Twitter) */}
            <a aria-label="X" className="hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.172l-4.833-6.317-5.53 6.317H2.656l7.73-8.84L1.5 2.25h6.328l4.37 5.777L18.244 2.25z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a aria-label="YouTube" className="hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a aria-label="Facebook" className="hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>

          </div>
        </nav>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-500">
        <p className="text-center text-sm py-4 text-black">
          © {new Date().getFullYear()} PlateShare. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
