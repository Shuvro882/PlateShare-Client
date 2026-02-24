import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { ClimbingBoxLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading} = use(AuthContext);
    
    const location = useLocation();

    if(loading){
        return (
          <div className='h-[97vh] flex items-center justify-center'>
            <ClimbingBoxLoader
               color="#ff7300"
               size={28}
               />
          </div>
        );
    }
    
    if(!user){
        return <Navigate to='/Login' state={location.pathname} />
    }

    return children;
};

export default PrivateRoute;