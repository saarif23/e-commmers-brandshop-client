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
       <div className="bg-stone-200 py-10">
         <div className="text-center font-bold max-w-6xl mx-auto">
            <h3 className="text-4xl">Popular category</h3>
            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-5 max-lg:mx-5 my-10">
                {
                    category.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
       </div>
    );
};

export default Categories;