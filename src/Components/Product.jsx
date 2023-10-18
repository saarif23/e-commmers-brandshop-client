import { Link } from "react-router-dom";
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Product = ({ product }) => {
    const { _id, name, brandName, type, price, rating, image } = product;
    return (
        <div className="flex p-3 items-center bg-[#F5F4F1] rounded-lg">
            <img className="w-36" src={image} alt="coffee" />
            <div className="flex-1 flex justify-between px-3 items-center">
                <div className='text-xl'>
                    <p>Name : {name}</p>
                    <p>Type : {type}</p>
                    <p>Price : ${price}</p>
                    <p>rating : ${rating}</p>
                </div>
                <div className='text-white '>
                    <Link to={`/product/${_id}`}>
                        <p className=' bg-[#D2B48C] p-2 my-2  rounded-md'>
                            <FaEye></FaEye>
                        </p>
                    </Link>

                    <Link to={`/updateCoffee/${_id}`}>
                        <p className='bg-[#3C393B] p-2 my-2  rounded-md'><FaPen></FaPen></p>
                    </Link>
                    <p
                        className='bg-[#EA4744] p-2  my-2 rounded-md cursor-pointer'><MdDelete></MdDelete></p>
                </div>
            </div>
        </div>
    );
};

export default Product;