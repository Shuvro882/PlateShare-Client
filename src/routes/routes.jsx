import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Available from "../Pages/Foods/Available"
import Registration from "../Pages/Auth/Registration";
import Login from "../Pages/Auth/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import AddFood from "../Pages/Foods/AddFood";
import PrivateRoute from "../PrivateRouter/privateRoute";
import ManageFood from "../Pages/Foods/ManageFood";
import MyFood from "../Pages/Foods/MyFood";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index:true,
                element:<Home />
            },
            { path: "/available", 
              element:<Available />
            },
            {
                path: "/registration",
                element:<Registration />
            },
            {
                path: "/Login",
                element: <Login />
            },
            {
                path: "/AddFood",
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: "/ManageFood",
                element: <PrivateRoute><ManageFood /></PrivateRoute>
            },
            {
                path: "/MyFood",
                element: <PrivateRoute><MyFood /></PrivateRoute>
            },
            {
        path:'/*',
        element:<ErrorPage />
        }
        ]
    }
])