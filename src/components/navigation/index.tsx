import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import Search from "./Search.tsx";
import Categories from "./Categories.tsx";
import { FaRegUser as UserIcon } from "react-icons/fa";
import { BsCart4 as CartIcon } from "react-icons/bs";
import Button from "../ui/Button.tsx";
import SearchMobile from "./SearchMobile.tsx";


const Navigation = () => {
    return(
        <>
            <div className="border-b border-primary-blue/30">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <Link to={"/"}>
                            <img
                                className="h-9"
                                src={`${Logo}`}
                                alt="Logo of the compoany"
                            />
                        </Link>
                        <div className="items-center gap-5 hidden xl:inline-flex">
                            <div className="flex gap-3">
                                <Link to={""}>Store Location</Link>
                                <Link to={"/sell-on-rwaDiscounts"}>Sell on RwaDiscounts</Link>
                            </div>
                            <Search/>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link to={""}>Help</Link>
                            <div>
                                <Button className={"hidden 2xl:inline-flex"}>Login | Signup</Button>
                                <button className="inline-flex 2xl:hidden">
                                    <UserIcon size={20}/>
                                </button>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-2 rounded-full border-primary-blue border">
                                <CartIcon size={24} />
                                <span className="h-full px-2 bg-green-200 rounded-full">24</span>
                            </button>
                        </div>
                    </div>
                </div>

                <SearchMobile />
            </div>
            <Categories />
        </>
    )
}


export default Navigation;