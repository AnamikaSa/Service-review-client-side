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
            }
        ]
    }
]);

export default router;