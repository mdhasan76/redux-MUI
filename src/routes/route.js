import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllProduct from "../pages/AllProduct";
import Home from "../pages/Home";
import TopProduct from "../pages/TopProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/allproduct',
                element: <AllProduct/>
            },
            {
                path: '/toprated',
                element: <TopProduct/>
            },
        ]
    }
])