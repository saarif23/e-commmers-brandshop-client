import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import img from "../assets/banner2.jpg";

const AddProduct = () => {
  const handleFromSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const brandName = from.brandName.value;
    const type = from.type.value;
    const price = from.price.value;
    const rating = from.rating.value;
    const image = from.image.value;
    const details = from.details.value;
    const newProduct = { name, brandName, type, price, rating, image, details };
    console.log(newProduct);

    // new product send to the server
    fetch(
      "https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "New Product Added Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        from.reset();
      });
  };
  return (
    <div>
      <Helmet>
        <title>MAOXAL | Add New Product</title>
      </Helmet>
      <div
        className=" text-center min-h-screen bg-cover bg-center pb-16 "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="p-10 flex font-Playfair items-center mx-auto hover:text-sky-700 hover:underline"></div>

        <div className="max-w-5xl mx-auto  rounded-md py-5 bg-black bg-blend-overlay bg-opacity-50 mt-10 ">
          <div className="max-w-2xl space-y-3 mx-auto">
            <h3 className="text-4xl font-Roboto font-bold   text-[#176B87]">
              Add New Product
            </h3>
            <p className="font-Playfair">
              Product creation is an excellent time for optimizing your product
              title, description, and image alt tags for search engines. See our
              Guide to SEO for advice and tips to get started with SEO in
              BigCommerce.
            </p>
          </div>
          <form onSubmit={handleFromSubmit} className="px-10 font-Playfair">
            {/* From row with name and Brand name */}
            <div className="flex max-md:flex-col flex-row gap-5">
              <div className="form-control max-md:w-full w-1/2">
                <label className="label">
                  <span className="label-text  text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Product Name"
                  className="input input-bordered border-white focus:border-blue-500 bg-black/10 w-full"
                />
              </div>
              <div className="form-control max-md:w-full w-1/2">
                <label className="label">
                  <span className="label-text  text-white">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  required
                  placeholder="Enter Brand Name "
                  className="input input-bordered border-white focus:border-blue-500 bg-black/10 w-full"
                />
              </div>
            </div>
            {/* From row with Type and Price */}
            <div className="flex max-md:flex-col flex-row gap-5">
              <div className="form-control max-md:w-full w-1/2">
                <label className="label">
                  <span className="label-text  text-white">Product Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  required
                  placeholder="Enter Product Type"
                  className="input input-bordered border-white focus:border-blue-500 bg-black/10 w-full"
                />
              </div>
              <div className="form-control max-md:w-full w-1/2">
                <label className="label">
                  <span className="label-text  text-white">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  required
                  placeholder="Enter Product Price "
                  className="input input-bordered border-white focus:border-blue-500 bg-black/10 w-full"
                />
              </div>
            </div>
            {/* From row with Rating and Image */}
            <div className="flex max-md:flex-col flex-row gap-5">
              <div className="form-control max-md:w-full w-1/2">
                <label className="label">
                  <span className="label-text  text-white">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  required
                  placeholder="Rating"
                  className="input input-bordered border-white focus:border-blue-500 bg-black/10 w-full"
                />
              </div>
              <div className="form-control max-md:w-full w-1/2">
                <label className="label">
                  <span className="label-text  text-white">Product Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  required
                  placeholder="Enter Product URL"
                  className="input input-bordered border-white focus:border-blue-500 bg-black/10 w-full"
                />
              </div>
            </div>

            {/* From row with details */}
            <div className="">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text  text-white">
                    Short Description
                  </span>
                </label>
                <textarea
                  type="text"
                  name="details"
                  required
                  placeholder="Enter Product Description"
                  className="textarea textarea-bordered border-white focus:border-blue-500 bg-black/10 w-full"
                />
              </div>
            </div>
            {/* From Submit button */}
            <div className="">
              <div className="form-control w-full my-5">
                <input
                  type="submit"
                  value="Add Product"
                  placeholder="Enter Category"
                  className="input text-white  bg-[#176B87] font-bold w-full "
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
