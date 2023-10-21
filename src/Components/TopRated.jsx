import { useEffect } from "react";
import { useState } from "react";
import SignleProduct from "./SignleProduct";

const TopRated = () => {
    const [products, setProducts] = useState([]);
    const filterItem = products.filter(item => item.rating > 4.50)
    console.log(filterItem)
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="max-w-6xl mx-auto my-10">
            <h3 className="text-3xl font-semibold  pb-5 text-center">Top Rated Products</h3>
            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 max-lg:mx-5 grid-cols-3 gap-5">
                {
                    filterItem.map(product => <SignleProduct key={product._id}
                        product={product}
                        products={products}
                    ></SignleProduct>)
                }
            </div>
        </div>
    );
};

export default TopRated;