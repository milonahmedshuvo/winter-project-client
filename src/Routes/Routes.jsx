import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Sheare/RootLayout";
import Navbar from "../Sheare/Navbar/Navbar";
import Bannar from "../Components/Bannar/Bannar";
import Category from "../Components/Category/Category";
import Home from "../Components/Home";
import DatailsPage from "../Components/Products/DatailsPage";
import FutureProducts from "../Components/FutureProducts/FutureProducts";
import Datails from "../Components/FutureProducts/Datails";

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
            },
            {
                path: "/future",
                element: <FutureProducts></FutureProducts>
            },
            {
                path: "/futureProdcutDatails/:id",
                element: <Datails></Datails>
            }
            
        ]
    }
])