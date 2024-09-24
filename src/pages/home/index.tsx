import Hero from "./Hero.tsx";
import LinksList from "../../components/Links.tsx";
import Deals from "./Deals.tsx";
import Trending from "./Trending.tsx";
import CatSection from "../../components/CatSection.tsx";

const Home = () => {
    return(
        <>
            <Hero />
            <LinksList />
            <Deals />
            <Trending />
            <CatSection />
        </>
    )
}


export default Home;