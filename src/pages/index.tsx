import Navigation from "../components/navigation";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx";


const Index = () => {
    return(
        <>
            <header>
                <Navigation />
            </header>
            <main className="my-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}


export default Index;