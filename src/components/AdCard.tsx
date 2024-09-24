import {Link} from "react-router-dom";
import Swiper1 from "../assets/images/swiper2.jpeg";
import Rating from "./Rating.tsx";

const AdCard = () => {
    return(
        <Link
            to={""}
            className="relative"
        >
            <img
                src={Swiper1}
                alt="Image 1"
                className="w-full h-full object-cover"
            />
            <div className="absolute w-full bottom-0 text-white">
                <div className="bg-black/70 px-4 py-2 backdrop-blur-sm">
                    <h3 className="font-bold text-lg">Amarange Buss</h3>
                    <div>
                        <p className="mb-2">Kigali, Kimironko</p>
                        <div className="flex items-center gap-4">
                            <h3 className="font-bold text-md">120,000 Rwf</h3>
                            <p className="text-gray-200 line-through font-semibold text-sm">$20</p>
                        </div>
                        <div>
                            <Rating />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default AdCard;