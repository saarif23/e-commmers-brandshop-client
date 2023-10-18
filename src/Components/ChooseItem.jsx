

const ChooseItem = ({ item }) => {
    console.log(item)
    const {  name, brandName, type, price, rating, image } = item;
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

                        <p>Salary : {price}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    );
};

export default ChooseItem;