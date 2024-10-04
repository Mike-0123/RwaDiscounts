import SellOnRW from "../../assets/sell-on-konga.png";
import PayOnline from "../../assets/online-payment.png";
import Image2 from "../../assets/megaphone.png";
import Image3 from "../../assets/calculator.png";
import Image4 from "../../assets/question.png";
import Image5 from "../../assets/online-shop.png";
import Image6 from "../../assets/safe.png";
import Electronics from '../../assets/electronics.png'
import Card from "./Card";
import { FaRegCommentDots } from "react-icons/fa";
function SellOnRwaDis() {
  return (
    <div className="px-7 font-extralight pb-10">
      <div className="w-full flex flex-col mb-10">
        <div className=" text-[#022b5f] text-[20px] md:text-[22px]  font-bold">
          {" "}
          Sell On Rwa Discounts
        </div>
      </div>
      <div className=" w-full flex flex-wrap md:h-[250px] gap-10 p-5">
        <div className="w-1/3 h-full px-16">
          <img
            src={SellOnRW}
            alt="Sell on Rwanda Discounts"
            className=" w-full h-full"
          />
        </div>
        <div className=" flex-1 h-full">
          <div className="text-[#022b5f] font-bold text-[22px]">
            Grow your business online
          </div>
          <div className="  text-[15px] font-400 text-gray-700">
            Grow your business onlineReach millions of buyers in every state in
            Nigeria easily, get your store on Konga today!
          </div>
          <button className="px-5 py-3 text-[#ec2cb6] border-[1.5px] border-[#ec2cb6] rounded-[6px] font-bold text-[17px] mt-7"> Register Now</button>
          </div>
      </div>

      <div className="text-[#022b5f] pl-[-40px] w-full flex justify-center pt-5 font-bold text-[25px]">
        Why Sell on Rwa Discounts?
      </div>
      <div className="w full flex flex-wrap justify-center gap-10 pb-20 pt-10">
        <Card
          title="Earn More Money"
          imageSrc={PayOnline}
          description="Konga is one of the largest websites in Nigeria. Sell to over 50 million buyers across every state in Nigeria"
        />
        <Card
          title="Communication is Easy"
          imageSrc={Image2}
          description="We make it easy to exchange messages with buyers who may have questions."
        />
        <Card
          title="Low Commissions"
          imageSrc={Image3}
          description="Commission fees are as low as 3%, and you only pay when you successfully sell your product."
        />
        <Card
          title="You Have Our Support 24/7"
          imageSrc={Image4}
          description="Konga provides various tools to increase your success including: our online SellerHQ and our dedicated merchant support teams."
        />
        <Card
          title="You’re in Control"
          imageSrc={Image5}
          description="Konga is the safest and most trusted platform to buy and sell online in Nigeria. We’ve built a community that takes safety & security seriously for both buyers and sellers."
        />
        <Card
          title="We Make Sure It’s Safe"
          imageSrc={Image6}
          description="Konga is the safest and most trusted platform to buy and sell online in Nigeria. We’ve built a community that takes safety & security seriously for both buyers and sellers."
        />
      </div>
      <div className="w-full  h-52 px-10 relative ">
        <div className="font-bold text-[22px] text-[#022b5f]">
        Earn Money, Hassle Free
        </div>
        <button className="px-5 py-3 text-[#ec2cb6] border-[1.5px] border-[#ec2cb6] rounded-[6px] font-bold text-[17px] mt-7"> Register Now</button>
        <img src={Electronics} alt="Electronics" className="absolute top-10 right-10" />
      </div>
      <div className="fixed  w-20 h-20 bottom-8 right-8 rounded-full bg-[rgba(242,43,162,0.3)] flex justify-center items-center hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 ">
      <FaRegCommentDots className="text-[65px] text-[rgb(242,43,162)]" />
      </div>
    </div>
  );
}

export default SellOnRwaDis;
