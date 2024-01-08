import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import ReactStarsRating from "react-awesome-stars-rating";
import { Helmet } from "react-helmet-async";
const ChooseItem = ({ item, myCartProduct, setMyCartProduct }) => {
  const { _id, name, brandName, price, image, rating } = item;

  const handleDeleteToMyCart = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/mycart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = myCartProduct.filter(
                (item) => item._id !== _id
              );
              setMyCartProduct(remaining);
            }
          });
      }
    });
  };

  return (
    <div
      className="flex gap-5 justify-center 
         bg-black/20 rounded-lg max-md:gap-5 w-full h-80 p-5"
    >
      <Helmet>
        <title>MAOXAL | My Cart</title>
      </Helmet>
      <img className="w-1/2 h-full mx-auto" src={image} alt="" />

      <div className="space-y-3">
        <h3 className="text-2xl font-Roboto font-bold">{name}</h3>
        <p className="font-Playfair">Brand Name : {brandName}</p>
        <p className="font-Playfair">Price : ${price}</p>
        <div className="flex max-md:justify-center gap-3">
          <ReactStarsRating className="flex" value={rating} />
          <p>{rating} (15 reviews)</p>
        </div>
        <div
          onClick={() => handleDeleteToMyCart(_id)}
          className="flex justify-center items-center gap-2 p-2 font-medium text-xl rounded-md bg-[#176B87]  text-white hover:bg-red-600 hover:text-white  cursor-pointer"
        >
          <MdDeleteSweep></MdDeleteSweep> <span>Remove from cart</span>
        </div>
      </div>
    </div>
  );
};
ChooseItem.propTypes = {
  item: PropTypes.object.isRequired,
  myCartProduct: PropTypes.array.isRequired,
  setMyCartProduct: PropTypes.func,
};
export default ChooseItem;
