import {Link} from "react-router-dom";
import Container from "../../components/Container.tsx";
import {BiStore as StoreIcon} from "react-icons/bi";
import {TiStarFullOutline as StarIcon} from "react-icons/ti";
import laptop from "../../assets/images/laptop.png";
import {FaFacebook as Facebook} from "react-icons/fa";
import {FaSquareWhatsapp as Whatsapp, FaSquareXTwitter as Twitter} from "react-icons/fa6";
import Trending from "../home/Trending.tsx";


const Product = () => {
    return(
        <div className="py-10">
            <Container>
                <div className="grid grid-cols-2">
                    <div>
                        <h1 className="text-4xl font-semibold">Lenovo Thinkpad E14, Intel Core (Up to 46% Off)</h1>
                        <div>
                            <div className="flex items-center mt-2 text-lg text-gray-500 space-x-2">
                                <StoreIcon/>
                                <h3>Amarange Enterprises</h3>
                                <span>(Kigali, Kicukiro, Zindiro)</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500">
                                        <StarIcon/>
                                    </span>
                                    <span>(10 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={`${laptop}`}
                                className="w-full"
                                alt=""
                            />
                            <div className="flex items-center">
                                <img
                                    src={`${laptop}`}
                                    className="h-20"
                                    alt=""
                                />
                                <img
                                    src={`${laptop}`}
                                    className="h-20"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-2xl font-semibold">About and What we Offer</h2>
                            <p className="mt-2 text-[14px] text-gray-600">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed numquam non consectetur
                                quisquam excepturi voluptates quaerat porro hic fuga quasi, illum debitis rerum eos nisi
                                eligendi ullam neque nemo ex.
                                Temporibus quidem veniam suscipit, soluta, nihil corrupti sunt accusamus doloremque
                                excepturi aspernatur dolorem omnis fugit, illum rem deserunt harum magnam nisi? Maiores
                                harum error eaque nobis at aliquid omnis eum.
                                Vero, ipsum rem? Perferendis nostrum deserunt eveniet odit explicabo minima voluptas,
                                aperiam cumque, eos corrupti perspiciatis error laudantium ea dolorem temporibus
                                inventore eligendi ipsam! Velit blanditiis voluptas vel minima quasi!
                                Molestiae fugit ab quis maiores quia mollitia ullam illum velit nobis ipsa unde odit
                                blanditiis ipsum voluptas, expedita hic officiis reprehenderit quo deserunt quasi
                                facilis, molestias libero vitae? Magnam, laudantium.
                                Minima accusamus molestias ut eligendi illum, hic aperiam, atque ducimus odit numquam
                                quis nostrum dolorem. Deserunt natus debitis nemo, impedit aut esse facilis tempora
                                consectetur iste fuga! Eveniet, laboriosam asperiores?
                                Exercitationem labore vel officiis expedita, quos explicabo nesciunt at nulla reiciendis
                                blanditiis voluptatem. Vitae, assumenda.
                            </p>
                            <div className="mt-2">
                                <h4 className="text-lg">Call us for Bulk Purchases:</h4>
                                <a href={`tel: +250780236544`} className="text-[16px] text-primary-pink">0780236544</a>
                            </div>
                            <div className="mt-2">
                                <h3 className="mb-1">Share with friends:</h3>
                                <div className="flex items-center gap-2 text-3xl">
                                    <Link to={""} className="text-[#1877F2]"><Facebook/></Link>
                                    <Link to={""}><Twitter/></Link>
                                    <Link to={""} className="text-[#25D366]"><Whatsapp/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <Trending count={3} />
                </div>
            </Container>
        </div>
    )
}


export default Product;