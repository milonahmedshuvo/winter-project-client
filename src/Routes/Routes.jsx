import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Sheare/RootLayout";
import Navbar from "../Sheare/Navbar/Navbar";
import Bannar from "../Components/Bannar/Bannar";
import Category from "../Components/Category/Category";
import Home from "../Components/Home";
import DatailsPage from "../Components/Products/DatailsPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout></RootLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/productDatails/:id",
                element: <DatailsPage></DatailsPage>
            }
            
        ]
    }
])