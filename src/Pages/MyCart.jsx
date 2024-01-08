import { useLoaderData } from "react-router-dom";
import ChooseItem from "../Components/ChooseItem";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const chooseProduct = useLoaderData();
  // console.log(chooseProduct);
  const [myCartProduct, setMyCartProduct] = useState(chooseProduct);
  const userWithEmail = myCartProduct.filter(
    (item) => item.email === user.email
  );

  return (
    <div className="min-h-screen max-w-5xl mx-auto gap-5 pt-24 grid grid-cols-1 lg:grid-cols-2 pb-10 ">
      {userWithEmail?.map((item) => (
        <ChooseItem
          key={item._id}
          item={item}
          myCartProduct={myCartProduct}
          setMyCartProduct={setMyCartProduct}
        ></ChooseItem>
      ))}
    </div>
  );
};

export default MyCart;
