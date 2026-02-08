import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router';
import MyContainer from '../../Components/MyContainer';
import bgImages from '../../assets/bgImages.jpg';

const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <div
      className="min-h-screen flex items-center justify-center font-sans text-base bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImages})` }}
    >

      
      <div className="absolute inset-0 bg-black/50"></div>

      <MyContainer className="px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold mb-6">Login now!</h1>
            <p className="text-lg leading-relaxed">
             Share extra food, fight hunger, and spread kindness in your community.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="card w-full max-w-sm bg-orange-50/90 backdrop-blur shadow-2xl border border-orange-300">
              <div className="card-body">
                <form className="space-y-3">


                  <div>
                    <label className="label font-semibold text-orange-500">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered w-full border-orange-300 focus:border-orange-500"
                    />
                  </div>

                  <div className="relative">
                    <label className="label font-semibold text-orange-500">Password</label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input input-bordered w-full border-orange-300 focus:border-orange-500"
                    />
                    <span
                      onClick={() => setShow(!show)}
                      className="absolute right-3 top-9 cursor-pointer text-orange-500"
                    >
                      {show ? <FaEye /> : <IoEyeOff />}
                    </span>
                  </div>

                  <button className="btn w-full bg-orange-500 hover:bg-orange-500 text-white font-semibold text-base mt-2">
                    Login
                  </button>

                  <p className="text-center font-semibold text-sm">
                    Don't have an account?{" "}
                    <Link to="/Registration" className="text-orange-500 hover:underline">
                      Register
                    </Link>
                  </p>

                </form>
              </div>
            </div>
          </div>

        </div>
      </MyContainer>
    </div>
    );
};

export default Login;