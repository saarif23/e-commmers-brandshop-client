import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const AddProduct = () => {

    const handleFromSubmit = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const brandName = from.brandName.value;
        const type = from.type.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const image = from.image.value;
        const details = from.details.value;
        const newProduct = { name, brandName, type, price, rating, image, details };
        console.log(newProduct);

        // new product send to the server 
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Success!',
                    text: 'New Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                from.reset();
            })

    }
    return (
        <div>

            <div className=" text-center min-h-screen bg-cover bg-center pb-16 " style={{ backgroundImage: 'url("https://i.ibb.co/hCNJXM2/addproduct-bg.jpg")' }}>

                <Link to="/"><button className="p-5 flex items-center mx-auto hover:text-sky-700 hover:underline"> <AiOutlineArrowLeft></AiOutlineArrowLeft>Back To Home</button></Link>
                <div className="max-w-5xl mx-auto py-8 rounded-md">
                    <div className="max-w-2xl space-y-3 mx-auto">
                        <h3 className="text-3xl text-center text-[#374151] font-extrabold">Add New Product</h3>
                        <p>Product creation is an excellent time for optimizing your product title, description, and image alt tags for search engines. See our Guide to SEO for advice and tips to get started with SEO in BigCommerce.</p>
                    </div>
                    <form onSubmit={handleFromSubmit} className="px-10">
                        {/* From row with name and Brand name */}
                        <div className="flex max-md:flex-col flex-row gap-5">
                            <div className="form-control max-md:w-full w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control max-md:w-full w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Brand Name</span>
                                </label>
                                <input type="text" name="brandName" placeholder="Enter Brand Name " className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with Type and Price */}
                        <div className="flex max-md:flex-col flex-row gap-5">
                            <div className="form-control max-md:w-full w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Product Type</span>
                                </label>
                                <input type="text" name="type" placeholder="Enter Product Type" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control max-md:w-full w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter Product Price " className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with Rating and Image */}
                        <div className="flex max-md:flex-col flex-row gap-5">
                            <div className="form-control max-md:w-full w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control max-md:w-full w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Product Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Enter Product URL" className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* From row with details */}
                        <div className="">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text  text-black">Short Description</span>
                                </label>
                                <input type="text" name="details" placeholder="Enter Product Description" className="input input-bordered w-full" />
                            </div>

                        </div>
                        {/* From Submit button */}
                        <div className="">
                            <div className="form-control w-full my-5">
                                <input type="submit" value="Add Product" placeholder="Enter Category" className="input text-white  bg-lime-600 font-bold w-full " />
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;


