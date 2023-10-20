import { useLoaderData, useParams } from "react-router-dom";

import Product from "../Components/Product";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ProductCard = () => {
    const { brandName } = useParams()
    const products = useLoaderData()
    const brandProducts = products.filter(brandProducts => brandProducts.brandName === brandName);

    return (
        <>

            <div className="carousel w-full lg:h-screen md:h-[400px] h-[300px] ">
                <div id="slide1" className="carousel-item relative w-full bg-slate-300" >
                    <div className="text-black bg-cover w-full flex justify-center items-center" style={{ backgroundImage: 'url("https://i.ibb.co/xzZfPpV/slider1.jpg")' }}>
                        <div className="text-center space-y-5">
                            <p className="text-5xl font-semibold" >3D Showroom </p>
                            <p>Virtual Experience of Smart Life</p>
                            <button className="bg-black text-white py-2 px-10 rounded-md">More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="text-black bg-cover w-full flex pl-44 items-center" style={{ backgroundImage: 'url("https://i.ibb.co/yn7k6sR/slider22.png")' }}>
                        <div className="text-center space-y-5">
                            <p className="text-5xl font-semibold" >XIAOMI 13T </p>
                            <p>CO-ENGINEERED WITH <span className="bg-red-600 rounded-full  p-3 text-white font-medium">Leica</span></p>
                            <p className="text-5xl font-semibold">Masterpiece in sight</p>
                            <button className="bg-black text-white py-2 px-10 rounded-md">More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="text-black bg-cover w-full flex pl-24 items-center" style={{ backgroundImage: 'url("https://i.ibb.co/23MjMDg/slider3.jpg")' }}>
                        <div className="text-left space-y-5">
                            <p className="text-3xl font-semibold" >XIAOMI Pad 6  </p>
                            <p className="text-xl font-semibold">Built for work, designed for ease</p>
                            <p className="font-semibold">WQHD+ clear display 144Hz 7-level variable refresh rate</p>
                            <div className="flex items-center gap-2">
                                <span className="underline font-bold">Learn More</span>
                                <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                            </div>


                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="text-black bg-cover w-full flex justify-end pr-44 items-center" style={{ backgroundImage: 'url("https://i.ibb.co/Qft6GVV/slider4.jpg")' }}>
                        <div className="text-left space-y-5">
                            <p className="text-3xl font-semibold" >XIAOMI 13 Ultra </p>
                            <p>CO-ENGINEERED WITH <span className="bg-red-600 rounded-full  p-3 text-white font-medium">Leica</span></p>
                            <p className=" font-semibold" >A Shot Above </p>
                            <p className="font-semibold" >Quad Camera with leica optical lens </p>
                            <div className="flex items-center gap-2">
                                <span className="underline font-bold">Learn More</span>
                                <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                            </div>

                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto py-10">
                {
                    brandProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </>
    );
};

export default ProductCard;