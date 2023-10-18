import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Outlet></Outlet>
            <Footer></Footer>

        </>



    );
};

export default MainLayout;