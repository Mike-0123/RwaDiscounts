import React from "react";
import {useSearchParams} from "react-router-dom";
import {FaSearch as SearchIcon} from "react-icons/fa";
import {cn} from "../../utils/utils.ts";


const Search = React.forwardRef(({className}, ref) => {
    const [searchParams] = useSearchParams();

    return(
        <form ref={ref} action={"/products"} className="w-[520px] h-[42px] border border-primary-blue/50 rounded-s-md">
            <div className={cn("flex items-center w-full h-full", className)}>
                <input
                    type="text"
                    name="q"
                    id="query"
                    className="w-full outline-none ps-2 pe-4 placeholder:text-sm bg-transparent"
                    defaultValue={searchParams.get("q") || ""}
                    placeholder={"Search products, brands and categories..."}
                />
                <button type={"submit"} className="bg-primary-blue text-white h-full px-4">
                    <SearchIcon/>
                </button>
            </div>
        </form>
    )
})


export default Search;