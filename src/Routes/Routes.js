import ForMoreInfo from "../components/ForMoreInfo";
import Home from "../components/Home";
import Main from "../components/Layout/Main";
import Login from "../components/Login";
import Reviews from "../components/Reviews";

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
                element:<ForMoreInfo></ForMoreInfo>
            },
            {
                path:"/reviews",
                element:<Reviews></Reviews>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '*', 
                element: <div><h2 className='mt-5'>404 Route Not Found</h2></div> 
            }
        ]
    }
]);

export default router;