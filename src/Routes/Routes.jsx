import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Sheare/RootLayout";
import Navbar from "../Sheare/Navbar/Navbar";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout></RootLayout>,
        children:[
            {
                path:"/",
                element: ""
            }
        ]
    }
])