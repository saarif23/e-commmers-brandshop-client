import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { id, brandName, brandImage } = category;
    return (
        <div className="border-2 shadow-md rounded-md h-[350px] p-5">
            <img className="rounded-full w-[250px] h-[250px] mx-auto p-5" src={brandImage} alt="" />
            <Link to={`/category/${brandName}`}> <h3 className=" text-3xl  text-blue-400 underline">{brandName}</h3></Link>
        </div>
    );
}; 

export default Category;