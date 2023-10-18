import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, brandName, type, price, rating, image, details } = product;

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

        // new product send to the server 
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
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
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                from.reset();
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className=" text-center min-h-screen bg-cover bg-center pb-16 " style={{ backgroundImage: 'url("https://i.ibb.co/YhwJcHf/11.png")' }}>

                <Link to="/"><button className="p-5">Back To Home</button></Link>
                <div className="bg-[#F4F3F0] max-w-5xl mx-auto py-8 rounded-md">
                    <div className="max-w-2xl space-y-3 mx-auto">
                        <h3 className="text-3xl text-center text-[#374151] font-extrabold">Update Product</h3>
                        <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleFromSubmit} className="px-10">
                        {/* From row with name and Brand name */}
                        <div className="flex gap-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Brand Name</span>
                                </label>
                                <input type="text" name="brandName" defaultValue={brandName} className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with Type and Price */}
                        <div className="flex gap-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Product Type</span>
                                </label>
                                <input type="text" name="type" defaultValue={type} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* From row with Rating and Image */}
                        <div className="flex gap-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Rating</span>
                                </label>
                                <input type="text" name="rating" defaultValue={rating} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text  text-black">Product Image</span>
                                </label>
                                <input type="text" name="image" defaultValue={image} className="input input-bordered w-full" />
                            </div>
                        </div>

                        {/* From row with details */}
                        <div className="">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text  text-black">Short Description</span>
                                </label>
                                <input type="text" name="details" defaultValue={details} className="input input-bordered w-full" />
                            </div>

                        </div>
                        {/* From Submit button */}
                        <div className="">
                            <div className="form-control w-full my-5">
                                <input type="submit" value="Update Product" className="input input-bordered w-full  bg-[#D2B48C] " />
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateProduct;