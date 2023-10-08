import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Sheare/RootLayout";
import Navbar from "../Sheare/Navbar/Navbar";
import Bannar from "../Components/Bannar/Bannar";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout></RootLayout>,
        children:[
            {
                path:"/",
                element: <Bannar></Bannar>
            }
        ]
    }
])