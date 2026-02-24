import React, { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import MyContainer from '../../Components/MyContainer';
import bgImages from '../../assets/bgImages.jpg';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

const Registration = () => {
  const [show, setShow] = useState(false);
  const { createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    setLoading,
   } = useContext(AuthContext);
   const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('Register function start',{displayName,photoURL,email,password});
    
  

    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!regExp.test(password)) {
      toast.error(
        "Password must have at least one uppercase, one lowercase letter and be 6 characters long"
  );
  return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
    .then((res)=> {
       updateProfileFunc(displayName, photoURL)
      .then(() => {
        setLoading(false);
        toast.success("Registration successful");
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
      }).catch((e) => {
      console.log(e.code);
      if (e.code == "auth/email-already-in-use"){
        toast.error("User already in exist in database.");
      }else if (e.code === "auth/invalid-email") {
      toast.error("Please enter a valid email address.");
      }else if (e.code === "auth/operation-not-allowed") {
      toast.error("Email/password accounts are not enabled.");

    } else if (e.code === "auth/network-request-failed") {
      toast.error("Network error. Check your internet connection.");

    }
      else{
        toast.error(e.message);
      }
      
    })
  }

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
            <h1 className="text-5xl font-bold mb-6">Register now!</h1>
            <p className="text-lg leading-relaxed">
             Share extra food, fight hunger, and spread kindness in your community.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center mb-20 lg:mb-0">
            <div className="card w-full max-w-sm bg-orange-50/90 backdrop-blur shadow-2xl border border-orange-300">
              <div className="card-body">
                
                <form onSubmit={handleRegister} className="space-y-3">

                  <div>
                    <label className="label font-semibold text-orange-500">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered w-full border-orange-300 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="label font-semibold text-orange-500">Photo URL</label>
                    <input
                      type="text"
                      name="image"
                      placeholder="Photo URL"
                      className="input input-bordered w-full border-orange-300 focus:border-orange-500"
                    />
                  </div>

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
                    Register
                  </button>

                  <p className="text-center font-semibold text-sm">
                    Already have an account?{" "}
                    <Link to="/Login" className="text-orange-500 hover:underline">
                      Login
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

export default Registration;
