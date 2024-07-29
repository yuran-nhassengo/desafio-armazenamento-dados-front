import { createBrowserRouter } from "react-router-dom";
import { Login } from "./src/pages/login";
import { Home } from "./src/pages/home";
import { Signup } from "./src/pages/signup";

export const route = createBrowserRouter([
    {
        path: '/',
    element: <Home />,
     },
     {
        path: '/login',
        element: <Login />,
    },
     {
        path: '/signup',
        element: <Signup />,
    },

])