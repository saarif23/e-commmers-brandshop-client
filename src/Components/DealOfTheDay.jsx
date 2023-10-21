import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';

const DealOfTheDay = () => {
    return (
        <div className="bg-sky-100 py-10">
            <div className=' max-w-6xl mx-auto max-lg:px-5'>
                <div className="flex max-md:flex-col flex-row justify-between max-md:gap-5 ">
                    <h3 className="text-4xl text-center font-bold">Deal of The Day</h3>
                    <span className='flex justify-center items-center gap-3 bg-sky-400 px-5 py-2 rounded-md text-white '>View All Deals <AiOutlineArrowRight></AiOutlineArrowRight> </span>
                </div>
                {/* products */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                    <div className="p-5 rounded-lg shadow-md bg-lime-50">
                        <img className="w-[200px] h-[250px] mx-auto py-5" src="https://i.ibb.co/d7Ydddn/Phon.webp" alt="productImage" />
                        <hr />
                        <div className=" p-3">
                            <div className='space-y-2'>
                                <h3 className="text-xl font-bold"> OnePlus Nord N20 SE</h3>
                                                                    
                                    <p>Brand : Oneplus</p>
                                
                                <p className="text-xl font-bold text-blue-800">$6000</p>

                                <div className='flex items-center gap-4'>
                                    <div className="rating text-xs">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <p> 5.00 (7 reviews)</p>
                                </div>
                                <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border">  <FaEye></FaEye> <span>View Details</span></div>

                                {/* countdown */}
                                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 15 }}></span>
                                        </span>
                                        days
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 10 }}></span>
                                        </span>
                                        hours
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 24 }}></span>
                                        </span>
                                        min
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 20 }}></span>
                                        </span>
                                        sec
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="p-5 rounded-lg shadow-md bg-lime-50">
                        <img className="w-[200px] h-[250px] mx-auto py-5" src="https://i.ibb.co/31wc3r2/Headphones-removebg-preview.png" alt="productImage" />
                        <hr />
                        <div className=" p-3">
                            <div className='space-y-2'>
                                <h3 className="text-xl font-bold">Wireless Bluetooth UVnano+</h3>
                                                                    
                                    <p>Brand : LG</p>
                                
                                <p className="text-xl font-bold text-blue-800">$132.39</p>

                                <div className='flex items-center gap-4'>
                                    <div className="rating text-xs">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <p> 4.50 (7 reviews)</p>
                                </div>
                                <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border">  <FaEye></FaEye> <span>View Details</span></div>

                                {/* countdown */}
                                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 15 }}></span>
                                        </span>
                                        days
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 10 }}></span>
                                        </span>
                                        hours
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 24 }}></span>
                                        </span>
                                        min
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 20 }}></span>
                                        </span>
                                        sec
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="p-5 rounded-lg shadow-md bg-lime-50">
                        <img className="w-[200px] h-[250px] mx-auto py-5" src="https://i.ibb.co/d7Ydddn/Phon.webp" alt="productImage" />
                        <hr />
                        <div className=" p-3">
                            <div className='space-y-2'>
                                <h3 className="text-xl font-bold"> Smarter. Brighter. Mightier.</h3>
                                                                    
                                    <p>Brand : Apple Watch</p>
                                
                                <p className="text-xl font-bold text-blue-800">$42.20</p>

                                <div className='flex items-center gap-4'>
                                    <div className="rating text-xs">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <p> 5.00 (24 reviews)</p>
                                </div>
                                <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border">  <FaEye></FaEye> <span>View Details</span></div>

                                {/* countdown */}
                                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 15 }}></span>
                                        </span>
                                        days
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 10 }}></span>
                                        </span>
                                        hours
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 24 }}></span>
                                        </span>
                                        min
                                    </div>
                                    <div className="flex flex-col p-2 border rounded-box text-black">
                                        <span className="countdown font-mono text-4xl">
                                            <span style={{ "--value": 20 }}></span>
                                        </span>
                                        sec
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                
                </div>




            </div>


        </div>
    );
};

export default DealOfTheDay;