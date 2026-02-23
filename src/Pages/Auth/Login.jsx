import React, { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router';
import MyContainer from '../../Components/MyContainer';
import bgImages from '../../assets/bgImages.jpg';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';




const Login = () => {
    const [show, setShow] = useState(false);

    const {
      signInWithEmailAndPasswordFunc,
      signinWithEmailFunc,
      user,
      setUser,
      setLoading

    } = useContext(AuthContext)

    const handleLogin = (e) =>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log( email,password);

    signInWithEmailAndPasswordFunc(email, password)
    .then((res) => {
      console.log(res);
      setUser(res.user);
      setLoading(false);
      toast.success("Login successful");
    })
    .catch((e) => {
      toast.error(e.message);
    });
    }
    
    const handleGoogleLogin = () =>{
      signinWithEmailFunc()
      .then((res) => {
      console.log(res);
      setUser(res.user);
      setLoading(false);
      toast.success("Login successful");
    })
    .catch((e) => {
      toast.error(e.message);
    });
    };


    
    
    console.log(user);
    
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
          <div className="lg:w-1/2 flex justify-center mb-20 lg:mb-0">
            <div className="card w-full max-w-sm bg-orange-50/90 backdrop-blur shadow-2xl border border-orange-300">
              <div className="card-body">
                
                   
                    <form onSubmit={handleLogin} className="space-y-3">


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

                  <button className="my-btn">
                    Login
                  </button>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-2 my-2">
                    <div className="h-px w-16 bg-gray-400"></div>
                    <span className="text-sm text-gray-500">or</span>
                    <div className="h-px w-16 bg-gray-400"></div>
                  </div>

                  {/* Google */}
                  <button 
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 w-full bg-white border border-orange-300 focus:border-orange-500 text-gray-800 py-2 font-semibold hover:bg-gray-200 rounded-sm cursor-pointer">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      className="w-5 h-5"
                    />
                    Continue with Google
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