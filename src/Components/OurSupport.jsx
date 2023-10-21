import { GrDeliver } from 'react-icons/gr';
import { BsCurrencyDollar, BsDisc } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
const OurSupport = () => {
    return (
        <div className='max-w-6xl my-10 mx-auto '>
            <p className='text-center font-extrabold text-3xl font-Roboto py-5'>Our Support and Facilities</p>
            <div className='grid grid-cols-1 font-Playfair md:grid-cols-2 lg:grid-cols-4 gap-5 max-lg:px-5'>
                <div className='flex items-center gap-10 lg:gap-5 bg-slate-200 p-5 rounded-md'>
                    <div className='text-3xl'>
                        <GrDeliver></GrDeliver>
                    </div>
                    <div>
                        <p className="font-bold text-xl  text-red-600">Free Delivery</p>
                        <p>Orders from all item</p>
                    </div>
                </div>
                <div className='flex items-center gap-10 lg:gap-5 bg-slate-200 p-5 rounded-md'>
                    <div className='text-3xl'>
                        <BsCurrencyDollar></BsCurrencyDollar>
                    </div>
                    <div>
                        <p className="font-bold text-xl  text-red-600">Return & Refund</p>
                        <p>Money back guarantee</p>
                    </div>
                </div>
                <div className='flex items-center gap-10 lg:gap-5 bg-slate-200 p-5 rounded-md'>
                    <div className='text-3xl'>
                        <BsDisc></BsDisc>
                    </div>
                    <div>
                        <p className="font-bold text-xl  text-red-600">Member Discount</p>
                        <p>Onevery order over $140.00</p>
                    </div>
                </div>
                <div className='flex items-center gap-10 lg:gap-5 bg-slate-200 p-5 rounded-md'>
                    <div className='text-3xl'>
                        <BiSupport></BiSupport>
                    </div>
                    <div>
                        <p className="font-bold text-xl  text-red-600">Support 24/7y</p>
                        <p>Contact us 24 hours a day</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSupport;