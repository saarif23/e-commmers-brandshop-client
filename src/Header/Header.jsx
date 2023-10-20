import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="text-white bg-cover min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/xH24ZRB/Banner.png")' }}>
            <div className="flex justify-center pt-28" >
                <div className="text-left space-y-5">
                    <h3 className="text-4xl font-extrabold"><span className="block text-5xl text-rose-400">Get 3%</span> Daily Cash back <span className="block text-5xl">with Apple Card</span></h3>
                    <p>And pay over time, interest‑free when you choose to check out <br /> with Apple Card Monthly Installments.*</p>
                    <button className="bg-[#E3B577] py-2 px-3 text-black rounded-md">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Header;