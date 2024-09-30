import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Swiper1 from "../../assets/images/swiper2.jpeg"
import Swiper2 from "../../assets/images/swiper1.jpg"
import Siwper3 from "../../assets/images/swiper3.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AdCard from "../../components/AdCard.tsx";
import { useEffect } from "react";
import API from "../../utils/API.ts";

const Hero = () => {
    useEffect( ()=>{
        const fetchData= async ()=>{
       const t =await API.get("/");
     console.log("gghuyeuebebrninrrrrrrrrrrrrrrrrrrr",t)
     const logIn = await API.post("/")//endpont and passing the link 
        }
        fetchData();
    },[])
    return(
        <div className="container mx-auto px-4">
            <div className="grid xl:grid-cols-3 grid-cols-1 grid-rows-2 xl:grid-rows-1 gap-y-5 xl:gap-5 h-[21.25rem] lg:h-[28rem]">
                <div className="w-full relative h-full z-0 col-span-2">
                    <Swiper
                        className="h-full rounded-md"
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{clickable: true}}
                        navigation={true}
                        autoplay={{
                            delay: 3000
                        }}
                        loop={true}
                    >
                        <SwiperSlide
                            style={{
                                backgroundImage: `url(${Swiper1})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></SwiperSlide>
                        <SwiperSlide
                            style={{
                                backgroundImage: `url(${Swiper2})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></SwiperSlide>
                        <SwiperSlide
                            style={{
                                backgroundImage: `url(${Siwper3})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full grid grid-cols-4 xl:grid-cols-2 gap-4">
                    {
                        Array(4)
                            .fill(0)
                            .map((_, idx) => (
                                <img
                                    key={idx}
                                    src={Swiper1}
                                    alt="Image 1"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}


export default Hero;