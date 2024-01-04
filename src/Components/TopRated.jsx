import { useEffect } from "react";
import { useState } from "react";
import SignleProduct from "./SignleProduct";
import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "./Container";

const TopRated = () => {
  const [showAll, setShowAll] = useState(true);
  const [products, setProducts] = useState([]);
  const filterItem = products.filter((item) => item.rating >= 4.5);
  console.log(filterItem);
  useEffect(() => {
    fetch(
      "https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <div className="my-10">
        <h3 className="text-4xl font-Roboto font-bold border-l-8 border-[#176B87] p-2 text-[#176B87] mb-5">
          Top Rated Products
        </h3>
        <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 max-lg:mx-5 grid-cols-3 gap-5">
          {(showAll ? filterItem.slice(0, 5) : filterItem).map((product) => (
            <SignleProduct
              key={product._id}
              product={product}
              products={products}
            ></SignleProduct>
          ))}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex mx-auto  justify-center items-center gap-3 bg-[#176B87] px-5 py-2 mt-5 rounded-md text-white "
        >
          {showAll ? "See More " : "See Less"}
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </button>
      </div>
    </Container>
  );
};

export default TopRated;
