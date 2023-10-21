import { BsArrowBarRight } from 'react-icons/bs';
const SpecialOffer = () => {
    return (
        <div className="max-w-6xl mx-auto my-10 " >

            <div className=" bg-blue-500 py-16 rounded-xl flex flex-col lg:flex-row items-center justify-center gap-16 max-md:px-5 ">
                <div className="space-y-3 text-center text-white">
                    <p className="max-md:text-base text-xl font-bold">TABLET COLLECTION 2023</p>
                    <h3 className="max-md:text-2xl text-5xl font-extrabold">Galaxy Tab S6 Lite
                        <br /> Android Tablet</h3>
                    <p>$200.00</p>
                    <button className="bg-black font-bold text-white  px-5  py-3 rounded-md ">Shop Now</button>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/gDWyxCc/banner-slider-1-removebg-preview.png" alt="" />
                    <div className="flex absolute items-center top-2  rounded-full bg-red-400 p-10 text-white">
                        <p className="text-5xl font-bold">-35</p>
                        <div>
                            <p>%</p>
                            <p>OFF</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-200 mt-10 py-16 rounded-xl flex flex-col lg:flex-row items-center justify-center gap-16 max-md:px-5 ">
                <div className=" space-y-5 text-left max-w-sm max-lg:text-center text-black">
                    <p className="max-md:text-base text-4xl font-bold">Get up to $190 toward a new Apple Watch.18</p>
                    <h3 className="text-2xl">With Apple Trade In, just give us your eligible Apple Watch and get credit for a new one. It’s good for you and the planet.</h3>
                    <p className='flex items-center gap-2 text-blue-600 font-bold'>Find our trade-in value <BsArrowBarRight></BsArrowBarRight> </p>

                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/pwNwm5B/watchapple.png" alt="" />

                </div>
            </div>

        </div>
    );
};

export default SpecialOffer;