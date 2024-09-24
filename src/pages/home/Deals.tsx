import Container from "../../components/Container.tsx";
import {Link} from "react-router-dom";
import bg_icons from "../../assets/images/bg-icons.png"
import DealCard from "../../components/DealCard.tsx";


const Deals = () => {
    return(
        <section className="my-4">
            <Container>
                <div
                    className="flex items-center justify-between bg-dark-pink p-4 rounded-md"
                    style={{
                        backgroundImage: `url(${bg_icons})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <h1 className="text-2xl font-bold text-white">Daily Deals</h1>
                    <Link
                        to={"/products"}
                        className="text-gray-200 font-semibold hover:underline"
                    >See All items</Link>
                </div>
                <ul className="grid grid-cols-2 xl:grid-cols-3 gap-3 my-4">
                    {
                        Array(6)
                            .fill(0)
                            .map((_, idx) => {
                                return (
                                    <li key={idx}>
                                        <DealCard key={idx} className={""}/>
                                    </li>
                                )
                            })
                    }
                </ul>
            </Container>
        </section>
    )
}


export default Deals;