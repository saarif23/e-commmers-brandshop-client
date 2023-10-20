import { Link } from "react-router-dom";
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Product = ({ product }) => {
    const { _id, name, brandName, type, price, rating, image } = product;
    return (
        <div className="p-5 shadow-md bg-lime-50 max-lg:mx-5">
            <img className="w-[300px] h-[400px]" src={image} alt="productImage" />
            <hr />
            <div className=" p-3">
                <div className='space-y-2'>
                    <h3 className="text-xl font-bold"> {name}</h3>
                    <div className="flex justify-between">
                        <p>{type}</p>
                        <p>Brand : {brandName}</p>
                    </div>
                    <p className="text-xl font-bold">${price}</p>

                   <div className="flex gap-3">
                   <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>{rating} (15 reviews)</p>
                   </div>

                    <div className='flex justify-between '>
                        <Link to={`/product/${_id}`}>

                            <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border">  <FaEye></FaEye> <span>View Details</span></div>

                        </Link>

                        <Link to={`/updateProduct/${_id}`}>
                            <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border">  <FaPen></FaPen> <span>Update Product</span></div>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Product;