import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('brandData.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
       <div className="py-10 bg-sky-50">
         <div className="text-center font-bold max-w-6xl mx-auto">
            <h3 className="text-4xl font-Roboto ">Popular category</h3>
            <div className="grid max-md:grid-cols-2 max-lg:grid-cols-3 max-lg:gap-16 lg:grid-cols-6 max-lg:mx-5 my-10">
                {
                    category.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
       </div>
    );
};

export default Categories;