import { createBrowserRouter } from "react-router-dom";

import MainPage from "../components/routes/MainPage";
import Root from "./Root";
import UpdateItem from "../components/content/UpdateContent";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children: [
            {
                path:"",
                element:<MainPage/>
            },
            {
                path: "/edit",
                element: <UpdateItem/>
            }
        ]
    }
])

export default router
