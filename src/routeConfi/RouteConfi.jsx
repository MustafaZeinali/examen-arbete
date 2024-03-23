import { createBrowserRouter } from "react-router-dom";

import MainPage from "../components/routes/MainPage";
import Root from "./Root";
import UpdateItem from "../components/content/UpdateContent";
import Login from "../components/Login";


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
            },
            {
                path:"/sign",
                element: <Login/>
            }
        ]
    }
])

export default router
