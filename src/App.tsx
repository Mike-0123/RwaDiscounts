import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Index from "./pages";
import "./App.css";
import Home from "./pages/home";
import Product from "./pages/product";
import SellOnRwaDis from "./pages/Sell/SellOnRwaDis";
import Dashboard from "./components/Dashboard/Dashboard";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";

const MainLayout: React.FC = () => (
  <>
  <Navigation/>    
    <Outlet />
   <Footer/>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "sell-on-rwaDiscounts",
        element: <SellOnRwaDis />,
      },
    ],
  },
  {
    path: "/sell/dashboard",
    element: <Dashboard />, // No Header and Footer, standalone Dashboard
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
