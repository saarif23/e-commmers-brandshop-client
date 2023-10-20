import { MdDeleteSweep } from 'react-icons/md';
import Swal from 'sweetalert2';
const ChooseItem = ({ item, myCartProduct, setMyCartProduct }) => {

    const { _id, name, brandName, type, price, rating, image } = item;

    // const handleDeleteToMyCart = _id => {
    //     console.log(_id)
    //     fetch(`http://localhost:5000/mycart/${_id}`, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
                
    //         })
    // }
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
        <div className='flex gap-20 max-w-4xl bg-gray-50 mx-auto border rounded-lg  my-5  p-5'>
            <img className='w-36' src={image} alt="" />

            <div className='text-left space-y-2'>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p>{brandName}</p>
                <p className="text-2xl font-bold">${price}</p>
            </div>
            <div>
                <div onClick={() => handleDeleteToMyCart(_id)} className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border cursor-pointer"> <MdDeleteSweep></MdDeleteSweep> <span>ARemove from cart</span></div>
            </div>
        </div>
    );
};

export default ChooseItem;