import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Available from "../Pages/Foods/Available"
import Registration from "../Pages/Auth/Registration";
import Login from "../Pages/Auth/Login";
import ErrorPage from "../Pages/Error/ErrorPage";



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
        path:'/*',
        element:<ErrorPage />
        }
        ]
    }
])