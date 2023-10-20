import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const navLinks = <>
        <li className="mr-5"><NavLink to="/">Home</NavLink></li>
        <li className="mr-5"><NavLink to="/addProduct">Add Product</NavLink></li>
        <li className="mr-5"><NavLink to="/myCart">My Cart</NavLink></li>
    </>
    const handleLogout = () => {
        logout()
            .then(() => {
                return Swal.fire({
                    title: "Good job!",
                    text: "Sign Out Successfully",
                    icon: "success",
                });
            })
    }
    return (
       <div className="shadow-xl bg-slate-100">
         <div className="navbar max-w-6xl mx-auto ">
       <div className="navbar-start">
           <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                   {navLinks}
               </ul>
           </div>
           <img className="w-36" src="https://i.ibb.co/c16k3jm/l-OGO-removebg-preview.png" alt="" />
       </div>
       <div className="navbar-center hidden lg:flex">
           <ul className="menu menu-horizontal px-1 lg:text-xl">
               {navLinks}
           </ul>
       </div>
       <div className="navbar-end">
           {/* <Link to='/login'><button>Login</button></Link> */}
           {
               user ?
                   <div className="dropdown dropdown-end">
                       <label tabIndex={0} className="m-1">
                           <div ><img className="rounded-full w-12" src={user.photoURL} alt="userPhoto" /></div>
                       </label>
                       <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52 text-xl text-left text-black">
                           <li><button>{user.displayName}</button></li>
                           <li><Link to="/login"> <button onClick={handleLogout}>Logout</button> </Link></li>
                       </ul>
                   </div>
                   : <Link to="/login"><button className="btn btn-sm">Sign In</button></Link>
           }
       </div>
   </div></div>
    );
};

export default Navbar;