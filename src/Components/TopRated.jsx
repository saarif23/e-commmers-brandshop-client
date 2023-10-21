import { useEffect } from "react";
import { useState } from "react";
import SignleProduct from "./SignleProduct";
import { AiOutlineArrowRight } from 'react-icons/ai';


const TopRated = () => {
    const [showAll, setShowAll] = useState(true);
    const [products, setProducts] = useState([]);
    const filterItem = products.filter(item => item.rating >= 4.50)
    console.log(filterItem)
    useEffect(() => {
        fetch("https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="max-w-6xl mx-auto my-10">
            
            <h3 className="text-3xl font-semibold  pb-5 text-center font-Roboto">Top Rated Products</h3>
            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 max-lg:mx-5 grid-cols-3 gap-5">
                {
                    (showAll ? filterItem.slice(0, 5) : filterItem).map(product => <SignleProduct key={product._id}
                        product={product}
                        products={products}
                    ></SignleProduct>)
                }
            </div>
            <button onClick={() => setShowAll(!showAll)} className='flex mx-auto  justify-center items-center gap-3 bg-sky-400 px-5 py-2 mt-5 rounded-md text-white '>{showAll ? "See More " : "See Less"}<AiOutlineArrowRight></AiOutlineArrowRight> </button>
        </div>
    );
};

export default TopRated;