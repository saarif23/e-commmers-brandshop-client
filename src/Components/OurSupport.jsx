import { GrDeliver } from "react-icons/gr";
import { BsCurrencyDollar, BsDisc } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import Container from "./Container";
const OurSupport = () => {
  return (
    <div className="bg-gray-800 my-10 py-10 ">
      <Container>
        <p className="text-4xl font-Roboto font-bold border-l-8 border-[#176B87] p-2 text-[#176B87] mb-5">
          Our Support and Facilities
        </p>
        <div className="grid grid-cols-1 font-Playfair md:grid-cols-2 lg:grid-cols-4 gap-5 max-lg:px-5">
          <div className="flex items-center gap-10 lg:gap-5 bg-gray-900 p-5 rounded-md">
            <div className="text-3xl text-white">
              <TbTruckDelivery />
            </div>
            <div>
              <p className="font-bold text-xl   text-[#176B87]">
                Free Delivery
              </p>
              <p>Orders from all item</p>
            </div>
          </div>
          <div className="flex items-center gap-10 lg:gap-5 bg-gray-900 p-5 rounded-md">
            <div className="text-3xl text-white">
              <BsCurrencyDollar />
            </div>
            <div>
              <p className="font-bold text-xl   text-[#176B87]">
                Return & Refund
              </p>
              <p>Money back guarantee</p>
            </div>
          </div>
          <div className="flex items-center gap-10 lg:gap-5 bg-gray-900 p-5 rounded-md">
            <div className="text-3xl text-white">
              <BsDisc />
            </div>
            <div>
              <p className="font-bold text-xl   text-[#176B87]">
                Member Discount
              </p>
              <p>Onevery order over $140.00</p>
            </div>
          </div>
          <div className="flex items-center gap-10 lg:gap-5 bg-gray-900 p-5 rounded-md">
            <div className="text-3xl text-white">
              <BiSupport />
            </div>
            <div>
              <p className="font-bold text-xl   text-[#176B87]">
                Support 24/7y
              </p>
              <p>Contact us 24 hours a day</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurSupport;
