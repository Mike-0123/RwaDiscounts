import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages";
import "./App.css"
import Home from "./pages/home";
import Product from "./pages/product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/product/:productId",
                element: <Product />
            }
        ]
    }
])




export default function App() {
    return(
        <RouterProvider router={router} />
    )
}