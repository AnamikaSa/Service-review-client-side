import ForMoreInfo from "../components/ForMoreInfo";
import Home from "../components/Home";
import Main from "../components/Layout/Main";

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
            }
        ]
    }
]);

export default router;