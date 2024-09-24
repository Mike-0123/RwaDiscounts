import Container from "../../components/Container.tsx";
import {Link} from "react-router-dom";
import ProductCard from "../../components/ProductCard.tsx";


const Trending = ({count=8}: {count?:number}) => {
    return(
        <section className="my-5">
            <Container>
                <div className="flex items-center justify-between bg-gray-300/50 py-4 rounded-md">
                    <h1 className="text-2xl font-bold text-primary-blue">Trending Gifts</h1>
                    <Link
                        to={"/products"}
                        className="text-primary-blue font-semibold hover:underline"
                    >See All items</Link>
                </div>
                <ul className="grid grid-cols-2 xl:grid-cols-4 gap-3 my-4">
                    {
                        Array(count)
                            .fill(0)
                            .map((_, idx) => {
                                return (
                                    <li key={idx}>
                                        <ProductCard key={idx} className={""}/>
                                    </li>
                                )
                            })
                    }
                </ul>
            </Container>
        </section>
    )
}


export default Trending;