import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar";

const ProductDetails = () => {
    const { _id } = useParams();
    const products = useLoaderData();
    const productDetails = products.find(product => product._id === _id);
    const { name, brandName, type, price, rating, details, image } = productDetails;
    const handleAddToCart = () => {
        const chooseOne = productDetails;
        fetch('http://localhost:5000/mycart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(chooseOne)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (<>
        <Navbar></Navbar>
        <div className="grid grid-cols-3 gap-5 mx-10 ">

            <div className=" p-5 col-span-2 space-y-5 ">
                <img src={image} alt="" />
                <p><span className="text-bold text-white">Product Details :</span> {details}</p>
                {/* <p><span className="text-bold text-white">Job Description :</span> {job_responsibility}</p> */}
                {/* <p><span className="text-bold text-white">Educational Requirements: <br /> </span> {educational_requirements}</p> */}
                {/* <p><span className="text-bold text-white">Experiences : <br /> </span> {experiences}</p> */}

            </div>
            <div>
                <div className=" p-5 space-y-3 bg-slate-700 rounded-lg ">
                    <h3 className="text-xl text-white  font-semibold">Product Details </h3>
                    <hr className="my-5" />
                    <p className="text-white font-semibold"><span>Price: $</span> {price} </p>
                    <p className="text-white font-semibold"><span>Title :</span> {name}</p>

                    <h3 className="text-xl text-white  font-semibold pt-5">Additional Information </h3>
                    <hr className="my-5" />
                    <p className="text-white font-semibold"><span>Product Type :</span> {type}</p>
                    <p className="text-white font-semibold"><span>Brand Name :</span> {brandName}</p>
                    {/* <p><span className="text-white font-semibold">Address :</span> {contact_information.address}</p> */}
                </div>
                <button onClick={handleAddToCart} className="w-full btn btn-primary my-5">Add to Cart</button>
            </div>

        </div>
    </>
    );
};

export default ProductDetails;