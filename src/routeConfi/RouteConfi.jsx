import { createBrowserRouter } from "react-router-dom";

import MainPage from "../components/routes/MainPage";
import Root from "./Root";
import UpdateItem from "../components/content/UpdateContent.jsx";
import Login from "../components/login/Login";
import SendContents from "../components/content/PostContent";


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
            },
            {path: "/update",
             element: <UpdateItem/>
            },
            {
                path: "/post",
                element: <SendContents/>
            }
        ]
    }
])

export default router
