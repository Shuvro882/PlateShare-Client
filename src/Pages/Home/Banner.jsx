import React from 'react';
import BannerImage from "../../assets/foodBan.webp"
import MyContainer from '../../Components/MyContainer';
import { Link } from 'react-router';

const Banner = () => {
    return (
    <div
  className="w-full h-80 md:h-96 bg-cover bg-center relative flex items-center brightness-125"
  style={{ backgroundImage: `url(${BannerImage})` }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <MyContainer className="relative z-10 text-orange-400 flex flex-col gap-4 md:gap-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Share Food, Reduce Waste
        </h1>
        <p className="text-sm md:text-lg max-w-xl">
          Donate your surplus food to those in need and help reduce food waste
          in your community.
        </p>
        <Link to="/available" className="btn bg-orange-500 hover:bg-orange-600 px-5 py-2 md:px-6 md:py-3 rounded text-white font-semibold w-max">
          View All Foods
        </Link>
      </MyContainer>
    </div>
    );
};

export default Banner;