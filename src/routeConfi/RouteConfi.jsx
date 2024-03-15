import { createBrowserRouter } from "react-router-dom";

import MainPage from "../components/routes/MainPage";
import Root from "./Root";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children: [
            {
                path:"",
                element:<MainPage/>
            }
        ]
    }
])

export default router
