import React, { Children } from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, className, children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive}) =>
         isActive ? "text-orange-600" : `${className}`
        }
        >
        {children}
        </NavLink>
    );
};

export default MyLink;