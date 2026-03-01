import React from 'react';
import extraImg from '../../assets/extraImg.jpg'


const ExtraSection = () => {
    return (
   <section className="bg-[#f3f8f6] pt-12 pb-0">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative">

        {/* LEFT — HOW IT WORKS */}
        <div className='ml-2 lg:ml-9'>
          <h2 className="text-2xl font-semibold text-teal-700 mb-6">
            How It Works
          </h2>

          {/* Item 1 */}
          <div className="flex gap-4 pb-6 border-b border-gray-300">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl">
              🍱
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Post Food</h4>
              <p className="text-sm text-gray-600">
                Share surplus food easily and reduce food waste.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 py-6 border-b border-gray-300">
            <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white text-xl">
              📍
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Find Food</h4>
              <p className="text-sm text-gray-600">
                Discover available food near your location.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 pt-6">
            <div className="w-12 h-12 rounded-full bg-lime-500 flex items-center justify-center text-white text-xl">
              🤝
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Collect Food</h4>
              <p className="text-sm text-gray-600">
                Collect food safely and help the community.
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300"></div>

        {/* RIGHT — OUR MISSION */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-700">
            Our Mission
          </h2>

          <p className="text-gray-700 mb-6">
            Fighting food waste, feeding the community.
            <br />
            Join us in making a difference!
          </p>

          {/* Stats Box */}
          <div className="bg-[#ffe3a3] rounded-t-xl grid grid-cols-3 text-center py-8 md:mr-10">
            <div>
              <h3 className="text-2xl font-bold text-teal-800">1200+</h3>
              <p className="text-sm text-gray-700">Meals Donated</p>
            </div>
            <div className="border-x border-yellow-300">
              <h3 className="text-2xl font-bold text-teal-800">850+</h3>
              <p className="text-sm text-gray-700">Happy Members</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-800">300+</h3>
              <p className="text-sm text-gray-700">Families Helped</p>
            </div>
          </div>

          {/* Food Image */}
          <img
            src={extraImg}
            alt="Food"
            className="w-full h-40 object-cover"
          />
        </div>

      </div>

    </section>
    );
};

export default ExtraSection;