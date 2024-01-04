import { BsArrowBarRight } from "react-icons/bs";
import Container from "./Container";
const SpecialOffer = () => {
  return (
   <div className="bg-gray-800 py-10">
    <Container>
   <div className=" bg-gray-900 py-16 rounded-xl flex flex-col lg:flex-row items-center justify-center gap-16 max-md:px-5 ">
        <div className="space-y-3 text-center text-white">
          <p className="max-md:text-base text-xl font-bold font-Roboto">
            TABLET COLLECTION 2023
          </p>
          <h3 className="max-md:text-2xl text-5xl font-Playfair font-extrabold">
            Galaxy Tab S6 Lite
            <br /> Android Tablet
          </h3>
          <p>$200.00</p>
          <button className="bg-[#176B87] font-bold text-white  px-5  py-3 rounded-md ">
            Shop Now
          </button>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/gDWyxCc/banner-slider-1-removebg-preview.png"
            alt=""
          />
          <div className="flex absolute items-center top-2  rounded-full bg-red-400 p-10 text-white">
            <p className="text-5xl font-bold">-35</p>
            <div>
              <p>%</p>
              <p>OFF</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-900 mt-10 py-16 rounded-xl flex flex-col lg:flex-row items-center justify-center gap-16 max-md:px-5 ">
        <div className=" space-y-5 text-left max-w-sm max-lg:text-center text-white">
          <p className="max-md:text-2xl text-4xl font-bold font-Playfair">
            Get up to $190 toward a new Apple Watch.18
          </p>
          <h3 className="max-md:text-base text-2xl font-Roboto">
            With Apple Trade In, just give us your eligible Apple Watch and get
            credit for a new one. It’s good for you and the planet.
          </h3>
          <p className="flex max-lg:justify-center items-center gap-2 text-[#176B87] font-bold">
            Find our trade-in value <BsArrowBarRight></BsArrowBarRight>{" "}
          </p>
        </div>
        <div className="relative">
          <img src="https://i.ibb.co/pwNwm5B/watchapple.png" alt="" />
        </div>
      </div>
    </Container>
   </div>
  );
};

export default SpecialOffer;
