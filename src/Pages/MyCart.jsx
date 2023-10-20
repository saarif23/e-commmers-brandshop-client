import { useLoaderData } from "react-router-dom";
import ChooseItem from "../Components/ChooseItem";
import { useState } from "react";

const MyCart = () => {
    const chooseProduct = useLoaderData();
    const [myCartProduct, setMyCartProduct] = useState(chooseProduct);

    return (
        <>
            {
                myCartProduct?.map(item =>
                    <ChooseItem
                        key={item._id}
                        item={item}
                        myCartProduct={myCartProduct}
                        setMyCartProduct={setMyCartProduct}
                    > </ChooseItem>)
            }


        </>
    );
};

export default MyCart;