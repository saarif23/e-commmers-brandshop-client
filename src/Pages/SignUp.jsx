import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const SignUp = () => {
    const handleRegisterSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <>

            <div className="px-8 py-3 rounded-md m-10 border w-1/3 mx-auto">
                <h3 className="text-3xl py-3 font-medium">Create Account </h3>
                <form onSubmit={handleRegisterSubmit}>
                    <div className="form-control mb-2 ">
                        <label className="label font-bold">
                            <span className="label-text"> Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter First and Last Name" className="input input-bordered input-sm hover:input-success" required />
                    </div>
                    <div className="form-control mb-2 ">
                        <label className="label font-bold">
                            <span className="label-text"> Email or Mobile Phone Number</span>
                        </label>
                        <input type="email" name="email" placeholder="abcd123@gmail.com" className="input input-bordered input-sm hover:input-success" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold"> Enter Your Password</span>
                        </label>
                        <input type="password" name="password" placeholder="At least 6 characters" className="input input-bordered input-sm hover:input-success" required />
                    </div>


                    <div className="form-control py-5 ">
                        <input type="submit" value="Sign In" className="cursor-pointer input input-sm bg-yellow-400" />
                    </div>


                    <p className="p-1 text-sm py-5 ">By creating an account, you agree to <span className="cursor-pointer text-blue-800 hover:underline">Terms & Conditions of Use</span> and <span className="cursor-pointer text-blue-800 hover:underline">Privacy Notice</span>.</p>
                    <hr />
                    <p className="text-sm"> Already have an account ?
                        <Link to="/login">
                            <span className="text-blue-800 underline "> Sign In</span>
                        </Link>
                    </p>
                    <p className="text-sm"> Buying for work?
                        <span className="text-blue-800 underline cursor-pointer">Create a free business account</span>
                    </p>
                </form>

            </div>


            <Footer></Footer>
        </>
    );
};

export default SignUp;