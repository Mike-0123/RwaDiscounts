import { SlPlane as PlaneIcon } from "react-icons/sl";
import { HiOutlineTicket as TicketIcon } from "react-icons/hi2";
import { MdStorefront as StoreIcon } from "react-icons/md";
import { CiGift as GiftIcon } from "react-icons/ci";
import { TbPencil as BeautyIcon } from "react-icons/tb";
import {Link} from "react-router-dom";



const links = [
    {
        name: "Discount travel",
        path: "/discount",
        icon: PlaneIcon
    },
    {
        name: "Discount beauty",
        path: "/beauty",
        icon: BeautyIcon
    },
    {
        name: "Book ticket",
        path: "/ticket",
        icon: TicketIcon
    },
    {
        name: "Offline stores",
        path: "/stores",
        icon: StoreIcon
    },
    {
        name: "Discount gifts",
        path: "/discounts",
        icon: GiftIcon
    }
]

const LinksList = () => (
    <div className="py-4 overflow-x-scroll sm:overflow-hidden">
        <div className="container mx-auto px-4">
            <ul className="flex items-center justify-between">
                {
                    links.map((link, idx) => (
                        <Link
                            key={idx}
                            className="py-[0.8125rem] px-[1.5625rem] flex items-center gap-2"
                            to={link.path}
                        >
                            <span className="text-primary-pink text-lg"> <link.icon/> </span>
                            <span className="font-semibold text-gray-500">{link.name}</span>
                        </Link>
                    ))
                }
            </ul>
        </div>
    </div>
)


export default LinksList;