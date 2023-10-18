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
        <div className="text-center font-bold my-10 max-w-6xl mx-auto">
            <h3 className="text-4xl">Popular category</h3>
            <div className="grid grid-cols-3 gap-5 my-10">
                {
                    category.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;