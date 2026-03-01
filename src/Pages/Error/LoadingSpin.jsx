import React from 'react';

const LoadingSpin = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-orange-500"></span>
            </div>
        </div>
    );
};

export default LoadingSpin;