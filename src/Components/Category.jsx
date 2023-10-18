import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { id, brandName, brandImage } = category;
    return (
        <div className="h-[300px] py-5">
            <img className="h-full w-full rounded-md" src={brandImage} alt="" />
            <Link to={`/category/${brandName}`}> <h3 className=" text-3xl  text-blue-500 underline">{brandName}</h3></Link>
        </div>
    );
};

export default Category;