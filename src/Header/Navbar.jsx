import { useContext,  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FiMenu } from "react-icons/fi";
import Container from "../Components/Container";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Sign Out Successfully",
        icon: "success",
      });
      navigate("/login");
    });
  };


  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "/" },
    { name: "Add Product", link: "/addProduct" },
    { name: "My Cart", link: "/myCart" },
  ];
 
  return (
    <nav
      className="fixed w-full left-0 top-0 z-[999] 
        bg-gray-900 bg-blend-overlay bg-opacity-80 text-white   pb-2"
    >
     <Container>
     <div className="flex items-center justify-between">
        <div className="mx-7">
          <img
            className="w-24 "
            src="https://i.ibb.co/c16k3jm/l-OGO-removebg-preview.png"
            alt=""
          />
        </div>
        <div
          className="text-white
          md:block hidden px-7 py-2 font-medium  rounded-b-full"
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-md:hidden">
          {user && (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                  <img
                    className="rounded-full w-12 mt-2"
                    src={user.photoURL}
                    alt="userPhoto"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52 text-xl text-left text-black"
                >
                  <li>
                    <button onClick={handleLogout}>Logout</button>{" "}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <FiMenu />
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
     </Container>
    </nav>
  );
};

export default Navbar;

