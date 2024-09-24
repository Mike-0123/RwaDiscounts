import {Link} from "react-router-dom";
import laptop from ".././assets/images/laptop.png"
import {cn} from "../utils/utils.ts";

const DealCard = ({className}: {className?: string}) => {
    return(
        <div className={cn(className, "px-5 py-3 rounded-md hover:shadow-xl")}>
            <Link to={"/product/123"} className="flex flex-col sm:flex-row gap-4">
                <img
                    src={`${laptop}`}
                    className="w-full sm:object-cover sm:w-min h-[10rem] sm:h-[6.25rem]"
                    alt=""
                />
                <div className="flex flex-col gap-0.5">
                    <h2 className="truncate max-w-[150px] font-light text-[16px]">Lenovo Thinkpad E14, Intel Core</h2>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1">
                        <div className="flex items-center gap-3">
                            <h3 className="font-bold text-xl">120,000 Rwf</h3>
                            <p className="text-gray-500 line-through font-semibold text-sm">$20</p>
                        </div>
                        <h4 className="bg-red-300 text-red-700 rounded-md p-1">50%</h4>
                    </div>
                    <p className="font-semibold text-green-700">You save <span>102$</span></p>
                </div>
            </Link>
        </div>
    )
}


export default DealCard;