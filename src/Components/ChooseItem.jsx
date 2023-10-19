
const ChooseItem = ({ item }) => {

    const { _id, name, brandName, type, price, rating, image } = item;

    const handleDeleteToMyCart = id => {
        console.log(id)
        fetch(`http://localhost:5000/mycart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='flex gap-20 max-w-4xl mx-auto border rounded-lg  my-5 items-center p-5'>
            <img className='w-36' src={image} alt="" />

            <div className='text-left space-y-3'>
                <h3 className="text-2xl">{name}</h3>
                <p>{brandName}</p>
                <div className="flex gap-10">
                    {/* <button className="border text-blue-700 rounded-lg py-2  px-5">{remote_or_onsite}</button>
                <button className="border text-blue-700 rounded-lg py-2   px-5">{rating}</button> */}
                </div>
                <div className="flex gap-5">
                    <div className='flex gap-2 items-center'>
                        <p>{type}</p>
                    </div>
                    <div className='flex gap-2 items-center'>

                        <p>Price : {price}</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleDeleteToMyCart(_id)} className="btn btn-primary">Delete From Cart</button>
            </div>
        </div>
    );
};

export default ChooseItem;