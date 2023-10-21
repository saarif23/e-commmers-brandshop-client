import ReactStarsRating from 'react-awesome-stars-rating';
const SignleProduct = ({ product }) => {
    const { name, image, price, rating, type, brandName } = product;
    return (
        <div>
            <div className="flex h-full items-center gap-5  rounded-md border">
                <div className="w-1/3">
                    <img className="w-full " src={image} alt="Buds" />
                </div>
                <div className="flex-1 space-y-2">
                    <h2 className="text-xl font-bold ">{name} </h2>
                    <p>{brandName}</p>
                    <p className="text-teal-500 font-bold">$ {price}</p>
                    <div className='flex items-center'>
                        <ReactStarsRating className="flex" value={rating} />
                        <p>{rating} (9)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignleProduct;