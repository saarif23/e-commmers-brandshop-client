import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { BsBoxArrowUpRight, BsFillCartPlusFill } from 'react-icons/bs';
import { BiFastForward } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { SiIconfinder } from 'react-icons/si';
import ReactStarsRating from 'react-awesome-stars-rating';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Container from "../Components/Container";
const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const { email } = user;
    console.log(user.email)
    const { _id } = useParams();
    const products = useLoaderData();
    const productDetails = products.find(product => product._id === _id);
    const { name, brandName, type, price, rating, details, image } = productDetails;
    const addWithUser = { name, brandName, rating, price, image, email }
    console.log(addWithUser)
    // const addWithUser = [productDetails, user.email]
    // console.log(addWithUser)
    const handleAddToCart = () => {
        const chooseOne = addWithUser;
        fetch('https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/mycart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(chooseOne)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: "Success!",
                    text: 'Product Add To My Cart',
                    icon: "success",
                });
            })
    }
    return (
        <>
            <Container>
                <Helmet>
                    <title>MAOXAL | Product Details</title>
                </Helmet>
                <div className="pb-28">

                </div>
                <div className=" p-5 lg:flex justify-between bg-gray-800  rounded-lg shadow-xl ">
                    <h3 className="max-md:text-2xl text-4xl flex-1  font-medium">{name} </h3>
                    <div className="flex justify-between items-center gap-10">
                        <p className="max-md:text-2xl font-semibold text-3xl">${price} </p>
                        <div onClick={handleAddToCart} className="flex justify-center items-center gap-2 p-2 text-white rounded-md bg-[#176B87] hover:bg-red-700  cursor-pointer"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>Add to cart</span></div>
                    </div>

                </div>

                <div className="flex py-10 max-lg:flex-col lg:flex-row items-center gap-5  ">

                    <div className="flex-1 mx-5">
                        <img src={image} alt="" />
                        <p className="pt-10">{details}</p>
                    </div>
                    <div className="flex-1">
                        <div className=" mx-5 space-y-5 ">
                            <h3 className="text-4xl font-Roboto  font-medium">{name} </h3>
                            <p> <span className="font-bold">Brand : </span>{brandName}</p>
                            <p> <span className="font-bold">Type : </span>{type}</p>
                            <div className="flex gap-5">
                                <ReactStarsRating className="flex" value={rating} />
                                <div className="flex gap-3">
                                    <p>{rating} (6)</p>
                                    <p className="text-[#176B87] cursor-pointer  hover:underline">Write a review</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <p className=" font-semibold text-3xl">${price} </p>
                                <div className="border-l-2 pl-5">
                                    <p>4 interest-free payments of $87.49 with</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="font-extrabold">Booking</p>
                                        <BsBoxArrowUpRight></BsBoxArrowUpRight>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 py-5">
                                <span className="text-4xl"><BiFastForward></BiFastForward></span>
                                <p><span className="text-green-500 font-semibold">In Stock </span>Free Shipping & Free 30-day Returns</p>
                            </div>
                            <div className="flex gap-20">
                                <div onClick={handleAddToCart} className="flex justify-center items-center gap-2 p-2 rounded-md border hover:bg-gray-950 cursor-pointer"> <BsFillCartPlusFill></BsFillCartPlusFill> <span>Add to cart</span></div>
                                <div className="flex justify-center items-center gap-2 p-2 rounded-md  hover:bg-gray-950 border cursor-pointer"> <MdFavorite></MdFavorite> <span>Add to favorite</span></div>
                            </div>
                            <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-[#176B87] cursor-pointer"> <SiIconfinder></SiIconfinder> <span>FIND A RETAILER</span></div>

                        </div>

                    </div>

                </div>
                <h3 className="text-3xl font-medium py-5">Features and Specs</h3>
                <hr />
                <ul className="menu menu-vertical lg:menu-horizontal">
                    <li><Link >Performance</Link></li>
                    <li><Link>Design</Link></li>
                    <li><Link>Details</Link></li>
                    <li><Link>All Specs</Link></li>

                </ul>
            </Container>

        </>
    );
};

export default ProductDetails;