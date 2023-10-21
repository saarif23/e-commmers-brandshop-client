import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import AddProduct from '../Pages/AddProduct';
import MyCart from '../Pages/MyCart';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import ProductCard from '../Pages/ProductCard';
import ProductDetails from '../Pages/ProductDetails';
import UpdateProduct from '../Pages/UpdateProduct';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Pages/ErrorPage';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/products/${params.id}`)
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/mycart')
            },
            {
                path: '/category/:brandName',
                element: <ProductCard></ProductCard>,
                loader: () => fetch('https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/products')
            },
            {
                path: '/product/:_id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-75ovir89b-arif-hossains-projects.vercel.app/products'),
                
            },

        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    }
])
export default Router;