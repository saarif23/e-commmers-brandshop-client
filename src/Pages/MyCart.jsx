import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar";
import ChooseItem from "../Components/ChooseItem";

const MyCart = () => {
    const chooseProduct = useLoaderData();
   
    return (
        <>
            <Navbar></Navbar>
            <p>Product {chooseProduct.length}</p>
            {
                chooseProduct?.map(item => <ChooseItem key={item._id} item={item}></ChooseItem>)
            }
           

        </>
    );
};

export default MyCart;