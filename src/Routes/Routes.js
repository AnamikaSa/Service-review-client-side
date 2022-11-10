import Blog from "../components/Blog";
import ForMoreInfo from "../components/ForMoreInfo";
import Home from "../components/Home";
import Main from "../components/Layout/Main";
import Login from "../components/Login";
// import MyReviews from "../components/MyReviews";
import Reviews from "../components/Reviews";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/formoreinfo',
                element:<PrivateRoute><ForMoreInfo></ForMoreInfo></PrivateRoute>
            },
            {
                path:"/reviews",
                element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path: '*', 
                element: <div><h2 className='mt-5'>404 Route Not Found</h2></div> 
            }
        ]
    }
]);

export default router;