import React from 'react';
import { Link } from 'react-router';
import errorPic from '../../assets/error.jpg'


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <img
          src={errorPic}
          alt="404 error"
          className="w-64 mx-auto mb-2"
        />

        <Link to="/" className="btn text-white bg-orange-500 mt-6">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;