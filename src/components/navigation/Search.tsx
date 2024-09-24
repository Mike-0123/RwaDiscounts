import React from "react";
import {Form, useSearchParams} from "react-router-dom";
import { FaSearch as SearchIcon } from "react-icons/fa";


const Search = React.forwardRef(({className}, ref) => {
    const [searchParams] = useSearchParams();

    return(
        <Form ref={ref} action={"/products"} className="w-[520px] h-[42px] border border-primary-blue/50 rounded-s-md">
            <div className="flex items-center w-full h-full">
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
        </Form>
    )
})


export default Search;