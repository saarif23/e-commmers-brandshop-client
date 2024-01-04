import ReactStarsRating from 'react-awesome-stars-rating';
import PropTypes from 'prop-types'
const SignleProduct = ({ product }) => {
    const { name, image, price, rating, brandName } = product;
    return (
        <div className='p-2 bg-gray-800 rounded-md '>
            <div className="flex h-full items-center gap-5 py-2  ">
                <div className="w-1/3">
                    <img className="w-full " src={image} alt="Buds" />
                </div>
                <div className="flex-1 space-y-2 font-Playfair">
                    <h2 className="text-xl font-bold font-Roboto ">{name} </h2>
                    <p>{brandName}</p>
                    <p className="text-[#176B87] font-bold">$ {price}</p>
                    <div className='flex items-center gap-3'>
                        <ReactStarsRating className="flex" value={rating} />
                        <p>{rating} (9)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
SignleProduct.propTypes = {
    product: PropTypes.object.isRequired
}
export default SignleProduct;