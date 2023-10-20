import { MdDeleteSweep } from 'react-icons/md';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types'
const ChooseItem = ({ item, myCartProduct, setMyCartProduct }) => {

    const { _id, name, brandName, price, image } = item;

    const handleDeleteToMyCart = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mycart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = myCartProduct.filter(item => item._id !== _id)
                            setMyCartProduct(remaining);
                        }
                    })


            }
        })
    }

    return (
        <div className='flex max-md:flex-col flex-row max-md:justify-center justify-between max-w-4xl bg-gray-50 mx-auto border rounded-lg max-md:gap-5  my-5  p-5'>
            <img className='w-36 mx-auto' src={image} alt="" />

            <div className='text-left max-md:text-center max-md:w-full w-80 space-y-2'>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p>{brandName}</p>
                <p className="text-2xl font-bold">${price}</p>
            </div>
            <div>
                <div onClick={() => handleDeleteToMyCart(_id)} className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-200 text-red-600 hover:bg-slate-600 border cursor-pointer"> <MdDeleteSweep></MdDeleteSweep> <span>Remove from cart</span></div>
            </div>
        </div>
    );
};
ChooseItem.propTypes = {
    item: PropTypes.object.isRequired,
    myCartProduct: PropTypes.array.isRequired,
    setMyCartProduct: PropTypes.func
}
export default ChooseItem;