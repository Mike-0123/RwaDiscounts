import laptop from "../assets/images/laptop.png";
import {Link} from "react-router-dom";
import Rating from "./Rating.tsx";


const ProductCard = () => {
    return(
        <div className="px-6 py-4 hover:shadow-lg">
            <Link to={""}>
                <img
                    src={`${laptop}`}
                    className="w-full"
                    alt=""
                />
                <div className="flex flex-col gap-0.5 px-8 text-gray-500">
                    <div>
                        <h1 className="font-bold text-xl text-black">Amarange Enterprise</h1>
                        <span>Kigali, Kimihurua</span>
                    </div>
                    <h2 className="truncate max-w-[200px] font-semibold text-[16px]">Lenovo Thinkpad E14, Intel Core</h2>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1">
                        <div className="flex items-center gap-3">
                            <h3 className="font-bold text-xl">120,000 Rwf</h3>
                            <p className="discount text-gray-500 font-semibold text-sm">$20</p>
                        </div>
                        <h4 className="bg-red-300 text-red-700 rounded-md p-1">50%</h4>
                    </div>
                    <p className="font-semibold text-green-700">You save <span>102$</span></p>
                    <div className="flex items-center gap-2">
                        <Rating />
                        <span>(10 reviews)</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default ProductCard;