import {FaSearch as SearchIcon} from "react-icons/fa";
import React from "react";
import Container from "../Container.tsx";

const SearchMobile = () => {
    return(
        <Container>
            <div className="flex xl:hidden items-center w-full mb-2 bg-gray-200 rounded-md pe-4">
                <input
                    type="text"
                    className="w-full outline-none bg-transparent px-4 py-3"
                    name=""
                    placeholder={"Search products, brands and categories..."}
                    id=""/>
                <SearchIcon/>
            </div>
        </Container>
    )
}


export default SearchMobile;