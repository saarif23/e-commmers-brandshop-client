import Container from "../Components/Container";
import bannerImg from "../assets/banner2.jpg";
import phon from "../assets/phon.png";
const Header = () => {
  return (
    <div
      className="py-10 bg-cover min-h-screen bg-center bg-black bg-blend-overlay bg-opacity-50 "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Container>
        <div className="flex justify-between items-center pt-20">
          <div className=" space-y-5 flex-1">
            <h3 className="text-5xl font-Roboto font-extrabold">
              Lamicall Cell Phone Stand{" "}
              <span className="text-[#176B87] text-6xl"> $9.99 </span>
              for <span className="text-[#176B87]">this month </span>
            </h3>
            <p className="font-Playfair pb-5">
              Lamicall Cell Phone Stand, Phone Dock: Cradle, Holder, Stand for
              Office Desk - Black
            </p>
            <a href="https://www.amazon.com/dp/B01HPI5AM2/ref=va_live_carousel?pf_rd_r=CV180B52WB5R9PH3QZDN&pf_rd_p=95a9e972-5aa9-4580-abd4-3b0d21e2007f&pf_rd_m=ATVPDKIKX0DER&pf_rd_t=HighVelocityEvent&pf_rd_i=deals_1_desktop&pf_rd_s=slot-13&linkCode=ilv&tag=a09784e0-20&ascsubtag=New_Year_Deals_240104180529&asc_contentid=amzn1.amazonlive.broadcast.4bd3e9d9-c90b-43c9-8890-4d1fd4a8b1dd&pd_rd_i=B01HPI5AM2&th=1">
              <button className="text-white py-2 px-5 font-Roboto bg-[#176B87] font-bold rounded-sm">
                See details
              </button>
            </a>
          </div>
          <div className="flex-1">
            <img className="h-[400px] w-2/3" src={phon} alt="phon" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
