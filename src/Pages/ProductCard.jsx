import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Product from "../Components/Product";

const ProductCard = () => {
    const { brandName } = useParams()
    const products = useLoaderData()
    const brandProducts = products.filter(brandProducts => brandProducts.brandName === brandName);
    return (
        <>
            <Navbar></Navbar>
            <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                {
                    brandProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </>
    );
};

export default ProductCard;