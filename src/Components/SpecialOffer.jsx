
const SpecialOffer = () => {
    return (
        <div className="max-w-6xl mx-auto my-10" >

            <div className=" bg-blue-500 py-16 rounded-xl flex items-center justify-center gap-16 ">
                <div className="space-y-3 text-white">
                    <p className="text-xl font-bold">TABLET COLLECTION 2023</p>
                    <h3 className="text-5xl font-extrabold">Galaxy Tab S6 Lite
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
        </div>
    );
};

export default SpecialOffer;