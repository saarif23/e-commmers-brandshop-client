import { useEffect, useState } from "react";
import Category from "./Category";
import Container from "./Container";

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("brandData.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="py-10 bg-gray-800">
      <Container>
        <h3 className="text-4xl font-Roboto font-bold border-l-8 border-[#176B87] p-2 text-[#176B87]">
          Popular category
        </h3>
        <div className="grid max-md:grid-cols-2 max-lg:grid-cols-3 max-lg:gap-16 lg:grid-cols-6 max-lg:mx-5 my-10 text-center">
          {category.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
